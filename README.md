## 📝 Live Markdown Viewer

- GitHub-flavored Markdown support (GFM)
- Real-time live preview side-by-side with the editor
- Syntax highlighting for code blocks using `highlight.js`
- GitHub-style Markdown rendering with proper bullets, headings, code blocks, etc.

---

## Features

- Write Markdown in the left panel and instantly see the rendered preview on the right
- Supports tables, strikethrough, task lists, autolinks, and more via `remark-gfm`
- Syntax-highlighted code blocks with `rehype-highlight` and GitHub Dark theme style
- Responsive design with Tailwind CSS for a clean, modern UI
- Uses official GitHub Markdown CSS for an authentic GitHub look and feel

---

## Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [react-markdown](https://github.com/remarkjs/react-markdown)
- [remark-gfm](https://github.com/remarkjs/remark-gfm)
- [rehype-highlight](https://github.com/rehypejs/rehype-highlight)
- [GitHub Markdown CSS](https://github.com/sindresorhus/github-markdown-css)
- [highlight.js](https://highlightjs.org/)

---

## Setup

### Prerequisites

- Node.js 16+ installed
- Yarn or npm

### Installation

```bash
git clone https://github.com/yourusername/markdown-viewer.git
cd markdown-viewer
npm install
npm run dev
```

### Project Structure
```
/app
  /page.tsx           # Next.js page rendering the Editor component
/components
  /Editor.tsx         # Markdown editor + preview component
/styles
  /globals.css        # Global styles and GitHub Markdown CSS import
/tailwind.config.ts   # Tailwind CSS configuration
/postcss.config.js    # PostCSS config with Tailwind plugin
/next.config.ts       # Next.js config
/package.json
```

### Acknowledgements

- Thanks to sindresorhus/github-markdown-css
- Powered by the awesome remark and rehype ecosystems.
