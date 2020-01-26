FROM node:10
WORKDIR /root
COPY index.js /root
EXPOSE 8080
CMD [ "node", "index.js" ]