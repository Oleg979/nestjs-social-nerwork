import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
  title: String,
  text: String,
  username: String,
  likes: [String],
  creationDate: String
});
