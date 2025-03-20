# T4F-Frontend

## Description

T4F-Frontend est le frontend du projet World Of Clovers,de la T4F Company, une plateforme Web3 intégrant la blockchain Solana. Ce projet est développé avec **Next.js 15**, **React 19**, **TypeScript**, **TailwindCSS**, et utilise **Axios** pour les appels API.

## Prérequis

Avant d'installer et d'exécuter ce projet, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- **Node.js** (v18+) [Installer Node.js](https://nodejs.org/)
- **pnpm** (gestionnaire de paquets) [Installer pnpm](https://pnpm.io/installation)
- **Git** [Installer Git](https://git-scm.com/)

## Installation

1. **Cloner le dépôt Git**

   ```sh
   git clone git@github.com:Djok64/t4f-frontend.git
   cd t4f-frontend
   ```

2. **Installer les dépendances**

   ```sh
   pnpm install
   ```

3. **Configurer les variables d'environnement**
   Créez un fichier `.env.local` à la racine et ajoutez les variables suivantes :
   ```sh
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```

## Démarrage du projet

- **Mode développement** :
  ```sh
  pnpm dev
  ```
- **Build de production** :
  ```sh
  pnpm build
  ```
- **Lancer le serveur de production** :
  ```sh
  pnpm start
  ```
- **Linting et formatage** :
  ```sh
  pnpm lint
  ```

## Structure du projet

```
T4F-Frontend
│── public/                  # Images et assets statiques
│── src/
│   ├── app/                 # Pages et routes Next.js
│   │   ├── components/       # Composants réutilisables
│   │   ├── hooks/           # Hooks personnalisés
│   │   ├── lib/             # Gestion des requêtes API
│   │   ├── styles/          # Fichiers CSS globaux
│   │   ├── utils/           # Fonctions utilitaires
│   └── constants/           # Fichiers de configuration (API, routes...)
│── package.json             # Dépendances et scripts
│── tailwind.config.ts       # Configuration TailwindCSS
│── tsconfig.json            # Configuration TypeScript
└── README.md                # Documentation du projet
```

## Gestion des branches

Les branches suivent une nomenclature stricte :

```
000-nomDuComposant
```

Exemple : `002-heroSection` pour la section Hero du site.

## Contribution

1. **Créer une nouvelle branche** :
   ```sh
   git checkout -b 003-featureName
   ```
2. **Faire les modifications** et commiter :
   ```sh
   git commit -m "Ajout du composant HeroSection"
   ```
3. **Pousser la branche** :
   ```sh
   git push origin 003-featureName
   ```
4. **Faire une Pull Request** sur GitHub.

## Auteurs

- **Joakym Ancelin** - [Djok64](https://github.com/Djok64)

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus d'informations.
