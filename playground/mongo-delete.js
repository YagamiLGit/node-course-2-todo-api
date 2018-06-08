const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to Connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'To Eat'}).then( (result) => {
  //   console.log(result);
  // });
   // deleteOne
   // db.collection('Todos').deleteOne({text: 'To Eat'}).then( (result) => {
   //   console.log(result);
   // });
   // findOneAndDelete
   // db.collection('Todos').findOneAndDelete({_id: ObjectID("5b1648b51c5a9c12cca7f8a7")}).then( (result) => {
   //   console.log(JSON.stringify(result, undefined, 2));
   // }, (err) => {
   //   console.log("Couldn't Delete");
   // });
  // db.close();
});
