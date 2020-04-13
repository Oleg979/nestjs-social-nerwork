import { Controller, Res, Get, Body, Post, Param } from '@nestjs/common';
import { ChatService } from '../services/chat.service';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Get()
  async getChats(@Res() res) {
    const response = await this.chatService.getAllChats();
    return res.json(response);
  }

  @Get(":chatId")
  async getChat(@Res() res, @Param("chatId") chatId) {
    const response = await this.chatService.getChat(chatId);
    return res.json(response);
  }

  @Get("start/:user1/:user2")
  async startChat(@Res() res, @Param("user1") user1, @Param("user2") user2) {
    const response = await this.chatService.startChat(user1, user2);
    return res.json(response);
  }

  @Post(":chatId")
  async postMessageToChat(@Res() res, @Param("chatId") chatId, @Body() message) {
    const response = await this.chatService.postMessageToChat(chatId, message);
    return res.json(response);
  }
}
