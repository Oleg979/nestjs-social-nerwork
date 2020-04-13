import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
  title: String,
  text: String,
  userId: String,
  likes: Number
});
