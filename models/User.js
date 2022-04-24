const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
      type: String,
      unique: true,
      required: 'Username is required',
      trim: true

    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    thoughts: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
    }
    ],
    friends: [
// array of _id values referencing the User model (self-reference)
       { type: Schema.Types.ObjectId,
        ref: "User" 
       }
]
  });

const User = module('User', UserSchema);

module.exports = User;
