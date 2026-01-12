# Portfolio Deployment Guide

## 🚀 Deploy to Vercel (Recommended - Free & Easy)

### Step 1: Prepare Your Code

1. **Make sure all changes are saved**
2. **Test locally** - Run `npm run build` to ensure everything builds correctly

### Step 2: Push to GitHub

If you haven't already:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio setup"

# Create a repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/Portfolio.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up/Login** with your GitHub account
3. **Click "Add New Project"**
4. **Import your GitHub repository** (select your Portfolio repo)
5. **Configure Project:**
   - Framework Preset: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
6. **Click "Deploy"**
7. **Wait 2-3 minutes** for deployment
8. **Your site will be live!** 🎉

### Step 4: Custom Domain (Optional)

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add your custom domain (if you have one)

---

## 🌐 Alternative: Deploy to Netlify

### Step 1: Push to GitHub (same as above)

### Step 2: Deploy to Netlify

1. **Go to [netlify.com](https://netlify.com)**
2. **Sign up/Login** with GitHub
3. **Click "New site from Git"**
4. **Select GitHub** and choose your repository
5. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `.next`
6. **Click "Deploy site"**

---

## ✅ Pre-Deployment Checklist

- [ ] All images are in `public/assets/` folder
- [ ] Test build locally: `npm run build`
- [ ] Check for any console errors
- [ ] Verify all links work
- [ ] Test on mobile view
- [ ] Push code to GitHub

---

## 🔧 Build Test

Before deploying, test the build:

```bash
npm run build
```

If successful, you'll see:
```
✓ Compiled successfully
```

---

## 📝 Important Notes

- **Vercel** is recommended for Next.js (made by Next.js creators)
- **Free tier** includes:
  - Unlimited deployments
  - Custom domains
  - SSL certificates
  - Global CDN
- Your site will be live at: `your-portfolio.vercel.app`

---

## 🆘 Troubleshooting

### Build Fails?
- Check console for errors
- Make sure all dependencies are in `package.json`
- Run `npm install` before building

### Images Not Showing?
- Ensure images are in `public/` folder
- Check image paths in code
- Images in `public/` are accessible at root: `/assets/image.jpg`

### Need Help?
- Vercel Docs: https://vercel.com/docs
- Next.js Deployment: https://nextjs.org/docs/deployment
