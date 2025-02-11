# 🚀 Documentation - Installation et Configuration

Cette documentation explique **en détail** comment installer et configurer l’environnement de développement du projet **T4F Company** sous **Windows** et **Linux (Ubuntu)**.

Elle inclut :

- ✅ **Installation complète** du frontend et backend
- ✅ **Configuration des outils sous Windows & Linux**
- ✅ **Gestion des variables d’environnement**
- ✅ **Installation et configuration de MongoDB**
- ✅ **Exécution du projet en local**
- ✅ **Commandes utiles & workflow Git**
- ✅ **Bonnes pratiques et dépannage**

---

## 📌 1. Prérequis : Installer les outils nécessaires

### 🔹 1.1 Outils requis

Avant de commencer, installez les outils suivants :

| Outil       | Version recommandée | Windows                                                       | Linux (Ubuntu)                                          |
| ----------- | ------------------- | ------------------------------------------------------------- | ------------------------------------------------------- |
| **Node.js** | LTS (18.x ou +)     | [Télécharger](https://nodejs.org/)                            | `sudo apt install nodejs npm`                           |
| **pnpm**    | Dernière version    | `npm install -g pnpm`                                         | `npm install -g pnpm`                                   |
| **Git**     | Dernière version    | [Télécharger](https://git-scm.com/downloads)                  | `sudo apt install git`                                  |
| **Docker**  | Dernière version    | [Télécharger](https://www.docker.com/get-started)             | [Guide](https://docs.docker.com/engine/install/ubuntu/) |
| **MongoDB** | 6.x                 | [Télécharger](https://www.mongodb.com/try/download/community) | `sudo apt install mongodb`                              |
| **VS Code** | Dernière version    | [Télécharger](https://code.visualstudio.com/)                 | `sudo snap install --classic code`                      |

---

### 🔹 1.2 Vérifier les installations

Dans le terminal (Windows PowerShell / Git Bash / Terminal Linux), exécutez :

```bash
node -v        # Vérifie la version de Node.js
pnpm -v        # Vérifie la version de pnpm
git --version  # Vérifie la version de Git
docker -v      # Vérifie la version de Docker
mongod --version # Vérifie la version de MongoDB
```

🏗️ 2. Installation et configuration du projet
🔹 2.1 Cloner le projet
Ouvrez un terminal et exécutez :

```bash

git clone https://github.com/T4FCompany/nom-du-repo.git
cd nom-du-repo
```

Astuce : Si vous travaillez sur une nouvelle fonctionnalité, créez une branche :

```bash

git checkout -b feature-nom-de-la-feature
```

🔹 2.2 Installer les dépendances
Dans le dossier du projet, exécutez :

```bash

pnpm install
```

🚀 Pourquoi pnpm ?

Plus rapide et optimise l’espace disque
Évite la duplication des dépendances
🔹 2.3 Configuration des variables d’environnement
Certains services nécessitent un fichier .env.

Copiez le fichier .env.example :

```bash

cp .env.example .env

```

Éditez le fichier .env avec les informations nécessaires :

```typescript

NEXT_PUBLIC_API_URL=http://localhost:3001
MONGO_URI=mongodb://localhost:27017/t4f_database
JWT_SECRET=super-secret-key
```

🚨 Attention : Ne partagez jamais ce fichier sur Git ! Il doit être ajouté au .gitignore.

🛠️ 3. Installation et configuration de MongoDB
🔹 3.1 Utiliser MongoDB avec Docker (recommandé)
La meilleure façon d'exécuter MongoDB en local est via Docker :

```bash

docker run -d --name mongo-t4f \
 -p 27017:27017 \
 -e MONGO_INITDB_ROOT_USERNAME=admin \
 -e MONGO_INITDB_ROOT_PASSWORD=secret \
 mongo:6
```

Cela va démarrer MongoDB sur le port 27017.
Votre URI de connexion sera :

```perl

mongodb://admin:secret@localhost:27017/
```

👉 Ajoutez cette URI dans le fichier .env sous MONGO_URI.

🔹 3.2 Installer MongoDB en local (alternative)
Si vous ne voulez pas utiliser Docker, installez MongoDB manuellement :

Windows
Téléchargez MongoDB Community Edition
Installez MongoDB avec les options par défaut.
Démarrez MongoDB :

```powershell

mongod
```

Linux (Ubuntu)

```bash

sudo apt update
sudo apt install mongodb
sudo systemctl start mongodb
sudo systemctl enable mongodb
```

🚀 4. Démarrer le projet en local
🔹 4.1 Démarrer le Backend (NestJS)

```bash

cd backend
pnpm start:dev
```

Le backend sera accessible à http://localhost:3001.

Si MongoDB est bien configuré, vous devriez voir une connexion réussie dans la console.

🔹 4.2 Démarrer le Frontend (Next.js)

```bash

cd frontend
pnpm dev
```

L’application sera accessible à http://localhost:3000.

📌 5. Commandes utiles
Action Commande
Lancer le frontend : pnpm dev
Lancer le backend : pnpm start:dev
Lancer MongoDB avec Docker : docker-compose up -d
Arrêter MongoDB : docker-compose down
Mettre à jour le projet : git pull origin main
Créer une nouvelle branche : git checkout -b feature-nom

🚀 6. Workflow Git et bonnes pratiques

🔹 6.1 Travailler sur une nouvelle fonctionnalité
Mettez à jour votre projet :

```bash

git pull origin main
```

Créez une nouvelle branche :

```bash

git checkout -b feature-nom-de-la-feature
```

Après modifications, committez et poussez :

```bash

git add .
git commit -m "Ajout de la feature X"
git push origin feature-nom-de-la-feature
```

Créez une Pull Request (PR) sur GitHub.

📖 7. Ressources utiles
📌 Documentation des technologies utilisées

Documentation Next.js
Documentation NestJS
Guide pnpm
MongoDB Docs
Mongoose Docs
🎯 Conclusion
Cette documentation corrigée et détaillée vous permet d’installer et configurer MongoDB correctement avec NestJS et Next.js, que ce soit sous Windows ou Linux. 🚀

---

✅ **Cette version est totalement optimisée** pour **MongoDB** et GitHub.  
✅ Elle inclut **Docker** pour MongoDB (recommandé) et une alternative **sans Docker**.  
✅ Elle est **propre, claire et bien structurée** pour ton équipe.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

```

```
