import mongoose from "mongoose";

// Defining Schema
const userSchema = new mongoose.Schema({

  
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    max: 20,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    trim: true,
    min: 6,
  },

  address: {
    type: String,
    default: "",
  },

  city: {
    type: String,
    default: "",
  },

  country: {
    type: String,
    default: "",
  },

  pinCode: {
    type: String,
    default: "",
  },

  phone: {
    type: String,
    default: "",
    minlength: 10,
    maxlength: 10,
  },

  profilePicture: {
    type: String,
    default: "",
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },

}, {timestamps:true});

// Model
const UserModel = mongoose.model("user", userSchema);

export default UserModel;






// note


// followers:{
//   type:Array,
//   default:[]
// },

// following:{
//   type:Array,
//   default:[]
// },


// coverPicture: {
//   type: String,
//   default: "",
// },

 // username: {
  //   type: String,
  //   required: true,
  //   min:3,
  //   max:10,
  //   unique:true
  // },


  // likes: {
  //   type: Array,
  //   default: [],
  // },

// email: {

  //   type: String,

  //   required: true,
  //   required: [true, "name is required"]

  //   unique: true,
  //   unique: [true, "email already taken"]

  //   trim: true,

  //   minlength: 6,
  //   minLength: [6, "email length should be greadter then 6 character"]

  //   default: 0,
  //   default: "",
  //   default: "user",
  //   default: true,
  //   default: false,

  //   enum: ["processing", "shipped", "deliverd"],
  //   default: "processing",

  //   min: 0,
  //   max: 255

  //   validate(value) {
  //     if (!validator.isEmail(value)) {
  //         throw Error("not valid email")
  //     }
  // }

  //   datecreated:Date,
  //   dateUpdated:Date
  //   dateCreated: {
  //     type: Date,
  //     default: Date.now,
  // },

  // },
