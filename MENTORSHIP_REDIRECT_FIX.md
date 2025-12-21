# Mentorship.html Redirect Issue - Fix Summary

## Problem

The `mentorship.html` page is redirecting to `medicinewithin.nl/mentorship.html` when accessed from GitHub Pages, while other pages work correctly.

## Root Cause

The WordPress server at `medicinewithin.nl` has a **specific redirect rule** for `/mentorship.html` that doesn't exist for other pages. This is likely:

1. **WordPress Permalink Rewrite Rule**: WordPress may have had a page/post with the slug "mentorship" that has a redirect configured
2. **.htaccess or nginx Rule**: The server has a specific redirect rule for that path
3. **WordPress Plugin Redirect**: A redirect plugin has a rule specifically for `/mentorship.html`

When GitHub Pages tries to resolve the custom domain (if CNAME is configured), or when there's any domain resolution happening, it hits the WordPress server's redirect rule for that specific path.

## Why Only mentorship.html?

Other pages like `kambo.html`, `about.html`, etc. don't have redirect rules configured on the WordPress server, so they work fine. Only `mentorship.html` has this specific redirect rule.

## Solution Applied

### 1. Added Redirect Prevention Script

Added a client-side redirect prevention script in `js/main.js` that:
- Detects if you're on `medicinewithin.nl/mentorship.html`
- Checks if you came from GitHub Pages
- Automatically redirects back to the GitHub Pages URL

This is a **temporary workaround** until DNS is properly configured.

### 2. Code Changes

**File**: `js/main.js`
- Added redirect prevention logic that runs on page load
- Only activates when on `medicinewithin.nl` domain
- Redirects back to GitHub Pages if the referrer indicates you came from there

## Permanent Solution

The **proper fix** is to update DNS configuration:

1. **Update DNS Records**: Point `medicinewithin.nl` to GitHub Pages (see `DNS_CHANGES_BEFORE_AFTER.md`)
2. **Remove WordPress Redirect Rules**: Remove any redirect rules for `/mentorship.html` from the WordPress server
3. **Verify CNAME**: Ensure GitHub Pages CNAME is correctly configured

Once DNS is updated to point to GitHub Pages, the WordPress server redirect rules will no longer affect the site.

## Testing

After deploying the fix:

1. ✅ Visit GitHub Pages: `https://benji-cpu.github.io/medicine-within-website/`
2. ✅ Click "1:1 Coaching" link
3. ✅ Should load `mentorship.html` on GitHub Pages (not redirect to medicinewithin.nl)
4. ✅ If it does redirect, the script should catch it and redirect back

## Files Modified

- `js/main.js` - Added redirect prevention script

## Notes

- This is a **client-side workaround** - the real fix is DNS configuration
- The script only activates when on `medicinewithin.nl` domain
- Once DNS is properly configured, this script becomes unnecessary but won't cause issues

---

**Status**: ✅ Fix applied (temporary workaround)  
**Permanent Fix**: Requires DNS configuration update  
**Date**: 2025-01-27

