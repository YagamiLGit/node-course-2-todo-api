const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to Connect to MongoDB Server');
  }
  console.log('Connected to MongoDB Server');
//   db.collection('Todos').findOneAndUpdate({_id: new ObjectID("5b1a6fe6ec90afd8fe77e9ea")},
//   {
//     $set: {
//     completed: true
//   }
// }, {
//   returnOriginal: false
// }).then( (result) => {
//   console.log(result);
// });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5b1a7413ec90afd8fe77ea52")
  }, {
    $set: {
      name: "Tausif Ahmed"
    },
    $inc: {
      age: -1
    }
  }, {
    returnOriginal: false
  }).then( (result) => {
    console.log(result);
  });
  // db.close();
});
