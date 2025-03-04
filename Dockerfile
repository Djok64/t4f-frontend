# Étape de construction
FROM node:18 AS builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm run build

# Étape de production
FROM node:18
WORKDIR /app
COPY --from=builder /app/.next ./.next
COPY package.json ./
RUN npm install --only=production

# Commande pour démarrer l'application
CMD ["npm", "start"]
