FROM node:14-alpine as builder

WORKDIR /data

COPY . /data

RUN npm install

FROM node:14-alpine

COPY --from=builder /data/src/dynamic_db /data/src/
COPY --from=builder /data/package*.json /data/
COPY --from=builder /data/node_modules/ /data/node_modules/


WORKDIR /data
USER node
CMD ["npm", "run", "start"]