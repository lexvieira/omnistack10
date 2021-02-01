FROM node:12.14.1

WORKDIR /opt/ui

EXPOSE 3333 3000 19000 19001 19002 19006

RUN apt-get update 

RUN yarn global add expo-cli

ENV PATH="$(yarn global bin):$PATH"

USER 1000

CMD ["node", "-v"]