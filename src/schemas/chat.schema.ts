import * as mongoose from 'mongoose';

export const ChatSchema = new mongoose.Schema({
  user1: String,
  user2: String,
  messages: [
    {
      from: String,
      to: String,
      text: String,
      createdAt: String
    },
  ],
});
