const { ObjectId } = require("bson");
const { default: mongoose } = require("mongoose");

const reactionSchema = new Schema ({
    // create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query
    reactionId: {
        type: mongoose.Schema.Types.ObjectId,
        default: new ObjectId
    },
    reactionBody: {
        type: String,
        required: true,
        // 280 character maximum
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
})