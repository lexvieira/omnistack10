FROM node:12.14.1

WORKDIR /opt/ui

#RUN npm install npm@latest -g

#RUN npm install -g @angular/cli

USER 1000

EXPOSE 3333
EXPOSE 3000

CMD ["node", "-v"]

#CMD ["ng", "serve", "--host=0.0.0.0", "--port=4200", "--disable-host-check"]

#Example from: https://appdividend.com/2019/06/04/angular-8-tutorial-with-example-learn-angular-8-crud-from-scratch/

