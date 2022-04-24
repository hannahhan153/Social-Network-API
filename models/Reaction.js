const dateFormat = require('../utils/dateFormat');
const { Schema, model } = require("mongoose");

const ReactionSchema = new Schema ({
    
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
        get: createdAtVal => dateFormat(createdAtVal)
    },
    reactions: 
    [
        {
            type: Schema.Types.ObjectId,
            ref: "Reaction"
        }
    ]
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
ReactionSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction;