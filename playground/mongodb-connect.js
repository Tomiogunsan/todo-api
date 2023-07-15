const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(
  "mongodb+srv://tomiafolayan:Eniolorunfe@cluster0.5ztnlcc.mongodb.net/?retryWrites=true&w=majority",
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");
    //  db.collection("Todos").insertOne(
    //    {
    //      text: "Something to do",
    //      completed: false,
    //    },
    //    (err, result) => {
    //      if (err) {
    //        return console.log("Unable to insert todo", err);
    //      }
    //       console.log(JSON.stringify(result.ops, undefined, 2));
    //    }
    //  );
    db.collection("User").insertOne(
      {
        name: "Tomi",
        age: 16,
        location: "abuja",
      },
      (err, result) => {
        if (err) {
          return console.log("Unable to insert todo", err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
      }
    );
    client.close();
  }
); 