const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

function getHtmlFiles(dir, files = []) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            if (['node_modules', 'scripts', 'mocks', 'debug', 'assets', 'components'].includes(file)) return;
            getHtmlFiles(filePath, files);
        } else if (file.endsWith('.html')) {
            files.push(filePath);
        }
    });
    return files;
}

const htmlFiles = getHtmlFiles(rootDir);
let hasErrors = false;

htmlFiles.forEach(absolutePath => {
    const file = path.relative(rootDir, absolutePath);
    const content = fs.readFileSync(absolutePath, 'utf8');
    
    // Improved regex to capture onclick as well
    const linkTags = content.match(/<a[^>]+href="([^"]*)"[^>]*>/g);

    if (linkTags) {
        linkTags.forEach(linkTag => {
            const hrefMatch = linkTag.match(/href="([^"]*)"/);
            const onclickMatch = linkTag.match(/onclick="([^"]*)"/);
            
            if (!hrefMatch) return;
            const href = hrefMatch[1];
            
            // Skip empty hrefs if they have an onclick
            if (href === '' && onclickMatch) return;
            
            // Skip external links, anchor links, and mailto
            if (href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('javascript:')) return;

            // Resolve link path
            let linkPath;
            if (href.startsWith('/')) {
                linkPath = path.join(rootDir, href);
            } else {
                linkPath = path.resolve(path.dirname(absolutePath), href);
            }

            // Handle fragments
            const purePath = linkPath.split('#')[0];
            const fragment = linkPath.split('#')[1];

            // Clean up directory paths (e.g. /about/ -> /about/index.html)
            let checkPath = purePath;
            if (fs.existsSync(checkPath) && fs.lstatSync(checkPath).isDirectory()) {
                checkPath = path.join(checkPath, 'index.html');
            }

            if (!fs.existsSync(checkPath)) {
                console.error(`ERROR: Broken link in ${file}: ${href} (Resolved to: ${checkPath})`);
                hasErrors = true;
            } else if (fragment) {
                // Check if fragment exists in target file
                const targetContent = fs.readFileSync(checkPath, 'utf8');
                const idRegex = new RegExp(`id=["']${fragment}["']`, 'i');
                const nameRegex = new RegExp(`name=["']${fragment}["']`, 'i');
                if (!idRegex.test(targetContent) && !nameRegex.test(targetContent)) {
                    console.error(`ERROR: Broken fragment in ${file}: ${href} (ID '${fragment}' not found in ${path.relative(rootDir, checkPath)})`);
                    hasErrors = true;
                }
            }

            // Flag index.html in links
            if (href.includes('index.html') && !file.includes('mocks/')) {
                console.warn(`WARNING: index.html found in link in ${file}: ${href}`);
            }
        });
    }
});

if (!hasErrors) {
    console.log('SUCCESS: All internal links are valid.');
} else {
    process.exit(1);
}
