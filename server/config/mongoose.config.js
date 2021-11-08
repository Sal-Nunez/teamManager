const mongoose = require('mongoose');

const nameOfDB = "team_manager"
const database = "mongodb://localhost/" + nameOfDB;

mongoose.connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));