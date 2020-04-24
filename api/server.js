const express = require("express");

const dnd = require("../dnd/dndModel");

const server = express();

server.use(express.json());

server.get("/", (req, res) =>{
    res.status(200).json({ api: "running baaaayyybbbeeee"})
});

server.get("/dnd", (req, res) => {

})




module.exports = server