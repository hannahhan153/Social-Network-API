
const { Schema, Types } = require("mongoose");

const reactionSchema = new Schema ({
    
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        // 280 character maximum
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // use a getter method to format the timestamp on query
    }
});

// create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query

const Reaction = model('Reaction', reactionSchema);

module.exports = reactionSchema;