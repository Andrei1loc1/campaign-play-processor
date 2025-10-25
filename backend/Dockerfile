# backend/Dockerfile - Versiunea Robustă și Optimizată

# 1. Folosim o imagine standard Node.js (bazată pe Debian) care include 
# toate instrumentele necesare pentru a compila dependințe native ca sqlite3.
FROM node:20 

# Setează directorul de lucru
WORKDIR /usr/src/app

# 2. Copiază fișierele de manifest și le instalează.
# Acest pas folosește cache-ul Docker cel mai eficient.
COPY package*.json ./

# 3. Instalare doar pentru producție (exclusiv devDependencies)
RUN npm install --production

# 4. Copiază restul codului sursă.
# (Include src/, core/, Helpers/ și EventLogger.js)
COPY . .

# Expune portul
EXPOSE 3000

# Comanda de start
CMD ["npm", "start"]