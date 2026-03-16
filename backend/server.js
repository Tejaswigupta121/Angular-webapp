const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req,res)=>{
  res.send("Full Stack Application Running");
});

app.get("/api/message", (req,res)=>{
  res.json({message:"Full Stack Application Running"});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`);
});