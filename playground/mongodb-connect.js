const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('unable to Connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');
// db.collection('Todos').insertOne({
//   text: 'Something to do',
//   completed: false
// }, (err, result) => {
//   if (err) {
//     return console.log('Unable to insert to do', err);
//   }
// console.log(JSON.stringify(result.ops,undefined,2));
//
// });

  // db.collection('Users').insertOne({
  //   name: 'Tausif Ahmed',
  //   age: 22,
  //   location: 'Kolkata'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert User', err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });






  db.close();
});
