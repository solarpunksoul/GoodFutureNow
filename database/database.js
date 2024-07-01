var MongoClient = require('mongodb').MongoClient,
	uri = 'mongodb+srv://solarpunksoul:CBxwipcC7zxWUEx0@cluster0.9ufqqka.mongodb.net/?retryWrites=true&w=majority',
	mongoClient = new MongoClient(uri).db('goodfuturenow');

module.exports = {
	mongoClient: mongoClient
};