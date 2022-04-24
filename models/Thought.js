const reactionSchema = require("./Reaction");

const thoughtSchema = new Schema({
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
    [reactionSchema]
    // array of nested documents created with reactionSchema
    
});

// create a virtual called friendCount that retrieves the length of user's friends array field on query
thoughtSchema.virtual('friendCount').get(function() {
    
})

const Thought = model('Thought', thoughtSchema);

module.exports = thoughtSchema