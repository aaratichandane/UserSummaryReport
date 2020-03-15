const Mongoose = require("mongoose"),
Types = Mongoose.Schema.Types;

const modelName = "Users";

//Users Model without any fixed schema
const UsersSchema = new Mongoose.Schema({},
  {strict:false }
);

module.exports = Mongoose.model(modelName, UsersSchema);