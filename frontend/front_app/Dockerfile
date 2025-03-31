FROM node:23-alpine

# 設定工作目錄，稍後的工作目錄為 app
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 執行npm安裝
RUN npm install

# 複製應用程式中的所有檔案到容器中
COPY . .


RUN npm run build

RUN npm install -g serve

EXPOSE 3000

# 使用靜態伺服器提供建置後的檔案
CMD ["serve", "-s", "dist"]
