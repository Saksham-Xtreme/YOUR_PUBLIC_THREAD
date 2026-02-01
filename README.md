# PUBLIC THREAD : https://publicthread.onrender.com/chats

MongoChat is a simple chat application built using Node.js, Express, MongoDB, and EJS. It allows users to create, read, update, and delete chat messages.

## Features

- **Create**: Add new chat messages.
- **Read**: View all chat messages.
- **Update**: Edit existing chat messages.
- **Delete**: Remove chat messages.

## Folder Structure

```
MongoChat/
├── models/
│   └── chat.js         # Mongoose schema for chat messages
├── public/             # Static assets (CSS, JS, images, etc.)
├── views/
│   ├── index.ejs       # Template for displaying all chats
│   ├── new.ejs         # Template for creating a new chat
│   └── edit.ejs        # Template for editing a chat
├── index.js            # Main server file
└── package.json        # Project dependencies and scripts
```

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Saksham-Xtreme/YOUR_PUBLIC_THREAD
   cd MongoChat
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the MongoDB server:
   ```bash
   mongod
   ```

4. Run the application:
   ```bash
   node index.js
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

## API Endpoints

- `GET /chats`: View all chats.
- `GET /chats/new`: Form to create a new chat.
- `POST /chats`: Add a new chat.
- `GET /chats/:id/edit`: Form to edit a chat.
- `PUT /chats/:id`: Update a chat.
- `DELETE /chats/:id`: Delete a chat.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Templating Engine**: EJS
- **Middleware**: Method-Override

## License

This project is licensed under the MIT License.
