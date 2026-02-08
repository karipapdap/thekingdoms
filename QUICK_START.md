# 🚀 Quick Start Guide - The Kingdoms Website

## ✅ Yang Sudah Selesai

Proyek telah diorganisir dengan struktur profesional:

### Struktur Folder
```
📦 thekingdoms-main
├── 📄 index.html (Home page - references external CSS/JS)
├── 📁 css/
│   └── styles.css (All styling)
├── 📁 js/
│   └── script.js (All JavaScript)
├── 📁 images/ (All assets)
├── 📁 projects/ (Server routes)
├── 📁 assets/ (Optional utilities)
├── 📄 PROJECT_STRUCTURE.md (Full documentation)
├── 📄 STRUCTURE_GUIDE.md (Development guide)
└── 📄 QUICK_START.md (This file)
```

### Perubahan Utama
- ✅ CSS dipindahkan ke `css/styles.css`
- ✅ JavaScript dipindahkan ke `js/script.js`
- ✅ Images sudah di folder `images/`
- ✅ Server routes sudah di folder `projects/`
- ✅ Dokumentasi lengkap dibuat

---

## 🎯 Next Steps

### 1. **Optimize Images**
```bash
# Gunakan tools seperti:
- TinyPNG (online)
- ImageOptim (Mac)
- FileZilla (compress)
```

### 2. **Update Project Pages**
Buat halaman lengkap untuk setiap project:
- `projects/TheKingdomsJavaSeason1/index.html`
- `projects/ElpikaCraft/index.html`
- `projects/playerss1/index.html`

### 3. **Add Server Management Pages**
- Player list dengan sorting
- Server stats & uptime
- Discord integration

### 4. **Enhance Features**
- Dark/Light mode toggle
- Player search function
- Server status API integration
- News/Blog section

---

## 💻 Development Commands

### Check Files
```bash
# List structure
tree /F

# View CSS
code css/styles.css

# View JS
code js/script.js
```

### Test Locally
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Open browser
http://localhost:8000
```

---

## 📝 Common Edits

### Add New Server Card
**File**: `index.html` (dalam `.server-grid`)
```html
<div class="server-card fade-in">
    <img src="images/server-name.png" class="server-img">
    <h2>Server Name</h2>
    <p>Description...</p>
    <a href="projects/server-name/" class="button">View More</a>
</div>
```

### Add New Founder
**File**: `index.html` (dalam `.founder-grid`)
```html
<div class="founder-card">
    <a href="https://linktree-url" target="_blank"></a>
    <h3>Name</h3>
    <p>Role description...</p>
    <img src="images/name.png" alt="Name">
</div>
```

### Add New CSS Component
**File**: `css/styles.css` (add at end)
```css
/* ===================== NEW COMPONENT ===================== */
.new-class {
    property: value;
    transition: 0.3s;
}

.new-class:hover {
    property: value;
}
```

### Add New JavaScript Function
**File**: `js/script.js` (add at end)
```javascript
// New functionality
function newFunction() {
    // code here
}

// If needed, call it
newFunction();
```

---

## 🔗 Deployment

### GitHub Pages (Current)
```bash
# Setup (one-time)
git remote add origin https://github.com/yourusername/thekingdoms-main.git
git branch -M main
git push -u origin main

# Update workflow
git add .
git commit -m "Update website content"
git push origin main
```

### Custom Domain
- Edit `CNAME` file with your domain
- Configure DNS settings in domain registrar

---

## 🎨 Design System

### Colors Used
- **Primary Gold**: `#ffd700` (Headers, highlights)
- **Secondary Orange**: `#ff9900` (Buttons, accents)
- **Dark BG**: `#0b0b0b` (Background)
- **Text White**: `#f5f5f5` (Main text)
- **Card Dark**: `#1a1a1a` (Card backgrounds)

### Fonts
- **Title Font**: Press Start 2P (Google Fonts)
- **Body Font**: Arial / sans-serif

### Spacing
- **Section Padding**: 80px vertical, 20px horizontal
- **Card Gap**: 30-40px
- **Border Radius**: 8-15px

---

## 📚 Resources

### File References
- `PROJECT_STRUCTURE.md` - Full documentation
- `STRUCTURE_GUIDE.md` - Development guide
- `README.md` - General info

### External Links
- [Minecraft Wiki](https://minecraft.fandom.com)
- [Google Fonts](https://fonts.google.com)
- [CSS Tricks](https://css-tricks.com)

---

## ⚠️ Important Notes

### Before Publishing
- [ ] Test on mobile devices
- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Validate HTML/CSS
- [ ] Optimize all images
- [ ] Test all links
- [ ] Check loading performance

### Security
- Always validate user input
- Keep dependencies updated
- Use HTTPS (GitHub Pages provides this)
- Never commit sensitive info

---

## 🤝 Contributing

### Workflow
1. Create a branch: `git checkout -b feature/your-feature`
2. Make changes
3. Test thoroughly
4. Commit: `git commit -m "Add: description"`
5. Push: `git push origin feature/your-feature`
6. Create Pull Request

### Naming Conventions
- Classes: `.kebab-case`
- IDs: `camelCase`
- Files: `kebab-case.ext`
- Commits: `Type: description` (Add, Fix, Update, etc.)

---

## 🐛 Troubleshooting

### CSS Not Loading
- Check path in `<link>` tag
- Verify file exists in `css/` folder
- Clear browser cache

### JavaScript Not Working
- Check console for errors (F12)
- Verify path in `<script>` tag
- Check syntax errors

### Images Not Showing
- Check file path is correct
- Ensure file exists in `images/` folder
- Verify filename spelling

---

## 📞 Support

For questions or issues:
- Check documentation files
- Review existing code comments
- Test in browser console
- Check GitHub Issues

---

**Status**: ✅ Project Structure Ready  
**Last Updated**: Februari 2026  
**Maintained By**: The Kingdoms Team

Happy coding! 🎮✨
