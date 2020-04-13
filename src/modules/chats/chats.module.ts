import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ChatSchema } from 'src/schemas/chat.schema';
import { ChatService } from './services/chat.service';
import { ChatController } from './controllers/chat.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Chat', schema: ChatSchema }])],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatsModule {}
