import * as mongoose from 'mongoose';

export const MessageSchema = new mongoose.Schema({
    from: String,
    to: String,
    text: String,
});
