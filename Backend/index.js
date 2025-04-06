const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");
const bcrypt=require('bcryptjs')
const User=require('./models/User')
const mongoose = require("mongoose");
const routes = require("./Routes/route");
const jwt = require("jsonwebtoken");
const verify = require("./authentication/verify");
const cookieParser = require("cookie-parser");

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

mongoose.connect(process.env.MONGO_URL).then(
    ()=>console.log("DB connected successfully...")
).catch(
    (err)=>console.log(err)
)

const allowedOrigins = [
    "http://localhost:3000",
    "http://localhost:5173",
    "https://example.com",
    "https://anotherdomain.com",
];


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({origins:allowedOrigins,credentials:true})); // Enable CORS for all routes
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.post('/register',async(req,res)=>{
    const {user,email, password}=req.body
    try{
        const hashPassword=await bcrypt.hash(password,10)
        const newUser=new User({user,email,password:hashPassword})
        await newUser.save()
        console.log("New user is registered successfully...")
        res.json({message:'User created....'})
    }
    catch(err)
    {
        console.log(err)
    }
});

app.post('/login',async(req,res)=>{
    const {email,password}=req.body
    try{
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) 
            {
             return res.status(400).json({ message: "Invalid Credentials" });
            }
            const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
            req.user_id = user._id;
            console.log("This is the user id :",req.user_id);
            res.header('Authorization', `Bearer ${token}`).json({ token });
    }
    catch(err)
    {
        console.log(err)
    }
});

// app.use("/api/users",verify);
app.use("/api/users",verify,routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});