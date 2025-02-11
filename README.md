🚀 Documentation Complète - Projet T4F Company
📌 Installation et configuration sous Windows & Linux

Cette documentation explique en détail comment installer et configurer l’environnement de développement du projet T4F Company sous Windows et Linux (Ubuntu).

Elle inclut :
✅ Installation complète du frontend et backend
✅ Configuration des outils sous Windows & Linux
✅ Gestion des variables d’environnement
✅ Exécution du projet en local
✅ Commandes utiles & workflow Git
✅ Bonnes pratiques et dépannage

📌 1. Prérequis : Installer les outils nécessaires
🔹 1.1 Outils requis
Avant de commencer, installez les outils suivants :

Outil Version recommandée Windows Linux (Ubuntu)
Node.js LTS (18.x ou +) Télécharger ici sudo apt install nodejs npm
pnpm Dernière version npm install -g pnpm npm install -g pnpm
Git Dernière version Télécharger ici sudo apt install git
Docker (optionnel) Dernière version Télécharger ici Guide ici
PostgreSQL (si utilisé) 14+ Télécharger ici sudo apt install postgresql postgresql-contrib
VS Code (Recommandé) Dernière version Télécharger ici sudo snap install --classic code
🔹 1.2 Vérifier les installations
Dans le terminal (Windows PowerShell / Git Bash / Terminal Linux), exécutez :

bash
Copier
Modifier
node -v # Vérifie la version de Node.js
pnpm -v # Vérifie la version de pnpm
git --version # Vérifie la version de Git
docker -v # Vérifie la version de Docker
psql --version # Vérifie la version de PostgreSQL (si utilisé)
Si une commande échoue, revoyez l’installation de l’outil correspondant.

🏗️ 2. Installation et configuration du projet
🔹 2.1 Cloner le projet
Ouvrez un terminal et exécutez :

bash
Copier
Modifier
git clone https://github.com/T4FCompany/nom-du-repo.git
cd nom-du-repo
Astuce : Si vous travaillez sur une nouvelle fonctionnalité, créez une branche :

bash
Copier
Modifier
git checkout -b feature-nom-de-la-feature
🔹 2.2 Installer les dépendances
Dans le dossier du projet, exécutez :

bash
Copier
Modifier
pnpm install
🚀 Pourquoi pnpm ?

Plus rapide et optimise l’espace disque
Évite la duplication des dépendances
🔹 2.3 Configuration des variables d’environnement
Certains services nécessitent un fichier .env.

1️⃣ Copiez le fichier .env.example :

bash
Copier
Modifier
cp .env.example .env
2️⃣ Éditez le fichier .env avec les informations nécessaires :

env
Copier
Modifier
NEXT_PUBLIC_API_URL=http://localhost:3001
DATABASE_URL=postgresql://user:password@localhost:5432/database
JWT_SECRET=super-secret-key
🚨 Attention : Ne partagez jamais ce fichier sur Git ! Il doit être ajouté au .gitignore.

🔹 2.4 Configuration de PostgreSQL (si utilisé)
Sous Windows
Installez PostgreSQL via le site officiel
Lancez pgAdmin et créez une nouvelle base de données : database
Configurez l’utilisateur PostgreSQL et le mot de passe
Sous Linux (Ubuntu)
1️⃣ Installation de PostgreSQL

bash
Copier
Modifier
sudo apt update
sudo apt install postgresql postgresql-contrib
2️⃣ Créer un utilisateur PostgreSQL

bash
Copier
Modifier
sudo -u postgres createuser --interactive
3️⃣ Créer une base de données

bash
Copier
Modifier
sudo -u postgres createdb database
4️⃣ Accéder à PostgreSQL et configurer l’utilisateur

bash
Copier
Modifier
sudo -u postgres psql
ALTER USER votre_utilisateur WITH PASSWORD 'votre_mot_de_passe';
🚀 3. Démarrer le projet en local
🔹 3.1 Démarrer le Backend
📌 Si le backend utilise NestJS, lancez :

bash
Copier
Modifier
cd backend
pnpm start:dev
Le backend sera accessible à http://localhost:3001.

📌 Si Docker est utilisé, démarrez le backend avec :

bash
Copier
Modifier
docker-compose up -d
🔹 3.2 Démarrer le Frontend
Pour lancer l’application Next.js :

bash
Copier
Modifier
cd frontend
pnpm dev
L’application sera accessible à http://localhost:3000.

📌 4. Commandes utiles
Action Commande
Lancer le frontend pnpm dev
Lancer le backend pnpm start:dev
Lancer les services Docker docker-compose up -d
Arrêter Docker docker-compose down
Mettre à jour le projet git pull origin main
Créer une nouvelle branche git checkout -b feature-nom
🚀 5. Workflow Git et bonnes pratiques
🔹 5.1 Travailler sur une nouvelle fonctionnalité
Mettez à jour votre projet :
bash
Copier
Modifier
git pull origin main
Créez une nouvelle branche :
bash
Copier
Modifier
git checkout -b feature-nom-de-la-feature
Après modifications, committez et poussez :
bash
Copier
Modifier
git add .
git commit -m "Ajout de la feature X"
git push origin feature-nom-de-la-feature
Créez une Pull Request (PR) sur GitHub.
🎯 6. Déploiement et CI/CD
🔹 6.1 Déploiement automatique
Si le projet est déployé via Vercel, Netlify, ou Railway, il peut être mis à jour avec :

bash
Copier
Modifier
git push origin main
Si une pipeline CI/CD est en place, le projet sera déployé automatiquement.

📖 7. Ressources utiles
📌 Documentation des technologies utilisées

Documentation Next.js
Documentation NestJS
Guide pnpm
Gestion des branches Git
Guide PostgreSQL

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
