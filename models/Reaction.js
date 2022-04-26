const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

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
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
}
);

module.exports = ReactionSchema;