# 🧠 Rohin Nanavati - ML Engineer Portfolio

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

## ✏️ Content Customization Guide

### 🏠 Updating the Homepage (`index.html`)

#### Change Your Name & Title
Find the `<h1 class="hero-title">` section (~line 47):
```html
<h1 class="hero-title">
    I'm <span class="highlight">Your Name Here</span> 
    <br>an ML Engineer making 
    <br><span class="highlight-alt">the world better</span>
</h1>
```

#### Change Your Description
Find `<p class="hero-description">` (~line 56):
```html
<p class="hero-description">
    Your description here. Mention your specialty like 
    <span class="pill pill-health">👁️ Computer Vision</span>
</p>
```

#### Update Interest Cards
Find `<div class="hero-interests">` and modify each card:
```html
<div class="interest-card">
    <span class="interest-icon">🎯</span>
    <span class="interest-text">Your Interest Title</span>
    <p class="interest-detail">Brief description</p>
</div>
```

#### Update Floating Tech Badges
Find `<div class="floating-badges">`:
```html
<span class="badge badge-1">PyTorch</span>
<span class="badge badge-2">Your Tech</span>
<span class="badge badge-3">Another Tech</span>
<span class="badge badge-4">More Tech</span>
```

#### Update About Section Cards
Find each `<div class="about-card">` and edit the content inside.

---

### 📋 Updating Your Resume (`resume.html`)

#### Professional Summary
Find `<div class="summary-content">`:
```html
<div class="summary-content">
    <p>Your professional summary here. 2-3 sentences.</p>
</div>
```

#### Technical Skills
Find `<div class="skills-grid">` and edit each category:
```html
<div class="skill-category">
    <h3>🤖 Category Name</h3>
    <div class="skill-tags">
        <span class="skill-tag">Skill 1</span>
        <span class="skill-tag">Skill 2</span>
    </div>
</div>
```

#### Work Experience
Each job is a `<div class="timeline-item">`. To add a new job, copy this template:
```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <div class="timeline-header">
            <h3>Job Title</h3>
            <span class="timeline-company">Company Name</span>
            <span class="timeline-date">Start - End • Location</span>
        </div>
        <ul class="timeline-details">
            <li>Achievement or responsibility 1</li>
            <li>Achievement or responsibility 2</li>
        </ul>
        <div class="timeline-tags">
            <span class="tag">Tech Used</span>
        </div>
    </div>
</div>
```

#### Education
Each degree is an `<div class="education-card">`:
```html
<div class="education-card">
    <div class="edu-icon">🎓</div>
    <div class="edu-content">
        <h3>Degree Name</h3>
        <p class="edu-school">University Name</p>
        <p class="edu-date">Year • Location</p>
        <p class="edu-focus">GPA or Focus Area</p>
    </div>
</div>
```

#### Update Resume PDF Link
Replace `Resume20251216.pdf` with your file, then update the link:
```html
<a href="YourResume.pdf" class="btn btn-primary download-btn" download>
```

---

### 🚀 Adding Projects (`projects.html`)

#### Add a New Project Card
Add inside `<div class="projects-grid">`:
```html
<article class="project-card" data-category="your-category">
    <div class="project-header">
        <span class="project-emoji">🚀</span>
        <div class="project-tags">
            <span class="tag tag-research">Category</span>
        </div>
    </div>
    <h3 class="project-title">Project Title</h3>
    <p class="project-description">
        Description of what the project does.
    </p>
    <div class="project-tech">
        <span>Python</span>
        <span>PyTorch</span>
    </div>
    <div class="project-links">
        <a href="https://demo-link.com" class="project-link">
            <span>View Project</span>
            <span>→</span>
        </a>
        <a href="https://github.com/you/repo" class="project-link github-link">
            <span>GitHub</span>
        </a>
    </div>
</article>
```

#### Add Filter Categories
Update `<div class="project-filters">`:
```html
<button class="filter-btn" data-filter="cv">👁️ Computer Vision</button>
```
Make sure `data-filter` matches `data-category` on your project cards!

---

### 💭 Adding Blog Threads (`blog.html`)

#### Add a New Thread
Add inside `<div class="threads-container">`:
```html
<article class="thread-card" data-category="category-name" id="thread-unique-id">
    <div class="thread-header">
        <div class="thread-meta">
            <span class="thread-emoji">💭</span>
            <span class="thread-category">Category Name</span>
            <span class="thread-date">Month Year</span>
        </div>
        <span class="thread-count">3 posts</span>
    </div>
    <h2 class="thread-title">Your Thread Title</h2>
    <p class="thread-preview">Brief preview text...</p>
    <div class="thread-posts">
        <div class="thread-post">
            <div class="post-number">1/3</div>
            <div class="post-content">
                <p>First post content.</p>
            </div>
        </div>
        <div class="thread-post">
            <div class="post-number">2/3</div>
            <div class="post-content">
                <p>Second post content.</p>
                <ul>
                    <li>🔹 <strong>Point</strong>: Explanation</li>
                </ul>
            </div>
        </div>
        <div class="thread-post">
            <div class="post-number">3/3</div>
            <div class="post-content">
                <p>Final thoughts.</p>
            </div>
        </div>
    </div>
    <button class="thread-toggle" aria-expanded="false">
        <span class="toggle-text">Read Thread</span>
        <span class="toggle-icon">↓</span>
    </button>
</article>
```

---

### 🎨 Customize Colors (`css/style.css`)

Edit CSS variables at the top of the file:
```css
:root {
    --primary: #6366f1;        /* Purple - main accent */
    --secondary: #ec4899;       /* Pink - secondary */
    --accent: #10b981;          /* Green - third accent */
    --bg-dark: #0f0f23;         /* Background */
    --bg-card: #1a1a2e;         /* Card backgrounds */
}
```

**Color Ideas:**
- Blue: `--primary: #3b82f6;`
- Green: `--primary: #10b981;`
- Orange: `--primary: #f97316;`

---

### 🔗 Update LinkedIn Link

The LinkedIn link is in all 4 HTML files in the `<nav>`. Search and replace:
```html
<a href="https://www.linkedin.com/in/rohinnanavati" target="_blank">LinkedIn</a>
```

---

## 🔧 Adding Extra Features

### Add GitHub Link to Navigation
In the `<nav>` section of any HTML file:
```html
<li><a href="https://github.com/yourusername" target="_blank">GitHub</a></li>
```

### Add Contact Email to Footer
```html
<footer class="footer">
    <div class="container">
        <p>Built by Rohin Nanavati</p>
        <p>📧 rohinpn@gmail.com</p>
    </div>
</footer>
```

### Add Google Analytics
Before `</head>` in each HTML file:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 📝 Tips for Maintaining Your Portfolio

1. **Keep it updated** - Add new projects as you complete them
2. **Write threads** - Share your thoughts and learnings regularly
3. **Test on mobile** - The site is responsive, but always double-check
4. **Commit often** - Use Git to track your changes
5. **Optimize images** - Compress images before adding them

---

## 🤝 Need Help?

- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Custom Domain**: Settings → Pages → Custom domain
- **HTML/CSS Reference**: https://developer.mozilla.org/

---

Built by Rohin Nanavati with ☕ and curiosity 🧠
