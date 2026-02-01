const mongoose = require("mongoose");
const Chat = require("./models/chat");
require("dotenv").config();

async function seed() {
  await mongoose.connect(process.env.MONGO_URL);

  await Chat.insertMany([
    { from: "Admin", to: "All", msg: "Welcome to PublicThread", created_at: new Date() },
    { from: "System", to: "Users", msg: "Post anonymously and freely", created_at: new Date() }
  ]);

  console.log("Database seeded");
  process.exit();
}

seed();
