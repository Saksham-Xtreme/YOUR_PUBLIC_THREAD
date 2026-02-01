require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

async function main() {
    console.log("MONGO_URL exists:", !!process.env.MONGO_URL);

    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB connected");
}
main().catch(err => console.log(err));

// INDEX
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
});

// NEW
app.get("/chats/new", (req, res) => {
    res.render("new.ejs");
});

// CREATE
app.post("/chats", async (req, res) => {
    let { from, to, msg } = req.body;

    await Chat.create({
        from,
        to,
        msg,
        created_at: new Date()
    });

    res.redirect("/chats");
});

// EDIT FORM
app.get("/chats/:id/edit", async (req, res) => {
    let chat = await Chat.findById(req.params.id);
    if (!chat) return res.status(404).send("Chat not found");
    res.render("edit.ejs", { chat });
});

// UPDATE
app.put("/chats/:id", async (req, res) => {
    let { msg } = req.body;

    await Chat.findByIdAndUpdate(
        req.params.id,
        { msg },
        { runValidators: true }
    );

    res.redirect("/chats");
});

// DELETE
app.delete("/chats/:id", async (req, res) => {
    await Chat.findByIdAndDelete(req.params.id);
    res.redirect("/chats");
});

app.get("/", (req, res) => {
    res.send("Working well");
});

// ✅ PORT FIX
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
