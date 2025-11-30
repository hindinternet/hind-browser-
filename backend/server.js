// HIND Browser Backend with Express
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("HIND Backend Running"));

app.listen(3000, () => console.log("Backend running on port 3000"));
   
