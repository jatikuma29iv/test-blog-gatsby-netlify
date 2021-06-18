
FROM node:lts-alpine as base
#FROM rhel8/nodejs-12:latest as base

# for mozjpeg
run apk --update --no-cache add autoconf automake \
    libtool make tiff jpeg zlib zlib-dev pkgconf \
    nasm file gcc musl-dev

USER node

RUN mkdir /home/node/app && chown node:node /home/node/app

WORKDIR /home/node/app

ADD --chown=node:node package* .

RUN npm install

# run apk del autoconf automake \
#     libtool make zlib-dev pkgconf \
#     gcc musl-dev

ADD --chown=node:node . .


FROM base as dev

#RUN chown -R node:node /home/node/app

CMD ["npm", "run", "develop"]
