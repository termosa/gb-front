FROM node:15-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

RUN apk update && apk add yarn python3 g++ make

ARG BASE_API_URL
ARG CLIENT_API_URL
ARG NEXT_PUBLIC_BUILDER_PUBLIC_KEY
ARG BIT_TOKEN

COPY /package.json /yarn.lock /.npmrc ./

RUN echo "//node.bit.dev/:_authToken=$BIT_TOKEN" >> .npmrc \
   && yarn \
   && sed -i '/_authToken/d' .npmrc

COPY / ./

RUN npm run build

EXPOSE 3000

#CMD ["npm", "start"]
#CMD ["run.sh"]
CMD ["npm", "start 2>&1"]
