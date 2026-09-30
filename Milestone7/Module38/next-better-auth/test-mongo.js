const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.BETTER_AUTH_DB_URL);

async function test() {
  try {
    await client.connect();

    console.log("✅ MongoDB connected!");

    await client.db("better-auth-db").command({ ping: 1 });

    console.log("✅ MongoDB ping successful!");
  } catch (error) {
    console.error("❌ MongoDB error");
    console.error("Name:", error.name);
    console.error("Message:", error.message);
    console.error("Code:", error.code);
  } finally {
    await client.close();
  }
}

test();