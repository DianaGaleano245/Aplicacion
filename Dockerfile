FROM node:18

#creacion directorio de aplicacion
WORKDIR /usr/src/app

#instalacion de dependencias
COPY package*.json ./

RUN npm install

#copio todos los archivos del directorio actual 
COPY . .

EXPOSE 3000

CMD [ "node", "index.js" ]