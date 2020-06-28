FROM node:10-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

ENV COUNTRY="CL"
ENV COMMERCE="Market"
ENV CHANNEL="Web"
ENV MONGO_USER="productListUser"
ENV MONGO_PASS="productListPassword"
ENV MONGO_HOST="localhost"
ENV MONGO_PORT="27017"

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 3001

CMD [ "node", "./bin/www" ]