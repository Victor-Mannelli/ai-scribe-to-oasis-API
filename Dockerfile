FROM amd64/node:20-alpine3.21 AS builder

WORKDIR /app

COPY . .

RUN npm install

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

RUN npx prisma generate 
RUN npx prisma migrate deploy
RUN npm run build

FROM amd64/node:20-alpine3.19

WORKDIR /app

ARG DATABASE_URL
ARG OPENROUTER_API_KEY
ARG ASSEMBLYAI_API_KEY

ENV PORT=5000
ENV DATABASE_URL=$DATABASE_URL
ENV OPENROUTER_API_KEY=$OPENROUTER_API_KEY
ENV ASSEMBLYAI_API_KEY=$ASSEMBLYAI_API_KEY

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

EXPOSE 5000

CMD ["npm", "run", "start:prod"]