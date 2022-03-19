FROM node:12.22.0-alpine

WORKDIR /usr/src

COPY package.json /usr/src/package.json
RUN yarn install --ignore-platform

COPY . /usr/src/

CMD ["sh", "start.sh"]