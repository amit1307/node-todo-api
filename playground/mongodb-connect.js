/**
 * Created by garga9 on 29/10/2017.
 */
//Get mongo db client
const MongoDBClient = require('mongodb').MongoClient;

//Connect to mongo db's local instance, should be changed as per db config
MongoDBClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to DB.')
    }
    //Create a new collection (table) and insert a new document (row)
    db.collection('ToDo').insertOne({
        text:'Some text',
        completed:false
    }, (error, result) => {
        if(error) {
            return console.log('Unable to insert todo', error);
        }
        console.log(JSON.stringify(result.ops));
    });

    //Create a new collection (table) and insert a new document (row)
    db.collection('Users').insertOne({
        name:'Amit',
        age:32,
        location:'London'
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert user', err)
        }
        console.log(result.ops);
    });

    db.close();
});