import { Message } from "./message.model";
import { Document, Mongoose } from 'mongoose';

export interface Chat extends Document {
    id: string;
    user1: string;
    user2: string;
    messages: Message[];
}
