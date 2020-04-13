import { Document } from 'mongoose';

export interface Message extends Document {
    from: string;
    to: string;
    text: string;
    createdAt: string;
}
