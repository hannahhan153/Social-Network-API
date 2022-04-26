const { Schema, model } = require('mongoose');

const friendSchema = require('./Friend');

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
    friends: [friendSchema]
// array of _id values referencing the User model (self-reference)

  },
  {
      toJSON: {
          virtuals: true,
      },
      id: false
  }
  );

// get total count of thoughts on retrieval
UserSchema.virtual('thoughtCount').get(function() {
    return this.thoughts.reduce((total, thought) => total + thought.reactions.length + 1, 0);
})

// create a virtual called friendCount that retrieves the length of user's friends array field on query
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

const User = model('User', UserSchema);

module.exports = User;
