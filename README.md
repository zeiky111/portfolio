# Professional Portfolio — Template

This is a high-end portfolio template you can send to clients. It includes:

- Responsive layout with polished visuals
- Smooth reveal animations and modal case studies
- Placeholder project thumbnails (SVG) you can replace

How to preview locally:

1. Open a terminal in this folder.
2. Run a simple static server, for example with Python 3:

```bash
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Customize:
- Replace `index.html` copy text, your email, and resume path.
- **Add new projects**: Edit `assets/js/projects.js` and add a new entry, then create your project folder under `assets/projects/`
- Replace thumbnail images with your own screenshots.

## How to Add a New Project:

1. Create a folder for your project in `assets/projects/` (e.g., `assets/projects/my-app/`)
2. Add your project files (HTML, CSS, JS, images) inside that folder
3. Open `assets/js/projects.js` and add a new entry:

```javascript
{
  id: 2,  // Use next available number
  title: 'My Awesome App',
  description: 'Brief description for the card',
  folder: 'my-app',
  thumbnail: 'assets/images/my-app-thumb.png',  // Add your screenshot
  demoLink: 'assets/projects/my-app/index.html',
  repoLink: 'https://github.com/yourusername/my-app',
  caseStudy: 'Full case study description shown in the modal popup.'
}
```

4. Save the file and refresh your portfolio — your project will appear automatically!

Want me to:
- Add a PDF resume and real screenshots? (I can scaffold the files.)
- Export a one-file HTML for emailing? (I can inline CSS/JS.)
