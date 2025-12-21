# DNS Changes - Before and After

## ⚠️ IMPORTANT: Make these changes in SiteGround DNS Zone Editor

**Domain**: `medicinewithin.nl`  
**Location**: SiteGround → Site Tools → Domain → DNS Zone Editor

---

## 📋 BEFORE (Current DNS Records)

### Records to CHANGE:

| Type | Name | Value | Action |
|------|------|-------|--------|
| A | `medicinewithin.nl.` | `35.214.167.236` | **DELETE THIS** |
| A | `www.medicinewithin.nl.` | `35.214.167.236` | **DELETE THIS** |

---

## ✅ AFTER (New DNS Records)

### Records to ADD:

| Type | Name | Value | Action |
|------|------|-------|--------|
| A | `medicinewithin.nl.` | `185.199.108.153` | **ADD** |
| A | `medicinewithin.nl.` | `185.199.109.153` | **ADD** |
| A | `medicinewithin.nl.` | `185.199.110.153` | **ADD** |
| A | `medicinewithin.nl.` | `185.199.111.153` | **ADD** |
| CNAME | `www.medicinewithin.nl.` | `benji-cpu.github.io` | **ADD** |

---

## 🔒 KEEP THESE (DO NOT CHANGE)

These records are for email and other services - **DO NOT TOUCH**:

| Type | Name | Value | Keep? |
|------|------|-------|-------|
| A | `*.medicinewithin.nl.` | `35.214.167.236` | ✅ KEEP |
| CNAME | `default._domainkey.medicinewithin.nl.` | `medicinewithin.nl.default.dkim.auto.dnssmarthost.net` | ✅ KEEP |
| TXT | `_dmarc.medicinewithin.nl.` | `v=DMARC1; p=none; aspf=r; adkim=r;` | ✅ KEEP |
| MX | `medicinewithin.nl.` | `mx30.antispam.mailspamprotection.com` (Priority 30) | ✅ KEEP |
| MX | `medicinewithin.nl.` | `mx20.antispam.mailspamprotection.com` (Priority 20) | ✅ KEEP |
| MX | `medicinewithin.nl.` | `mx10.antispam.mailspamprotection.com` (Priority 10) | ✅ KEEP |
| A | `ssh.medicinewithin.nl.` | `35.214.167.236` | ✅ KEEP |
| A | `mail.medicinewithin.nl.` | `35.214.167.236` | ✅ KEEP |
| A | `localhost.medicinewithin.nl.` | `127.0.0.1` | ✅ KEEP |
| A | `ftp.medicinewithin.nl.` | `35.214.167.236` | ✅ KEEP |
| A | `autodiscover.medicinewithin.nl.` | `35.214.167.236` | ✅ KEEP |
| A | `autoconfig.medicinewithin.nl.` | `35.214.167.236` | ✅ KEEP |
| TXT | `medicinewithin.nl.` | `v=spf1 +a +mx +ip4:35.214.164.115 include:medicinewithin.nl.spf.auto.dnssmarthost.net ~all` | ✅ KEEP |

---

## 📝 Step-by-Step Instructions

### Step 1: Delete Old Records
1. Find the A record: `medicinewithin.nl.` → `35.214.167.236`
2. Click **Delete** (or trash icon)
3. Find the A record: `www.medicinewithin.nl.` → `35.214.167.236`
4. Click **Delete** (or trash icon)

### Step 2: Add New A Records (4 records)
Add these **one at a time**:

1. Click **Add Record** or **Create**
2. Select Type: **A**
3. Name: `medicinewithin.nl.` (or just `@`)
4. Value: `185.199.108.153`
5. TTL: `3600` (or leave default)
6. Click **Save**

Repeat for:
- `medicinewithin.nl.` → `185.199.109.153`
- `medicinewithin.nl.` → `185.199.110.153`
- `medicinewithin.nl.` → `185.199.111.153`

### Step 3: Add CNAME for www
1. Click **Add Record** or **Create**
2. Select Type: **CNAME**
3. Name: `www.medicinewithin.nl.` (or just `www`)
4. Value: `benji-cpu.github.io`
5. TTL: `3600` (or leave default)
6. Click **Save**

### Step 4: Verify
After saving, your DNS should show:
- ✅ 4 A records for `medicinewithin.nl.` (with GitHub IPs)
- ✅ 1 CNAME for `www.medicinewithin.nl.` → `benji-cpu.github.io`
- ✅ All email records still there (MX, TXT, etc.)

---

## ⏱️ Wait Time

After making changes:
- **Wait 5-30 minutes** for DNS to propagate
- Go back to GitHub Pages settings
- Click **"Check again"** button
- Error should disappear when DNS is ready

---

## 🔄 How to Revert (If Needed)

If something goes wrong, revert by:

1. **Delete** the 4 new A records for `medicinewithin.nl.`
2. **Delete** the CNAME for `www.medicinewithin.nl.`
3. **Add back**:
   - A record: `medicinewithin.nl.` → `35.214.167.236`
   - A record: `www.medicinewithin.nl.` → `35.214.167.236`

---

## ✅ Final Checklist

Before you start:
- [ ] You're logged into SiteGround
- [ ] You're in DNS Zone Editor for `medicinewithin.nl`
- [ ] You have this document open

After changes:
- [ ] Deleted old A record for `medicinewithin.nl.`
- [ ] Deleted old A record for `www.medicinewithin.nl.`
- [ ] Added 4 new A records with GitHub IPs
- [ ] Added CNAME for `www` → `benji-cpu.github.io`
- [ ] All email records (MX, TXT) still present
- [ ] Waited 10-30 minutes
- [ ] Checked GitHub Pages settings - error cleared

---

## 📞 Quick Reference

**GitHub Pages Settings**:  
https://github.com/Benji-cpu/medicine-within-website/settings/pages

**GitHub IPs to use**:
- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

**CNAME value**:  
`benji-cpu.github.io`

---

## 🆘 Troubleshooting

**Error still showing after 30 minutes?**
- Check DNS propagation: https://www.whatsmydns.net/#A/medicinewithin.nl
- Should show the 4 GitHub IPs
- If not, wait longer (can take up to 48 hours in rare cases)

**Email stopped working?**
- Check that all MX and TXT records are still there
- If missing, restore them from the "KEEP" list above

**Website not loading?**
- Verify all 4 A records are added (not just 1 or 2)
- Check CNAME for www is correct
- Wait for DNS propagation to complete




