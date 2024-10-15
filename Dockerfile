# Set the base image to create the image for a React app
FROM node:20-alpine

# Create a user with permissions to run the app (non-root user for security reasons)
# -S -> create a system user
# -G -> add the user to a group
# RUN addgroup app && adduser -S -G app app

# Set the user to run the app
# USER app

# Set the working directory inside the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
# This takes advantage of Docker’s cache for dependencies
COPY package*.json ./

# Sometimes the ownership of the files is changed to root,
# so change the ownership of /app directory to the app user
# USER root
# RUN chown -R app:app .

# Switch back to the app user
# USER app

# Install dependencies
RUN npm install

# Copy the rest of the app's files to the working directory
COPY . .

# Expose port 5173 to indicate the port the app will run on
EXPOSE 5173

# Command to run the app in development mode
CMD ["npm", "run", "dev"]
