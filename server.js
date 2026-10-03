const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());


const dbUrl = process.env.connectionUrl;
mongoose.connect(dbUrl)
.then(() => {
    console.log("Db Connection Established");
})

.catch((error)=>{
    console.log("Unable To Connect To Database", error);
})

app.get('/status', (req,res)=>{
    res.status(200).json({
        "status" : 200,
        "message" : "Server is Up : )" 
    })
})

const toDoSchema = new mongoose.Schema({
    title : {type : String,required : true},
    completed : {type : String, default : false},
    date : {type : Date, default : Date.now}
});

const Todo = mongoose.model('ToDo', toDoSchema);