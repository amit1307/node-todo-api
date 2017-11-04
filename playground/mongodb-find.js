/**
 * Created by garga9 on 31/10/2017.
 */
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect to db', err);
    }

    //Find documents which are completed
    db.collection('ToDo').find({completed:true}).toArray().then((doc) => {
        console.log('ToDo');
        console.log(JSON.stringify(doc, undefined, 2));
    }, (err) => {
        console.log('Unable to read data from DB', err);
    });

    //Find Users where name is Amit
    db.collection('Users').find({name:'Amit'}).toArray().then((doc) => {
        console.log('Users with name as Amit');
        console.log(JSON.stringify(doc, undefined, 2))
    }, (err) => {
        console.log('Unable to find users', err);
    });

    //Count Users with age less than 40
    db.collection('Users').find({age:{$lt: 40}}).toArray().then((docs) => {
        console.log(`${docs.length} Users less than 40`);
        console.log(docs)
    }, (err) => {
       console.log('Error in filtering users', err);
    });

    //Count the Users with age less than 40 AND name is Amit
    db.collection('Users').find({age:{$lt:40}}, {name:'Amit'}).toArray().then((docs) => {
        console.log(`${docs.length} Users less than 40 with name Amit`);
        console.log(docs)
    }, (err) => {
        console.log('Error in filtering users', err)
    });

    //Count the Users with name as John OR location as London
    db.collection('Users').find(
        { $or : [{name:'John'}, {location:'London'}]}
    ).toArray().then((docs) => {
            console.log(`${docs.length} Users with name as John or location as London`);
            console.log(docs)
        }, (err) => {
            console.log('Error in filtering users', err);
        });

    //Aggregate and match usage
    db.collection('Users').aggregate([
        { $match: {name : 'Amit'}}
    ]).get().then((docs) => {
        console.log('Users with name Amit');
        console.log(docs);
    }, (err) => {
        console.log('Error in filtering users', err);
    })

});