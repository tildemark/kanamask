# 🎭 KANA-MASK (カナ-マスク)

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![PWA](https://img.shields.io/badge/PWA-Ready-purple?style=flat-square&logo=pwa)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-blue?style=flat-square&logo=tailwind-css)
![Docker](https://img.shields.io/badge/Docker-MultiArch-blue?style=flat-square&logo=docker)

**KANA-MASK** is a specialized identity obfuscation utility for gamers. It converts standard English usernames into visually similar "Pseudo-Japanese" text (Henohenomoheji style), creating unique, cryptic handles for gaming profiles.

### 🔴 Live Demo
🚀 **Deployed at:** [https://kana.sanchez.ph](https://kana.sanchez.ph)

---

## ⚡ Features

* **Real-time Obfuscation:** Instantly converts text as you type.
* **Dual Complexity Modes:**
    * `Basic`: Uses Katakana/Hiragana for a cleaner look.
    * `Elite`: Uses complex Kanji and Radicals for a "Heavy Industry" aesthetic.
* **PWA Support:** Installable on mobile devices (iOS/Android) with offline capabilities.
* **Smart Sharing:**
    * **Tap Card:** Instantly copies *only* the username (for game lobbies).
    * **Share Button:** Uses the native mobile Share Sheet to send the app to friends.
* **Dynamic Assets:** Open Graph images and App Icons are generated on the fly via code.
* **Mobile First:** Responsive "Cyberpunk" UI designed for phones and tablets.

---

## 🧩 Visual Mapping Logic

This tool does not translate phonetically. It translates based on **visual silhouette**.

| English | Character | Source | Visual Logic |
| :--- | :--- | :--- | :--- |
| **A** | **亼** | Kanji (Gather) | Sharp peaked roof |
| **L** | **乚** | Radical (Hidden) | Sharp 90-degree angle |
| **R** | **マ** | Katakana (Ma) | Top-heavy 'R' curve |
| **V** | **レ** | Katakana (Re) | Slanted checkmark shape |
| **W** | **山** | Kanji (Mountain) | Inverted 'W' / Trident |
| **X** | **乂** | Kanji (Shears) | Crossing blades |

---

## 🛠️ Tech Stack

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **PWA:** `next-pwa` + Web Manifest
* **Containerization:** Docker (Multi-stage build)
* **Registry:** GitHub Container Registry (GHCR)
* **Architecture:** Multi-arch support (AMD64 & ARM64/Ampere)

---

## 🚀 Deployment (Portainer / Docker)

This project is optimized for self-hosting on Portainer, specifically tested on **Oracle Cloud Ampere (ARM64)** instances.

### 1. Docker Compose (Stack)
Use this configuration in your Portainer Stack editor:

```yaml
services:
  app:
    image: ghcr.io/tildemark/kanamask:latest
    container_name: kana-mask
    restart: unless-stopped
    networks:
      - net

# Assumes you have an external network named 'net' for Nginx Proxy Manager
networks:
  net:
    external: true
```

### 2. GitHub Package Visibility (Crucial)
If Portainer fails to pull the image with manifest unknown or access denied:
 * Go to your GitHub Profile → Packages.
 * Select kanamask.
 * Settings → Change visibility → Public.

---

## 💻 Local Development
To run this project locally on your machine:
 * Clone the repo:
   git clone [https://github.com/tildemark/kanamask.git](https://github.com/tildemark/kanamask.git)
cd kanamask

 * Install dependencies:
   npm install

 * Run the dev server:
   npm run dev

 * View: Open http://localhost:3000.

---

## 📂 Project Structure
├── app/
│   ├── icon.tsx           # Dynamic PWA Icon generator
│   ├── layout.tsx         # Root layout + Metadata
│   ├── opengraph-image.tsx # Dynamic Social Preview
│   └── page.tsx           # Main UI & Logic
├── public/
│   └── manifest.json      # PWA Manifest
├── utils/
│   └── converter.ts       # Character Mapping Logic
├── Dockerfile             # Production Image Build
└── next.config.mjs        # PWA & Docker Config

---

## 🤝 Contributing
Contributions are welcome! If you find a Japanese character that looks more like an English letter than our current mapping, please open an Issue or Pull Request.

---

## 📄 License
Distributed under the MIT License.
