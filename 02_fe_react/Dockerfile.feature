# feature: 컨테이너 안에서 npm run dev — 호스트 코드 마운트로 실시간 반영
FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]
