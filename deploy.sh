#!/bin/bash
cd /var/www/umo-odas
git pull origin main
export PATH=$PATH:/usr/bin
npm install --production
npm run build
pm2 restart umo-odas
echo "✅ Déploiement terminé !"
