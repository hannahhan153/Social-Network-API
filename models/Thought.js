const thoughtSchema = new Schema({
    // create a virtual called friendCount that retrieves the length of user's friends array field on query
    thoughtText: {
        type: String,
        required: true,
        // must be between 1 and 280 characters
    },
    createdAt: {
    type: Date,
    default: Date.now,
    // use a getter method to format the timestamp on query
    },
    username: {
        // which user created this thought
        type: String,
        required: true
    },
    reactions: {
        // array of nested documents created with reactionSchema
    }
})
  