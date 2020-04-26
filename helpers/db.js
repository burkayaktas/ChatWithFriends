const mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect(process.env.DB_STRING);
    mongoose.connection.on("open", () => {
        console.log("MongoDb: Connected");
    });

    mongoose.connection.on("error", (err) => {
       // console.log("Mongodb: Error", err);
    });

    mongoose.Promise = global.Promise;

};