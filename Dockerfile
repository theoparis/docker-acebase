FROM node:alpine

WORKDIR /app
COPY . .
RUN npm install

ENV ACE_DB mydb
ENV ACE_ADMIN_PASS s3cr3t
ENV ACE_AUTH true
ENV ACE_ALLOW_SIGNUP false
ENV ACE_PATH /data
VOLUME [ "/data" ]
EXPOSE 5757

CMD npm run start
