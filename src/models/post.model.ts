import { Document } from 'mongoose';

export interface Post extends Document {
  title: string;
  text: string;
  userName: string;
  likes: string[];
  creationDate: string;
}
