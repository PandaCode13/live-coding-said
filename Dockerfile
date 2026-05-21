FROM node:26-alpine

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma

RUN npm ci

CMD ["sh", "-c", "npm run prisma:migrate:prod && npm run start:dev"]