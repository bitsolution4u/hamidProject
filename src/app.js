const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const routes = require('./allRoute');
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: true }));
dotenv.config();


mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
    console.log('Connected to MONGO');
});

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


// Handle All Routs
app.use(routes);
app.all("*",(req,res)=>{
    res.send('No Route Found')
})

module.exports=app
