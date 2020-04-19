import * as mongoose from 'mongoose';

export const PostSchema = new mongoose.Schema({
  title: String,
  text: String,
  userName: String,
  likes: [String],
  creationDate: String
});
