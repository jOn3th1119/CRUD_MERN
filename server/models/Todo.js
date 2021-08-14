const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  text: {
    type: String
  }
})

module.exports = Todo = mongoose.model('todo', TodoSchema)