import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';
import { FeedModule } from './modules/feed/feed.module';
import { ChatsModule } from './modules/chats/chats.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://admin:123456A@ds047958.mlab.com:47958/soc-net',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
    AuthModule,
    FeedModule,
    ChatsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
