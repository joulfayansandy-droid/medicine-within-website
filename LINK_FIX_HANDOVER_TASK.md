# AI Handover Task: Fix Broken Links on medicinewithin.nl

## Problem Summary

**Issue**: Links on `https://medicinewithin.nl/` are broken. When users click navigation links (Kambo, Mentorship, Temple, Retreats), they get WordPress 404 errors instead of the correct pages.

**Root Cause**: 
1. The domain `medicinewithin.nl` is currently pointing to **WordPress hosting** (old SiteGround server with nginx)
2. The actual website content is hosted on **GitHub Pages** at `https://benji-cpu.github.io/medicine-within-website/`
3. When users access `medicinewithin.nl/mentorship.html`, it tries to load from the WordPress server, which doesn't have these HTML files

## What Has Been Done

✅ **Code Changes Completed**:
- Updated all 5 HTML files (`index.html`, `kambo.html`, `mentorship.html`, `retreats.html`, `temple.html`) to use absolute URLs pointing to GitHub Pages
- All internal navigation links now point to `https://benji-cpu.github.io/medicine-within-website/[page].html`
- Changes have been committed and pushed to GitHub (commit: `bbbc595`)

✅ **CNAME File Exists**:
- The repository has a `CNAME` file with `medicinewithin.nl` configured
- GitHub Pages is set up to serve the custom domain

## What Still Needs to Be Done

### Option 1: Configure DNS to Point to GitHub Pages (Recommended)

**Action Required**: Update DNS records for `medicinewithin.nl` to point to GitHub Pages instead of WordPress hosting.

**Steps**:
1. Log into your domain registrar or DNS provider (likely SiteGround based on `DNS_CHANGES_BEFORE_AFTER.md`)
2. Navigate to DNS Zone Editor for `medicinewithin.nl`
3. Update DNS records as follows:

   **Remove/Change**:
   - Delete A record: `medicinewithin.nl.` → `35.214.167.236` (old WordPress IP)
   - Delete A record: `www.medicinewithin.nl.` → `35.214.167.236` (old WordPress IP)

   **Add**:
   - Add 4 A records for `medicinewithin.nl.`:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Add CNAME record: `www.medicinewithin.nl.` → `benji-cpu.github.io`

4. **Keep all email records** (MX, TXT, SPF, DMARC) - DO NOT DELETE THESE
5. Wait 5-30 minutes for DNS propagation
6. Verify in GitHub Pages settings that the custom domain is recognized

**Reference**: See `build_1/DNS_CHANGES_BEFORE_AFTER.md` for detailed instructions

**Result**: Once DNS is updated, `medicinewithin.nl` will serve the GitHub Pages site directly, and all links will work correctly.

---

### Option 2: Use JavaScript Redirect (Temporary Workaround)

If DNS changes cannot be made immediately, add a JavaScript redirect on the WordPress site to redirect all traffic to GitHub Pages.

**Action Required**: Add this script to the WordPress site's header or footer:

```javascript
<script>
// Redirect all pages to GitHub Pages version
if (window.location.hostname === 'medicinewithin.nl') {
    const path = window.location.pathname;
    const githubBase = 'https://benji-cpu.github.io/medicine-within-website';
    if (path === '/' || path === '/index.html') {
        window.location.replace(githubBase + '/index.html');
    } else {
        window.location.replace(githubBase + path);
    }
}
</script>
```

**Note**: This is a temporary solution. Option 1 (DNS configuration) is the proper fix.

---

## Testing Checklist

After implementing the fix:

- [ ] Visit `https://medicinewithin.nl/` - should load the GitHub Pages site
- [ ] Click "Kambo" link - should navigate to `https://benji-cpu.github.io/medicine-within-website/kambo.html`
- [ ] Click "Mentorship" link - should navigate to `https://benji-cpu.github.io/medicine-within-website/mentorship.html`
- [ ] Click "Temple" link - should navigate to `https://benji-cpu.github.io/medicine-within-website/temple.html`
- [ ] Click "Retreats" link - should navigate to `https://benji-cpu.github.io/medicine-within-website/retreats.html`
- [ ] Verify email still works (test sending/receiving)
- [ ] Check that all pages load correctly with assets (images, CSS, JS)

## Current Status

- ✅ Code changes: Complete and pushed to GitHub
- ❌ DNS configuration: Not yet updated
- ❌ Links working: No (waiting for DNS update)

## Files Modified

- `build_1/index.html` - Updated all internal links to absolute URLs
- `build_1/kambo.html` - Updated all internal links to absolute URLs
- `build_1/mentorship.html` - Updated all internal links to absolute URLs
- `build_1/retreats.html` - Updated all internal links to absolute URLs
- `build_1/temple.html` - Updated all internal links to absolute URLs

## Important Notes

1. **Email Records**: When updating DNS, make sure to preserve all email-related records (MX, TXT for SPF/DMARC). These are critical for email delivery.

2. **DNS Propagation**: DNS changes can take 5-30 minutes to propagate, sometimes up to 48 hours in rare cases. Use https://www.whatsmydns.net/#A/medicinewithin.nl to check propagation status.

3. **GitHub Pages Settings**: After DNS is configured, verify in GitHub repository settings → Pages that the custom domain is recognized and shows as "verified".

4. **HTTPS**: GitHub Pages automatically provides SSL certificates for custom domains once DNS is properly configured.

## Questions to Answer

- [ ] Who has access to update DNS records for `medicinewithin.nl`?
- [ ] Is there a reason the domain is still pointing to WordPress hosting?
- [ ] Are there any WordPress-specific features/content that need to be preserved?
- [ ] What is the timeline for making DNS changes?

---

**Created**: 2025-12-08  
**Status**: Awaiting DNS configuration  
**Priority**: High (affects user experience)

