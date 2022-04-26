const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = require('./Reaction');

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
    get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
        // which user created this thought        
        type: String,
        required: true,
        ref: 'User'
    },
    reactions: [reactionSchema]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
}
);

// create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query
ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})


const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;