const MongoClient = require('mongodb').MongoClient;


var connection = function dbBConnection(dbName, collectionName, operationMode, values, next) {

    if (arguments.length ===  4) {
        next = values;
        values = null; 
    }

    console.log(arguments); 

var connection = MongoClient.connect(`mongodb://localhost:27017/${dbName}`, (error, client) => {
    
    var db; 

    if(error) {
        throw err;
      /*   return console.log('Unable to connect to MongoDB server'); */
    }
    
    else {
    console.log('Connected to MongoDB server');
        db = client.db(`${dbName}`);
    }
    
    switch(operationMode){
        case 1:
        insert(values, db, collectionName);
     
        default:
        break;
    }

    closeDBConnection(client);

    next.apply(this, arguments);

    });


};

var insert = function(DTO, db, collectionName){

    db.collection(`${collectionName}`).insertOne(DTO, (error, result) => {

    if (error){
        return console.log("Unable to insert into MongoDB");
    }

    console.log("Following JSON object is written to the DB: " +
    JSON.stringify(result.ops, undefined, 2));

    });
}


var closeDBConnection = function closeDBConnection(client) {
    if (client){
        client.close();
        console.log("Connection to MongoDB was closed.");
    }
    else {
        console.log("Connection to MongoDB could not be closed.")
    }
}



module.exports.connection = connection;