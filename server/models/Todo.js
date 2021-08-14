const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
  text: {
    type: String
  }
})

module.exports = mongoose.model('todo', TodoSchema)