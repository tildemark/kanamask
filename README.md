Here is a polished, professional README.md that highlights your live deployment and gives the project a "finished product" feel.
You can overwrite your existing README.md with this content.
README.md
# 🎭 KANA-MASK (カナ-マスク)

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-blue?style=flat-square&logo=tailwind-css)
![Docker](https://img.shields.io/badge/Docker-Ready-blue?style=flat-square&logo=docker)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

**KANA-MASK** is a specialized identity obfuscation utility for gamers. It converts standard English usernames into visually similar "Pseudo-Japanese" text (Henohenomoheji style), creating unique, cryptic handles for gaming profiles.

### 🔴 Live Demo
🚀 **Deployed at:** [https://kana.sanchez.ph](https://kana.sanchez.ph)

---

## ⚡ Features

* **Real-time Obfuscation:** Instantly converts text as you type.
* **Dual Complexity Modes:**
    * `Basic`: Uses Katakana/Hiragana for a cleaner look.
    * `Elite`: Uses complex Kanji and Radicals for a "Heavy Industry" aesthetic.
* **One-Tap Copy:** Optimized for quick usage during game lobby setup.
* **Mobile First:** Responsive UI designed for phones and tablets.
* **Dockerized:** Native support for multi-arch deployment (AMD64 & ARM64/Ampere).

---

## 🧩 Visual Mapping Logic

This tool does not translate phonetically. It translates based on **visual silhouette**.

| English | Character | Source | Visual Logic |
| :--- | :--- | :--- | :--- |
| **A** | **亼** | Kanji (Gather) | Sharp peaked roof |
| **D** | **囙** | Kanji (Old 'Cause') | Boxy 'D' shape |
| **R** | **マ** | Katakana (Ma) | Top-heavy 'R' curve |
| **W** | **山** | Kanji (Mountain) | Inverted 'W' / Trident |
| **X** | **乂** | Kanji (Shears) | Crossing blades |

---

## 🛠️ Tech Stack

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Language:** TypeScript
* **Containerization:** Docker (Multi-stage build)
* **Registry:** GitHub Container Registry (GHCR)

---

## 🚀 Deployment (Portainer / Docker)

This project is optimized for self-hosting on Portainer (specifically tested on OCI Ampere / ARM64 instances).

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

2. Github Package Visibility
If Portainer fails to pull the image, ensure the package is public:
 * Go to your GitHub Profile → Packages.
 * Select kanamask.
 * Settings → Change visibility → Public.
💻 Local Development
To run this project locally on your machine:
 * Clone the repo:
   git clone [https://github.com/tildemark/kanamask.git](https://github.com/tildemark/kanamask.git)
cd kanamask

 * Install dependencies:
   npm install

 * Run the dev server:
   npm run dev

 * View: Open http://localhost:3000.
🤝 Contributing
Contributions are welcome! If you find a Japanese character that looks more like an English letter than our current mapping, please open an Issue or Pull Request.
📄 License
Distributed under the MIT License.

