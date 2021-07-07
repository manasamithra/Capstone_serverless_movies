# Serverless Movie Planner Application

Serverless Movie application where a user can use this to keep track of the movies watchlist.
User can store the list with details such as rating, pictures, reviews etc.

Backend
To build and deploy the application, first edit the backend/serverless.yml file to set the appropriate AWS and Auth0 parameters, then run the following commands:

cd to the backend folder: cd backend
Install dependencies: npm install
Build and deploy to AWS: sls deploy -v
Frontend
To run the client application, first edit the client/src/config.ts file to set the appropriate AWS and Auth0 parameters, then run the following commands:

cd to the client folder: cd client
Install dependencies: npm install
Run the client application: npm run start
This should start a development server with the React application that will interact with the serverless TODO application.

![image](https://user-images.githubusercontent.com/63588983/124767605-94682700-df55-11eb-9ec2-a52cd53539de.png)
