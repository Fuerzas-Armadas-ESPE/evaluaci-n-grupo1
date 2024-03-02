const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  CodigoCurso: {
    type: String,
    required: true,
  },
  nombreCurso: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('cursos', userSchema);