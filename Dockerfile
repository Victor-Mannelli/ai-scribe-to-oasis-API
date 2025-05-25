FROM amd64/node:20-alpine3.21 AS builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma
COPY keys.json ./
RUN npm install

COPY . .
RUN npx prisma migrate
RUN npx prisma generate
RUN npm run build:docker

FROM amd64/node:20-alpine3.19

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

EXPOSE 5000
ENV PORT=5000

CMD ["npm", "run", "start:prod"]