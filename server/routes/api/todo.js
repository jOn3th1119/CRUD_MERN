const express = require("express");

const router = express.Router();
const Todo = require("../../models/Todo");

router.get('/', (req, res) => {
  Todo.find()
      .then(todo => res.json(todo))
      .catch((err) => res.status(400).json("Error: " + err));
})

router.post('/', (req, res) => {
  const newTodo = new Todo(req.body);
  newTodo
    .save()
    .then(todo => res.json(todo))
    .catch((err) => res.status(500).json("Error: " + err));
})

router.get('/:id', (req, res) => {
  Todo.findById(req.params.id)
      .then(todo => res.json(todo))
      .catch((err) => res.status(400).json("Error: " + err));
})

module.exports = router;