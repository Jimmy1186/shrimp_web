const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.Promise = global.Promise;


const pondSchema = new Schema({
  DO:  Number,
  S: Number,
  TEMP:Number,
  ORP: Number,
  PH:Number,
  WL: Number,
  IO: Number,
  TIME:String
})

    module.exports =
    mongoose.models.pond_8 || mongoose.model('pond_8',pondSchema );

    module.exports =
    mongoose.models.pond_9 || mongoose.model('pond_9',pondSchema );

    module.exports =
    mongoose.models.pond_10 || mongoose.model('pond_10',pondSchema );

