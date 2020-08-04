FROM node
WORKDIR /usr/src/store/app
COPY package*.json ./
RUN npm install --silent
COPY . .
CMD ["npm", "start"]