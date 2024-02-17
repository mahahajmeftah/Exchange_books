import mongoose from 'mongoose'
import User from './user.model.js';

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: 'Title is required'
  },
  author: {
    type: String,
    trim: true,
    required: 'Author is required'
  },
  genre: {
    type: String,
    trim: true,
    required: 'Genre is required'
  },
  owner: {
    type: mongoose.Schema.ObjectId,
    ref: User
  },
  image: {
    data: Buffer,
    contentType: String
  },
  format: String,
  available: {
    type:Boolean,
    default: true
  },
  created: {
    type: Date,
    default: Date.now
  }
});

BookSchema.virtual('imageSrc').get(function () {
  if (this.image && this.image.data) {
    const base64 = this.image.data.toString('base64');
    return `data:${this.image.contentType};base64,${base64}`;
  }
});

// Ensure virtual fields are serialized
BookSchema.set('toJSON', { virtuals: true });

const Book = mongoose.model('Book', BookSchema);
export default Book;