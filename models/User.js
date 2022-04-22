const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true

    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
          validator: function(v) {
              return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
          },
          required: [true, "email required"]
      }
    },
    thoughts: {
// array of _id values referencing the Thought model
    },
    friends: {
// array of _id values referencing the User model (self-reference)
    }
  });

