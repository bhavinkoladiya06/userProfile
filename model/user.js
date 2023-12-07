const mongoose=require('mongoose')
const Schema=mongoose.Schema

const userSchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  Phone: {
    type: Number,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Age: {
    type: Number,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  Url: {
    type: String,
    required: true,
  }
});

const USER = mongoose.model("user", userSchema);

module.exports=USER