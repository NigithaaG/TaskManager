# Task Management Application

This is a simple Task Management Application built with Angular.js for the frontend and Node.js with MongoDB for the backend.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download Node.js](https://nodejs.org/)
- MongoDB: [Install MongoDB](https://docs.mongodb.com/manual/installation/)

## Installation

1. Clone the Repository:
   
   git clone https://github.com/yourusername/task-management-app.git
  
2. Navigate to the Project Directory:

   cd task-management-app
 
3. Initialize Node.js:

   Run the following command to initialize the project and install the required dependencies:

   npm init -y

4. Install Backend Dependencies:

   Install the backend dependencies by running:

   npm install express mongoose body-parser --save

5. Install Frontend Dependencies:

   Navigate to the `public` folder (or wherever your Angular.js app is) and install frontend dependencies:

   cd public
   npm install

## Configuration

1. MongoDB Setup:

   Ensure MongoDB is running. Update the MongoDB connection string in the `server.js` file:

   mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });
  

## Running the Application

1. Start the Backend Server:

   In the project root directory, run:

   node server.js

   This will start the Node.js server.

2. Start the Frontend Application:

   In the `public` directory, run:

   npm start

   This will start the Angular.js development server.

3. Access the Application:

   Open your browser and visit [http://localhost:3000](http://localhost:3000) to access the Task Management Application.

## Usage

- Use the provided HTML files in the `public` directory for the frontend.
- Navigate to [http://localhost:3000](http://localhost:3000) to interact with the Task Management Application.

