const { Schema, model } = require('mongoose');

const ReactionSchema = require('./Reaction');
const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        // must be between 1 and 280 characters
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
    type: Date,
    default: Date.now,
    // use a getter method to format the timestamp on query
    },
    username: {
        // which user created this thought        
        type: String,
        required: true,
        ref: 'User'
    },
    reactions: 
    [
        {
            type: Schema.Types.ObjectId,
            ref: "Reaction"
        }
    ],
    friends: [
        // array of _id values referencing the User model (self-reference)
               { type: Schema.Types.ObjectId,
                ref: "User" 
               }
        ]
    // array of nested documents created with reactionSchema
    
},

{
    toJSON: {
        virtuals: true,
    },
    id: false
}
);

// create a virtual called friendCount that retrieves the length of user's friends array field on query
ThoughtSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;