const express = require("express");
const notesRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");

dotenv.config();
app.use(express.json());

app.use(cors());

app.use("/users", userRouter);
app.use("/notes", notesRouter);

const PORT = process.env.PORT || 5000;


app.get("/", (req, res) =>{
    res.send("Welcome to Notes API");
});

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server started at port no " + PORT);
    });
})
.catch((error)=>{
    console.log(error);
});
