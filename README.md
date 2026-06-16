# Jordi Espinosa — Portfolio

Personal portfolio built with [Astro](https://astro.build), based on the design by Jordi Espinosa.

## 🗂 Project Structure

```
jordi-portfolio/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── images/          ← Drop your project screenshots here
│       ├── avatar.jpg
│       ├── project-police.jpg
│       └── project-fintech.jpg
├── src/
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── ToolsSection.astro
│   │   ├── ProjectCard.astro
│   │   ├── ProjectsGrid.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro        ← Inicio
│   │   ├── proyectos.astro
│   │   └── 404.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🖼 Adding Images

Place your images in `public/images/`:

| File                     | Used by            |
|--------------------------|--------------------|
| `avatar.jpg`             | Hero component     |
| `project-police.jpg`     | ProjectCard        |
| `project-fintech.jpg`    | ProjectCard        |
| `project-factorial.jpg`  | Proyectos page     |
| `project-analytics.jpg`  | Proyectos page     |

## 🌐 Adding Pages

Each route in `src/pages/` becomes a URL automatically:
- `src/pages/galeria.astro` → `/galeria`
- `src/pages/tienda.astro` → `/tienda`
- `src/pages/newsletter.astro` → `/newsletter`
- `src/pages/fotografia.astro` → `/fotografia`

## 🎨 Customization

- **Colors & fonts**: Edit CSS variables in `src/styles/global.css`
- **Nav links**: Edit `src/components/Nav.astro`
- **Bio text**: Edit `src/components/Hero.astro`
- **Projects**: Edit `src/components/ProjectsGrid.astro` and `src/pages/proyectos.astro`

## 📦 Tech Stack

- [Astro 4](https://astro.build)
- Vanilla CSS with custom properties
- Google Fonts: Syne + DM Mono
- TypeScript

## 📄 License

Personal use. Design by Jordi Espinosa.
