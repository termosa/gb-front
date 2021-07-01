FROM node:15-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN apk update && apk add yarn python3 g++ make

ARG BIT_TOKEN=00000000-0000-0000-0000-000000000000

COPY /package.json /yarn.lock /.npmrc ./

RUN echo "//node.bit.dev/:_authToken=$BIT_TOKEN" >> .npmrc \
   && yarn \
   && sed -i '/_authToken/d' .npmrc

COPY / ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]