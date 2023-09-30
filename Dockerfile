FROM node:17-alpine as builder
WORKDIR /app
RUN apk add --update nodejs
RUN apk add npm
RUN npm install pnpm -g
COPY . .

RUN pnpm install
ENV PRISMA_BINARIES_MIRROR=http://prisma-builds.s3-eu-west-1.amazonaws.com
# RUN npx prisma generate

RUN npx @nestjs/cli build

FROM node:17-alpine

WORKDIR /app

COPY --from=builder /app/dist  ./dist
COPY --from=builder /app/node_modules  ./node_modules
COPY --from=builder /app/prisma  ./prisma
COPY --from=builder /app/package.json  ./package.json
CMD [ "node", "dist/main.js" ]
