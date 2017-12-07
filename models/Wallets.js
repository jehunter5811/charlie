const mongoose = require("mongoose");
const { Schema } = mongoose;

const walletsSchema = new Schema({
  publicKey: String,
  title: String,
  link: String,
  publicationName: String, 
  body: String,
  _user: { type: Schema.Types.ObjectId, ref: "User"},
  dateAdded: Date,
  dateUpdated: Date

});

mongoose.model("wallets", walletsSchema);
module.exports = walletsSchema;
