
const { MongoClient, MongoTopologyClosedError } = require('mongodb');
const myConfig=require('config');

// Replace the following connection string with your actual MongoDB connection string
const MONGODB_URI = myConfig.get("baza.opisKonekcije");

let db = null;

async function connectToDatabase() {
  if (!db) {
    try {
      const client = await MongoClient.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      db = client.db("Mere");
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }
}

function getDatabase() {
  if (!db) {
    console.error('MongoDB connection not established');
    return null;
  }
  return db;
}

module.exports = {
  connectToDatabase,
  getDatabase
};
