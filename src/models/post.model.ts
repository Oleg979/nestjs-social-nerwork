import { Document } from 'mongoose';

export interface Post extends Document {
  title: string;
  text: string;
  username: string;
  likes: string[];
  creationDate: string;
}
