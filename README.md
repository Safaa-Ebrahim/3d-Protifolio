# Safaa's 3D Portfolio

A responsive developer portfolio built to introduce Safaa Mahmoud Ebrahim, present her experience and technical skills, and showcase selected personal and professional projects. The interface combines a dark visual theme with animated sections and interactive 3D scenes.

## Portfolio sections

- **Hero** — introduction and a quick overview of Safaa's role.
- **About** — professional summary and areas of focus.
- **Experience** — work history and education.
- **Tech stack** — technologies grouped by area.
- **Projects** — project summaries, technology tags, screenshots, and available live-site or project links.
- **Contact** — a contact form and an interactive 3D Earth.

## Built with

- React 18 and Create React App
- React Three Fiber, Drei, and Three.js for 3D scenes
- Tailwind CSS for styling
- Framer Motion for animations
- React Vertical Timeline for the experience section
- EmailJS for contact form submissions

## Run locally

### Requirements

- Node.js and npm

### Install and start

```bash
npm install
npm start
```

The development server opens at [http://localhost:3000](http://localhost:3000). It reloads when source files change.

## Other commands

```bash
npm test
npm run build
```

- `npm test` starts the Create React App test runner.
- `npm run build` creates an optimized production build in `build/`.

## Project structure

```text
public/
  planet/                 Earth model and its textures
  Safaa_Mahmoud_Ebrahim_CV.pdf
src/
  assets/
    company/              Company and education logos
    projects/             Project screenshots and preview images
    tech/                 Technology icons
  components/             Page sections and reusable UI
    canvas/               React Three Fiber scenes
  constants/
    index.js              Portfolio text, experience, skills, and project data
  hoc/                    Higher-order components, including section wrappers
  utils/                  Shared animation variants and helpers
```

## Updating portfolio content

- Edit `src/constants/index.js` to update the introduction data, experience, technology groups, project descriptions, tags, and links.
- Add project screenshots to `src/assets/projects/`, export them from `src/assets/index.js`, and reference the exported image in the matching project entry.
- Project links are optional. Leave a link as `null` when it is not available; its button will not be shown.
- Replace a project's placeholder image with a real screenshot when one becomes available.
- Place the downloadable CV in `public/` and update the CV link in the component that uses it if the file name changes.

## Deployment

Run `npm run build`, then deploy the generated `build/` directory to a static hosting provider. Because the app uses React Router, configure the host to serve `index.html` for application routes.

## 3D model attribution

The Earth model and its textures are in `public/planet/`. Keep the included `public/planet/license.txt` attribution with the model when redistributing the project.
