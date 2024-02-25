const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const uri = process.env.MongoURI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
// db.js

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function connectToMongoDB() {
  let conn = null;

  try {
    console.log("Trying to establish connection...");
    conn = await client.connect();
    console.log("Connection established successfully");
  } catch (e) {
    console.error("Error connecting to MongoDB:", e);
    throw e; // Propagate the error to handle it where connectToMongoDB is called
  }

  // Return the desired database object
  return conn.db("test");
}

// Export the client and connect function
module.exports = {
  client: client,
  connectToMongoDB: connectToMongoDB,
};
