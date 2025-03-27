FROM node:23-alpine

WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

# 使用靜態伺服器提供建置後的檔案
CMD ["serve", "-s", "dist"]
