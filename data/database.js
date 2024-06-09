const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

async function connectToDatabase() {
  let client;
  if (process.env.MONGO_URL){
    client = await MongoClient.connect(process.env.MONGO_URL);
  }
  client = await MongoClient.connect('mongodb://localhost:27017');
  database = client.db('online-shop');
}

function getDb() {
  if (!database) {
    throw new Error('You must connect first!');
  }

  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb
};