# Setting Up MongoDB and Connecting MongoDB using Mongoose with Express

This README provides instructions to set up and run the server for the assignment, including connecting to MongoDB using the MongoDB shell.

## Prerequisites

Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v12 or later)
- [MongoDB](https://www.mongodb.com/try/download/community) (for running locally)

---

## Project Setup

### 1. Creating the Project Directory

```bash
cd mongodb-mongoose-assignment
```

### 2. Install Dependencies

Install the required Node.js packages:

```bash
npm install
```

### 3. Start MongoDB Server

#### Local MongoDB**
- Start the MongoDB server by running the following command in your terminal:

```bash
mongod
```

#### MongoDB Shell Connection**
- Open a new terminal window and connect to the MongoDB shell:

```bash
mongosh
```

---

## Running the Server

1. Start the server:

```bash
node app.js
```
_The server will run on `http://localhost:3000` by default._

---

## Testing the API

Use a tool like [Postman](https://www.postman.com/) to test the following routes:


## Additional Notes

- Ensure MongoDB is running before starting the server.
- For MongoDB shell operations, the database must already be created and accessible.

---
