# -------------------------
# 1) Build Stage (Node)
# -------------------------
    # FROM node:23-alpine AS build-stage
    FROM node:23-alpine
    
    # 設定工作目錄
    WORKDIR /app
    
    # 先複製 package.json & package-lock.json，並安裝依賴
    COPY package*.json ./
    RUN npm install
    
    # 接著把所有程式碼複製到容器
    COPY . .
    
    # 執行打包（Vue 會把結果放在 dist）
    # RUN npm run build
    CMD ["npm", "run", "dev"]

# -------------------------
# 2) Production Stage (Nginx)
# -------------------------
    #FROM nginx:stable-alpine as production-stage

    # 把打包後的檔案從 build-stage 複製到 Nginx 預設靜態檔案目錄
    #COPY --from=build-stage /app/dist /usr/share/nginx/html
    
    # 對外開放 80 port
    #EXPOSE 80
    
    # 讓 nginx 在前景執行
    #CMD ["nginx", "-g", "daemon off;"]
    
# 