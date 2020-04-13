import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { PostSchema } from 'src/schemas/post.schema';
import { FeedController } from './controllers/feed.controller';
import { FeedService } from './services/feed.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }])],
  controllers: [FeedController],
  providers: [FeedService],
})
export class FeedModule {}
