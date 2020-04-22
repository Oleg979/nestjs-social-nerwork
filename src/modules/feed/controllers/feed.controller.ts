import { Controller, Res, Get, Body, Post, Param } from '@nestjs/common';
import { FeedService } from '../services/feed.service';

@Controller('feed')
export class FeedController {
  constructor(private readonly feedService: FeedService) {}

  @Get()
  async getPosts(@Res() res) {
    const response = await this.feedService.getAll();
    return res.json(response);
  }

  @Post()
  async addPost(@Res() res, @Body() post) {
    if(!post.likes) {
      post.likes = [];
    }
    await this.feedService.add(post);
    return res.json({ created: true });
  }

  @Get(":postId")
  async getById(@Res() res, @Param("postId") postId) {
    const response = await this.feedService.getById(postId);
    return res.json(response);
  }

  @Get("like/:postId/:userId")
  async like(@Res() res, @Param("postId") postId, @Param("userId") userId) {
    const response = await this.feedService.like(postId, userId);
    return res.json(response);
  }

  @Get("delete/:postId")
  async deleteById(@Res() res, @Param("postId") postId) {
    const response = await this.feedService.deleteById(postId);
    return res.json(response);
  }
}
