const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000

app.get("/", (req, res) => {
    //return res.json({message: "Hey, I am nodejs"});
    res.send({message:"hello back to nodejs ."})
    })

app.listen(PORT, () => console.log(`Server listening at : ${PORT}!`));