/**
 * Created by garga9 on 02/11/2017.
 */
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to DB', err);
    }

    //Find one document and update it
    db.collection('Users').findOneAndUpdate(
        {name: 'John'},
        {$set : {location : 'USA'}},
        {returnOriginal : false}
    ).then((updatedDoc) => {
            console.log('Update one');
            console.log(updatedDoc);
        }, (err) => {
            console.log('Update failed', err)
        });

    //Update one document, please note this method will replace the complete object
    db.collection('Users').updateOne(
        {name : 'Amit'},
        {name : 'Amit Garg'}
    ).then((docs) => {
          console.log('Updated Users');
          console.log(docs);
    });

    db.close();
})