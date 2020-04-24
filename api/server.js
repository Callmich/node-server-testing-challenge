const express = require("express");

const DnD = require("../dnd/dndModel");

const server = express();

server.use(express.json());

server.get("/", (req, res) =>{
    res.status(200).json({ api: "running baaaayyybbbeeee"})
});

server.get("/dnd", (req, res) => {
  DnD.getAll()
    .then(dnd => {
        res.status(200).json(dnd)
    })
    .catch(error => {
        res.status(500).json(error)
    })
})

server.post("/dnd", (req, res) => {
    const dndClasses = req.body

    DnD.insert(dndClasses)
      .then(ids => {
          res.status(201).json({message: "Class Created!"})
      })
      .catch(error => {
          res.status(500).json({errorMessage: error.message})
      })
})


module.exports = server