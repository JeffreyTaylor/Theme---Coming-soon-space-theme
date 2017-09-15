FROM node:8.5-slim

RUN mkdir -p /home/dev

COPY ./src /home/dev/src
COPY ./server.js /home/dev
COPY ./package.json /home/dev

RUN npm install --production --silent

CMD ["node", "/home/dev/server.js"]


