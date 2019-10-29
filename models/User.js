const { Schema, model } = require('mongoose');

const MovieRef = {
    type: Schema.Types.ObjectId,
    ref: 'Movie'
}

const User = new Schema({
    token: String,
    ratings: [{
        movie: MovieRef,
        rating: Number
    }],
    rejects: [{
        movie: MovieRef
    }],
    saves: [{
        movie: MovieRef
    }]
});

module.exports = model('User', User);