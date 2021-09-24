FROM node:15-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN apk update && apk add --update yarn python3 g++ make curl 

ARG BASE_API_URL
ARG CLIENT_API_URL
ARG SITE_URL

COPY /package.json /yarn.lock ./

RUN yarn

COPY / ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
# Trying to move stderr to stdout
#CMD npm start 2>&1
