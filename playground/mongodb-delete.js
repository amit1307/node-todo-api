/**
 * Created by garga9 on 02/11/2017.
 */
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect', err);
    }

    //Remove one document with a given text
    db.collection('ToDo').deleteOne({text:'eat dinner'}).then((result) => {
        console.log(result)
    }, (err) => {
        console.log('Error in removing record', err);
    });

    //Find and remove with a given id
    db.collection('ToDo').findOneAndDelete({_id: new ObjectID('59f625a48b26fd4d0493a475')}).then((doc) => {
        console.log(doc);
    }, (err) => {
        console.log('Error in finding and deleting', err);
    });

});