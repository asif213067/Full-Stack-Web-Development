import express from 'express';
import { MongoClient, ObjectId } from "mongodb";
import cors from 'cors';
import "dotenv/config";

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const client = new MongoClient(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.z7ejuv7.mongodb.net/`,
);

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

const connectedClient = await connectToMongoDB();
const db = connectedClient.db('simpleCrudDB');
const users = db.collection("users");

app.get('/', (req, res) => {
    res.send("Simple crud server is running..");
});

app.get('/users', async (req, res) => {
    const cursor = users.find({});
    const allUsers = await cursor.toArray();
    res.send(allUsers);
})

app.get('/users/:id', async (req, res) => {
  console.log('paramas from the server', req.params);

  const id = req.params.id;
  const quary = { _id: new ObjectId(id) };

  const result = await users.findOne(quary);

  res.send(result);
})

app.patch('/users/:id', async (req, res) => {
  const id = req.params.id;
  const updatedUser = req.body;

  console.log("Updating user with id:", id, "with data", updatedUser);

  const filter = { _id: new ObjectId(id) };
  const options = { upsert: true };

  const updateDoc = {
    $set: {
      name: updatedUser.name,
      email: updatedUser.email
    }
  }

  const result = await users.updateOne(filter, updateDoc, options);
  res.send(result);
})

app.delete('/users/:id', async (req, res) => {
  const id = req.params.id;
  const quary = { _id: new ObjectId(id) };

  const result = await users.deleteOne(quary);
  res.send(result);
})

app.post('/users', async (req, res) => {
  const newUser = req.body;

  console.log("Adding new user:", newUser);

  const result = await users.insertOne(newUser);
  res.send(result);
})



app.listen(port, () => {
  console.log(`Simple crud server is running on port: ${port}`);
});