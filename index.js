const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = process.env.PORT || 5500;

app.use(cors({
  origin:["https://kanban-client-psi.vercel.app/"],
  methods:["POST","GET"],
  credentials: true
}))
app.use(express.json());

const uri = "mongodb+srv://kanban:tanvir14@cluster0.sgjbv3e.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

app.get("/", async (req, res) => {
      // const result = await dataCollection.find({}).toArray()
      return res.send({name: "Tanvir"})
    }); 
// async function run() {
//   try {
//     await client.connect();
//     const dataCollection = await client.db("kanban").collection("data");

//     app.get("/", async (req, res) => {
//       // const result = await dataCollection.find({}).toArray()
//       return res.json({name: "Tanvir"})
//     });

//     app.post("/add", async (req, res) => {
//       const updateTask = await dataCollection.updateOne(
//         { "name": "To Do" },
//         {
//           $push: {
//           "items": req.body
//         }}
//       )
//       res.send(updateTask)
//     })

//     app.post("/update", async (req,res) => {
//       dataCollection.deleteMany({})
//       const result = await dataCollection.insertMany(req.body)
//       res.send(result)
//     })

//     app.put("/edititem", async (req, res) => {
//       const { groupId, itemId, name, desc } = req.body
//       const result = dataCollection.updateOne(
//         { "_id": groupId, "items.id": itemId },
//         {
//           $set: {
//             "items.$.name": name,
//             "items.$.desc": desc
//           }
//         }
//       )
//       res.send(result)
//     })

//     app.delete("/removeItem", async (req, res) => {
//       const {groupName, itemId } = req.body;
//       const deleteTask = await dataCollection.updateOne(
//         { "name":groupName},
//         {
//           $pull: {
//             "items": {
//               "id":itemId
//             }
//           }
//         }
//       )
//       res.send(deleteTask)
//     })


//   } finally {
//   }
// }
// run().catch(console.dir);


app.listen(port)
