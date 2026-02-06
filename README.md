# 🧠 neural.human - ML Engineer Portfolio

A fun, professional portfolio website for showcasing ML engineering work, projects, and thoughts.

## 🚀 Quick Start - Deploy to GitHub Pages

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon → **New repository**
3. Name it `yourusername.github.io` (replace `yourusername` with your actual GitHub username)
   - This naming convention enables GitHub Pages automatically!
4. Make it **Public**
5. Click **Create repository**

### Step 2: Upload Your Files

**Option A: Using GitHub Web Interface (Easiest)**
1. In your new repository, click **Add file** → **Upload files**
2. Drag and drop all files from this folder
3. Click **Commit changes**

**Option B: Using Git Command Line**
```bash
cd "path/to/GitWebpage"
git init
git add .
git commit -m "Initial commit - portfolio website"
git branch -M main
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the sidebar)
3. Under "Source", select **main** branch
4. Click **Save**
5. Wait 1-2 minutes, then visit `https://yourusername.github.io`

🎉 **Your site is now live!**

---

## 📁 Project Structure

```
GitWebpage/
├── index.html          # Main landing page
├── resume.html         # Resume/CV page
├── projects.html       # Projects showcase
├── blog.html           # Thoughts & threads page
├── Resume20251216.pdf  # Your resume PDF
├── css/
│   └── style.css       # All styling
├── js/
│   └── main.js         # Interactivity & animations
└── README.md           # This file
```

---

## ✏️ Customization Guide

### 📄 Update Your Resume (`resume.html`)

Replace the placeholder content with your actual information:

1. **Professional Summary** - Update the summary text
2. **Skills** - Modify skill tags to match yours
3. **Experience** - Add your work history
4. **Education** - Your degrees and schools
5. **Certifications** - Your achievements

### 🚀 Add Your Projects (`projects.html`)

For each project card, update:
- `data-category` - Choose: healthcare, sports, research, or fun
- Emoji and title
- Description
- Tech stack tags
- Links to demos/GitHub

### 💭 Add New Blog Threads (`blog.html`)

Copy an existing `<article class="thread-card">` and modify:
- `data-category` - Filter category
- Thread title and preview
- Individual posts (1/n, 2/n, etc.)

### 🎨 Customize Colors (`css/style.css`)

Edit the CSS variables at the top:

```css
:root {
    --primary: #6366f1;        /* Main accent color */
    --secondary: #ec4899;       /* Secondary accent */
    --accent: #10b981;          /* Third accent */
    --bg-dark: #0f0f23;         /* Background color */
    /* ... more variables */
}
```

---

## 🔧 Adding New Features

### Add Social Links

In any HTML file, add to the navbar or footer:
```html
<div class="social-links">
    <a href="https://github.com/yourusername">GitHub</a>
    <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
    <a href="https://twitter.com/yourhandle">Twitter</a>
</div>
```

### Add Contact Form

Consider using [Formspree](https://formspree.io/) for a free contact form without a backend.

### Add Analytics

Add Google Analytics or [Plausible](https://plausible.io/) (privacy-friendly) before `</head>`:
```html
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

---

## 📝 Tips for Maintaining Your Portfolio

1. **Keep it updated** - Add new projects as you complete them
2. **Write threads** - Share your thoughts and learnings regularly
3. **Test on mobile** - The site is responsive, but always double-check
4. **Optimize images** - Use compressed images for faster loading

---

## 🤝 Need Help?

- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Custom Domain**: You can add a custom domain in Settings → Pages

---

Built with ☕ and curiosity 🧠
