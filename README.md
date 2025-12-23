# Medicine Within Website

This is the static HTML/CSS/JavaScript version of the Medicine Within website

**Live URL**: https://benji-cpu.github.io/medicine-within-website/

**Repository**: https://github.com/Benji-cpu/medicine-within-website

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

### Git Branch Naming Strategy

To keep the development organized, use the following naming convention for branches:

- `feat/` - New features (e.g., `feat/contact-form`)
- `fix/` - Bug fixes (e.g., `fix/navigation-issue`)
- `refactor/` - Code restructuring or improvements (e.g., `refactor/folder-structure`)
- `docs/` - Documentation updates (e.g., `docs/readme-update`)
- `style/` - CSS or UI styling changes (e.g., `style/mobile-responsive`)
- `chore/` - Maintenance or configuration (e.g., `chore/gitignore-update`)

**Workflow:**
1. Create a branch: `git checkout -b type/description`
2. Make changes and commit
3. Push to GitHub: `git push origin type/description`
4. Merge into `main` after review

### ConvertKit Integration

- **API Keys**: Stored in `js/config.js` (excluded from git for security)
- **Tag-based Subscriptions**: Configured and tested (see `CONFIG_SUMMARY.md`)
- **Forms**: Work automatically via `js/main.js`

**Note**: For GitHub Pages deployment, you'll need to manually add `js/config.js` with your API keys, or use environment variables if migrating to a service that supports them.

## 🔒 Security

- `js/config.js` is excluded from git (see `.gitignore`)
- API keys should never be committed to version control
- For production, consider using environment variables or server-side configuration


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





