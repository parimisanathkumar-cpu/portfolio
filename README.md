# 💫 Sanath Kumar | Full Stack Developer Portfolio

Welcome to the repository of my personal developer portfolio. Built with a modern, luxury **Obsidian & Gold Glassmorphism** aesthetic, this site showcases my professional experience, technical focus areas, personal projects, and interactive resume.

[![Portfolio Live](https://img.shields.io/badge/Portfolio-Live-amber?style=for-the-badge&logo=react&logoColor=black)](https://parimisanathkumar-cpu.github.io/portfolio/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![React](https://img.shields.io/badge/React-18.x-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## 🎨 Design Philosophy & UX Highlights

The portfolio was custom-designed from scratch to deviate from standard templates and provide a premium, state-of-the-art visual presentation:

*   **Obsidian & Gold Aesthetic**: An elegant dark palette featuring high-contrast text, ambient glowing backlights (gold/amber neon blobs), and harmonized gold gradients (`#fbbf24` to `#d97706`).
*   **Premium Glassmorphic Layout**: Glassmorphic cards with thin, high-fidelity responsive borders (`rgba(255, 255, 255, 0.08)`) that smoothly transition to a gold hover state with drop-shadow depths.
*   **Live Cloud PDF Resume Embed**: Integrates a seamless, responsive PDF reader preview embedded directly into the interface using the Google Drive previewer, coupled with a direct, single-click background download pipeline.
*   **Custom Branded SVGs**: Features hand-crafted minimalist wireframe SVG icons for personal projects—specifically including the circular soundwave **Resonance beacon** from the application's screenshot and a custom wireframe **Reddit Snoo** matching the outline theme.
*   **Smooth Motion & Navigation**: Employs Framer Motion for elegant entrance fades, along with a custom React scroll spy that dynamically updates active navigation pills as the user scrolls.

---

## 🛠️ Technology Stack

*   **Core**: [ReactJS 18](https://react.dev/) & [Vite](https://vite.dev/) (For ultra-fast Hot Module Replacement and production bundling)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/) (For micro-interactions and scroll-triggered animations)
*   **Icons**: [Lucide React](https://lucide.dev/) & custom responsive SVGs
*   **Styling**: Pure CSS Custom Properties (Vanilla CSS variables) & Google Font **Outfit** / **Inter**

---

## 📂 Project Structure

```bash
portfolio/
├── public/                 # Static assets (including profile picture)
├── src/
│   ├── assets/             # Brand logos & vector assets
│   ├── App.css             # Local Component overrides
│   ├── App.jsx             # Core Application, layout & profile data
│   ├── index.css           # Global typography, color tokens, and layout styles
│   └── main.jsx            # React root mount script
├── vite.config.js          # Vite build options
├── package.json            # Dependencies & npm scripts
└── README.md               # You are here!
```

---

## 🚀 Getting Started

Follow these simple steps to run this portfolio on your local machine:

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) and **npm** installed. You can check your version using:
```bash
node -v
npm -v
```

### 2. Clone the Repository
```bash
git clone https://github.com/parimisanathkumar-cpu/portfolio.git
cd portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```
Once started, open your browser and navigate to the local link (usually `http://localhost:5173`).

### 5. Build for Production
To bundle and optimize the codebase for production deployment:
```bash
npm run build
```
This generates a highly optimized static bundle inside the `/dist` directory.

---

## 📡 Live Integration Details

*   **Direct Resume Download**: Uses the Google Drive file exporter API (`https://drive.google.com/uc?export=download&id=...`) to initiate an immediate background download of your professional PDF in the browser.
*   **Live Previewer**: Uses Google Drive's viewer API (`/preview`) frame which ensures your resume is fully readable, scrollable, and always up-to-date with your cloud documents.

---

## 📄 License
This project is licensed under the **MIT License**. Feel free to use it as inspiration for your own portfolio.
