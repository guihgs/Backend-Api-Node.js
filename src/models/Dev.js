const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dsilikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],   
}, {
    timestamps: true,
});
//timestamps
//CreatedAt, updatedAt

module.exports = model('Dev', DevSchema);