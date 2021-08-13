FROM node:15-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN apk update && apk add yarn python3 g++ make

ARG BASE_API_URL
ARG SITE_URL
ARG CLIENT_API_URL
ARG BUILDER_KEY
ARG APP_ENV
ARG BIT_TOKEN

COPY /package.json /yarn.lock /.npmrc ./

RUN echo "//node.bit.dev/:_authToken=$BIT_TOKEN" >> .npmrc \
   && yarn \
   && sed -i '/_authToken/d' .npmrc

COPY / ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
# Trying to move stderr to stdout
#CMD npm start 2>&1
