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
}
