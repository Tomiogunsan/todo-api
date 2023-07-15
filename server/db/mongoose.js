const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const uri =
  "mongodb+srv://tomiafolayan:Eniolorunfe@cluster0.5ztnlcc.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri);

module.exports = {
    mongoose
}