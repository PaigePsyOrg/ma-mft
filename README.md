# Ma Peiqi MFT Website

A simple guide for updating the therapy practice website.

## Quick Start (Getting Back Into It)

### Option A: Edit Online (Easiest for Your Wife)
1. Go directly to: **https://peiqima.com/admin**
2. Log in with your Tina Cloud account
3. Edit content directly in the browser
4. Changes save automatically and publish to the live site

### Option B: Local Development
```bash
# Navigate to the project folder
cd /home/baba/Development/ma-mft

# Install dependencies (only needed first time or after updates)
npm install

# Start both Hugo and TinaCMS (watches for changes automatically)
npm run dev

# Your site will be available at: http://localhost:1313
# TinaCMS editor will be available at: http://localhost:1313/admin
```

## One-Time Setup for Online Editing

### Setting up Tina Cloud (Do this once)

1. **Sign up for Tina Cloud:**
   - Go to [tina.io](https://tina.io)
   - Sign up with your GitHub account
   - Connect your `ma-mft` repository

2. **Add credentials to GitHub:**
   - In your GitHub repository, go to Settings > Secrets and Variables > Actions
   - Add these repository secrets:
     - `NEXT_PUBLIC_TINA_CLIENT_ID` (from Tina Cloud dashboard)
     - `TINA_TOKEN` (from Tina Cloud dashboard)

3. **Add your wife as a collaborator:**
   - In Tina Cloud dashboard, invite your wife's email
   - She can then edit at: https://peiqima.com/admin

### Benefits of Online Editing:
- ✅ Your wife can edit from anywhere, any device
- ✅ No need to install anything locally
- ✅ Changes publish automatically to the live site
- ✅ Built-in authentication and permissions
- ✅ Real-time collaboration if you both edit

### 2. Make Content Changes

**Option A: Use Tina CMS (Easiest - Recommended)**
1. With `npm run dev` running, go to: `http://localhost:1313/admin`
2. Log in with your Tina account
3. Edit pages directly through the visual editor
4. Changes save automatically and you'll see them instantly in your browser

**Option B: Edit Files Directly**
- **English content:** Files in `content/en/`
- **Chinese content:** Files in `content/zh/`
- Edit `.md` files with any text editor
- Save the file and refresh your browser to see changes

### 3. Stop Development Server
```bash
# When you're done editing
npm run stop
```

### 4. Publish Changes
```bash
# Save your changes
git add .
git commit -m "Update website content"
git push origin main

# GitHub will automatically publish to: https://peiqima.com/
```

## Available NPM Commands

```bash
npm run dev      # Start development (Hugo + TinaCMS together)
npm start        # Same as npm run dev
npm run build    # Build site for production
npm run clean    # Clean build files (if something breaks)
npm run stop     # Stop all running servers
```

## Site Structure

```
content/
├── en/                     # English content
│   ├── _index.md          # Homepage
│   ├── about/_index.md    # About page
│   ├── services/_index.md # Services page
│   ├── contact/_index.md  # Contact page
│   ├── book/_index.md     # Booking page
│   └── posts/             # Blog posts
└── zh/                     # Chinese content (same structure)
    ├── _index.md
    ├── about/_index.md
    └── ...
```

## Common Tasks

### Adding a New Blog Post

**Using Tina CMS (Recommended):**
1. Make sure `npm run dev` is running
2. Go to `http://localhost:1313/admin`
3. Click "Posts" → "Create New"
4. Fill out the form
5. Save - changes appear instantly

**Manually:**
1. Create a new `.md` file in `content/en/posts/` or `content/zh/posts/`
2. Add this header:
```markdown
---
title: "Your Post Title"
date: 2025-07-19T10:00:00-08:00
draft: false
tags: ["tag1", "tag2"]
---

Your content here...
```

### Updating Contact Information

**Using Tina CMS:**
1. Go to `http://localhost:1313/admin`
2. Click "Contact" 
3. Edit the fields
4. Save

**Manually:**
1. Edit `content/en/contact/_index.md` and `content/zh/contact/_index.md`
2. Update the front matter fields:
```markdown
---
email: "your.email@example.com"
phone: "(555) 123-4567"
location: "Your City, State"
---
```

### Adding/Changing Services

**Using Tina CMS:**
1. Go to `http://localhost:1313/admin`
2. Click "Services"
3. Edit the services list
4. Add/remove/modify services as needed

### Updating Booking URL

**Using Tina CMS:**
1. Go to `http://localhost:1313/admin`
2. Click "Book"
3. Update the booking URL field

## Images

### Adding Images
1. Put images in the `static/images/` folder
2. Reference them in markdown as: `![Alt text](/images/your-image.jpg)`
3. Or in Tina CMS, use the image picker

### Recommended Image Sizes
- **Profile photo:** 400x400px
- **Hero image:** 1200x600px
- **Blog images:** 800x400px

## Troubleshooting

### Site Won't Start
```bash
# Clean everything and try again
npm run clean
npm run dev
```

### Changes Not Showing
1. Make sure `npm run dev` is still running
2. Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)
3. Check the terminal for any error messages

### Tina CMS Won't Load
1. Make sure `npm run dev` is running (not just `hugo server`)
2. Check if you're logged into Tina.io
3. Try `http://localhost:1313/admin/index.html` directly

### Port Already in Use Error
```bash
# Stop everything and restart
npm run stop
npm run dev
```

### GitHub Pages Not Updating
1. Check the Actions tab in your GitHub repository
2. Look for any failed builds (red X marks)
3. Make sure GitHub Pages is enabled in repository settings

## Important URLs

- **Online CMS Editor (for your wife):** https://peiqima.com/admin
- **Live website:** https://peiqima.com/
- **Local development:** http://localhost:1313
- **Local Tina CMS editor:** http://localhost:1313/admin
- **GitHub repository:** https://github.com/PaigePsyOrg/ma-mft

## Typical Workflow

1. `cd /home/baba/Development/ma-mft`
2. `npm run dev`
3. Go to `http://localhost:1313/admin` to edit content
4. Preview changes at `http://localhost:1313`
5. When done: `npm run stop`
6. Commit and push changes to publish

## Settings Files

- **Main config:** `hugo.toml` (site settings, menus, languages)
- **Tina config:** `tina/config.ts` (CMS settings)
- **GitHub deployment:** `.github/workflows/hugo.yml`
- **NPM scripts:** `package.json`

## Contact Info to Update Regularly

Remember to update these in both English and Chinese versions:
- [ ] Email address
- [ ] Phone number
- [ ] Office location
- [ ] Booking URL
- [ ] Rates/pricing
- [ ] Insurance information
- [ ] Office hours

## Annual Maintenance Checklist

- [ ] Update copyright year in footer
- [ ] Review and update services/rates
- [ ] Update professional credentials
- [ ] Check all links work
- [ ] Update photos if needed
- [ ] Review insurance information
- [ ] Check contact information accuracy
- [ ] Run `npm update` to update dependencies

---

*Last updated: July 2025*
*For technical issues, refer to `About-hugo-template.md` for detailed Hugo documentation.*
