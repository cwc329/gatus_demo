FROM node:14-slim

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app
COPY . .

RUN yarn install
EXPOSE 5566

CMD ["yarn", "start"]