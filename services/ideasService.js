var database = require('./../database/database.js'),
	ideasCollection = database.mongoClient.collection('ideas');

function getIdeas() {
	return ideasCollection.find().toArray();
}

function addIdea(idea) {
	return ideasCollection.insertOne(idea);
}

module.exports = {
	getIdeas: getIdeas,
	addIdea: addIdea
};