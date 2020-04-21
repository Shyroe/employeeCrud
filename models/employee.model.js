const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
    max: 100
  },
  email: {
    type: String,
    required: true
  },
  city: {
    type: String
  }
});

//Export model
//Entendendo a funciton model('nome que será utilizado para fazer referência a este modelo', schema referente ao modelo)
module.exports = mongoose.model("employee", employeeSchema);
