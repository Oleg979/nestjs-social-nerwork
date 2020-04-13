import { Controller, Res, Get, Body, Post } from '@nestjs/common';
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
    await this.feedService.add(post);
    return res.json({ created: true });
  }
}
