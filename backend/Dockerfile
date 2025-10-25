# backend/Dockerfile

# Folosește imaginea minimalistă (nu mai avem nevoie de build tools)
FROM node:20-alpine 

# Setează directorul de lucru
WORKDIR /usr/src/app

# Copiază și instalează dependențele (curate, fără sqlite3)
COPY package*.json ./
RUN npm install --production 

# Copiază restul codului sursă
COPY . .

# Expune și pornește
EXPOSE 3000
CMD ["npm", "start"]