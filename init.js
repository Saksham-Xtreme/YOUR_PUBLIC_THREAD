const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/desiWhatsapp");
}


let allChats = [
    {
        from: "me",
        to : "us",
        msg : "I am getting 60Lpa at my first job",
        created_at : new Date()
    },

    {
        from: "you",
        to : "them",
        msg : "Saksham is stelled in Diff country",
        created_at : new Date()
    },

    {
        from: "him",
        to : "her",
        msg : "I have buyed my own car and house",
        created_at : new Date()
    }
];

Chat.insertMany(allChats);