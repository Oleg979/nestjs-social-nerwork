import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from 'src/models/post.model';

@Injectable()
export class FeedService {
  constructor(@InjectModel('Post') private postModel: Model<Post>) {}

  async getAll(): Promise<Array<Post>> {
    return this.postModel.find({}).exec();
  }

  async add(post: Post): Promise<void> {
    await this.postModel.create(post);
  }

  async getById(postId: string): Promise<Post> {
    return this.postModel.findById(postId);
  }

  async deleteById(postId: string): Promise<Array<Post>> {
    await this.postModel.findByIdAndDelete(postId).exec();
    return this.getAll();
  }

  async like(postId: string, userId: string): Promise<Post> {
    const post = await this.getById(postId);
    if(post.likes.includes(userId)) {
      post.likes = post.likes.filter(like => like !== userId);
    } else {
      post.likes.push(userId);
    }
    return await post.save();
  }
}
