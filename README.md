# 🎭 KANA-MASK (カナ-マスク)

**KANA-MASK** is a specialized web utility designed to generate "Pseudo-Japanese" text for gaming usernames. It runs on Next.js and is optimized for Docker/Portainer deployment.

## 🚀 Deployment (Portainer)

This app is hosted on GitHub Container Registry (GHCR).

### docker-compose.yml
```yaml
services:
  app:
    image: ghcr.io/tildemark/kanamask:latest
    container_name: kana-mask
    restart: unless-stopped
    networks:
      - net

networks:
  net:
    external: true
remot