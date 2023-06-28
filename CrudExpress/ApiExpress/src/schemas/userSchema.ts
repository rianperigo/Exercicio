import { Schema, model } from "mongoose";

const userSchema = new Schema({
  name: String,
  age: Number,
  email: String
}, {
  timestamps:true
})

export default model('User', userSchema)