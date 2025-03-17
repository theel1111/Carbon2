FROM node:14-slim

#why is it user dir
WORKDIR /user/src/app

# COPY . /package-lock.json ./
COPY . /package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
