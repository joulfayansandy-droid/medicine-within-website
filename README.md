# Medicine Within Website - Development Build

This is the static HTML/CSS/JavaScript version of the Medicine Within website, ready for deployment.

## 📦 What's Included

- **Static HTML pages**: `index.html`, `kambo.html`, `temple.html`, `mentorship.html`, `retreats.html`
- **Styles**: `css/style.css`
- **JavaScript**: `js/main.js`, `js/video-loader.js`, and other utilities
- **Assets**: Images and videos in `assets/` directory
- **Configuration**: ConvertKit integration setup (see `CONFIG_SUMMARY.md`)

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended for Quick Testing)

**Status**: ✅ Already set up and live!

**Live URL**: https://benji-cpu.github.io/medicine-within-website/

**Custom Domain Setup**: See `DNS_CHANGES_BEFORE_AFTER.md` for step-by-step DNS configuration to use `medicinewithin.nl`

**Repository**: https://github.com/Benji-cpu/medicine-within-website

#### Quick Updates

```bash
cd build_1
git add .
git commit -m "Your update message"
git push
```

GitHub Pages automatically deploys changes in 1-2 minutes.

**See `DEPLOYMENT.md` for detailed instructions.**

#### Benefits
- ✅ Free hosting
- ✅ Automatic HTTPS
- ✅ Easy updates via git
- ✅ No server configuration needed
- ✅ Perfect for testing and staging

#### Limitations
- ⚠️ Large video files (217MB) may load slowly
- ⚠️ API keys in `js/config.js` are excluded from git (security)
- ⚠️ No server-side processing (pure static site)

---

### Option 2: WordPress Migration

For production use with WordPress CMS, see the `wp-build/` directory.

**Migration Guide**: See `WORDPRESS_MIGRATION_GUIDE.md` in this directory.

**WordPress Theme**: See `../wp-build/README.md` for installation instructions.

#### Benefits
- ✅ Full CMS functionality
- ✅ Easy content management
- ✅ Plugin ecosystem
- ✅ Better for SEO and content updates

---

### Option 3: Other Static Hosting

This build can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `build_1` folder
- **Vercel**: Connect GitHub repo or deploy via CLI
- **AWS S3 + CloudFront**: For enterprise hosting
- **Traditional Web Hosting**: Upload files via FTP

## 📁 File Structure

```
build_1/
├── index.html              # Homepage
├── kambo.html              # Kambo ceremonies page
├── temple.html             # Temple events page
├── mentorship.html         # 1:1 mentorship page
├── retreats.html           # Retreats page
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   ├── main.js            # Main JavaScript (ConvertKit integration)
│   ├── config.js          # API keys (excluded from git)
│   ├── video-loader.js    # Lazy video loading
│   └── ...                # Other utilities
├── assets/
│   ├── img/               # Images
│   └── videos/            # Video files (.mov)
├── DEPLOYMENT.md          # GitHub Pages deployment guide
├── CONFIG_SUMMARY.md      # ConvertKit configuration details
├── WORDPRESS_MIGRATION_GUIDE.md  # WordPress migration instructions
└── README.md              # This file
```

## 🔧 Development

### Local Testing

Simply open `index.html` in a web browser, or use a local server:

```bash
# Python 3
python3 -m http.server 8000

# Node.js (if you have http-server installed)
npx http-server

# Then visit: http://localhost:8000
```

### Making Changes

1. Edit HTML, CSS, or JavaScript files
2. Test locally
3. Commit and push to GitHub (if using GitHub Pages)
4. Changes deploy automatically

### ConvertKit Integration

- **API Keys**: Stored in `js/config.js` (excluded from git for security)
- **Tag-based Subscriptions**: Configured and tested (see `CONFIG_SUMMARY.md`)
- **Forms**: Work automatically via `js/main.js`

**Note**: For GitHub Pages deployment, you'll need to manually add `js/config.js` with your API keys, or use environment variables if migrating to a service that supports them.

## 🔒 Security

- `js/config.js` is excluded from git (see `.gitignore`)
- API keys should never be committed to version control
- For production, consider using environment variables or server-side configuration

## 📝 Documentation

- **`DEPLOYMENT.md`**: GitHub Pages deployment guide
- **`DNS_CHANGES_BEFORE_AFTER.md`**: Step-by-step DNS changes to use custom domain `medicinewithin.nl`
- **`CONFIG_SUMMARY.md`**: ConvertKit configuration and testing results
- **`WORDPRESS_MIGRATION_GUIDE.md`**: Instructions for migrating to WordPress
- **`TAG_TESTING_RESULTS.md`**: ConvertKit tag subscription test results

## 🎥 Media Files

- **Images**: Optimized and ready for web
- **Videos**: Large `.mov` files (217MB total)
  - Consider converting to MP4 for better web compatibility
  - Or use a video hosting service (YouTube, Vimeo) for production

## ✅ Current Status

- ✅ Static site complete and functional
- ✅ GitHub Pages deployment configured
- ✅ ConvertKit integration tested and working
- ✅ All pages responsive and mobile-friendly
- ✅ Video lazy loading implemented

## 🆘 Troubleshooting

**GitHub Pages not updating?**
- Wait 1-2 minutes after pushing
- Hard refresh browser (Cmd+Shift+R / Ctrl+Shift+R)
- Check GitHub repository Actions tab for deployment status

**Forms not working?**
- Verify `js/config.js` exists with correct API keys
- Check browser console for JavaScript errors
- See `CONFIG_SUMMARY.md` for API key details

**Images/videos not loading?**
- Verify file paths are correct (all relative paths)
- Check that files exist in `assets/` directory
- For videos, ensure they're in the correct format

## 📞 Support

For deployment issues:
- GitHub Pages: https://docs.github.com/pages
- Repository: https://github.com/Benji-cpu/medicine-within-website

For ConvertKit integration:
- See `CONFIG_SUMMARY.md` for configuration details
- See `TAG_TESTING_RESULTS.md` for test results



