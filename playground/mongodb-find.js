const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to Connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

// db.collection('Todos').find({
//   _id : new ObjectID("5b1648b51c5a9c12cca7f8a7")
// }).toArray().then( (docs) => {
//   console.log('Todos');
//   console.log(JSON.stringify(docs, undefined, 2));
// }, (err) => {
//   console.log('Unable to fetch', err);
// });

// db.collection('Todos').find().count().then( (count) => {
//   console.log(`Todos count: ${count}`);
// },(err) => {
//    console.log('Unable to fetch', err);
// });

db.collection('Users').find({name: "Tausif Ahmed"}).toArray().then( (docs) => {
  console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
  console.log('Unable to fetch Data');
});

  db.close();
});
