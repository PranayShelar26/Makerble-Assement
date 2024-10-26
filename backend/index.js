const express = require("express");
const cors = require("cors");
const { ConnectMongoDB } = require("./connection.js");
const { default: mongoose } = require("mongoose");
const app = express();

app.use(express.json())
const corsOptions = {
    origin: 'http://localhost:5173', // Ensure no trailing slash
    optionsSuccessStatus: 200,
    methods: ['POST', 'GET', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  };
app.use(cors(corsOptions));


ConnectMongoDB("mongodb://127.0.0.1:27017/Makerble-assesment")
  .then(console.log("MongoDB Connected"))
  .catch((e) => console.log(e));

const UserSchema= mongoose.Schema({
    username: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    password: {
        type:String,
        required:true
    }
})

const User=mongoose.model('users',UserSchema)

app.post('/', async (req, res) => {
    const { username, email, password } = req.body; // Ensure req.body is correctly parsed

    if (!username || !email || !password) {
        return res.status(400).send('All fields are required.');
    }

    try {
        // Create a new user
        await User.create({ username, email, password });
        res.status(201).send('Thank You.');
    } catch (e) {
        res.status(500).send(e.message); // Return the error message
    }
});

app.post('/login', async (req, res) => {
    const { emailOrUsername, password } = req.body;

    if (!emailOrUsername || !password) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        // Check if user exists by email or username
        const user = await User.findOne({
            $or: [{ email: emailOrUsername }, { username: emailOrUsername }]
        });

        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        // Validate password
        if (user.password !== password) {
            return res.status(401).json({ message: 'Incorrect password.' });
        }

        // Success
        res.status(200).json({ message: 'Login successful!' });
    } catch (e) {
        res.status(500).json({ message: 'Server error, try again later.' });
    }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server Listen on Port ${PORT}`);
});

module.exports= app;