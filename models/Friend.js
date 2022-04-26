const { Schema, model } = require('mongoose');

const FriendSchema = new Schema ({
    
    friendId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    friendBody: {
        type: String,
        required: true,
        // 280 character maximum
        maxlength: 280
    },
    username: {
        // which user created this thought        
        type: String,
        required: true,
        ref: 'User'
    },
    email: {
        type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
      ref: 'User'
    }
}
);

module.exports = FriendSchema;