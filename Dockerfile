FROM node:19-alpine

ENV TZ="America/Sao_Paulo"
ENV NODE_ENV="development"

WORKDIR /usr/src/app

RUN npm install -g @nestjs/cli

COPY package*.json ./

RUN npm install -g npm@8.19.1
RUN npm install

COPY . .

EXPOSE 3000 7001

USER node

CMD [ "npm", "run", "start:dev" ]
