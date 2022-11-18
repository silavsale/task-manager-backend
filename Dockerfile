FROM node:latest

# Working Dir
WORKDIR /app 

# Copy Package Json
COPY package.json .

# Install Prettier (For our package's build function)
# RUN npm install prettier -g
# RUN npm ci --only=production

RUN npm install nodemon -g

# Install Files
RUN npm install

# Copy Source Files
COPY . ./

# Expose the API Port
EXPOSE 3000

# Build
# RUN npm run build

CMD [ "node", "app.js"]