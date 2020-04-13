import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Chat } from 'src/models/chat.model';
import { StartChatResponse } from 'src/models/start-chat-response';
import { Message } from 'src/models/message.model';
import { PostMessageResponse } from 'src/models/post-message-reponse.model';

@Injectable()
export class ChatService {
  constructor(@InjectModel('Chat') private chatModel: Model<Chat>) {}

  async getAllChats(): Promise<Array<Chat>> {
    return this.chatModel.find({}).exec();
  }

  async getChat(chatId: string): Promise<Chat> {
    return await this.chatModel.findById(chatId).exec();
  }

  async startChat(user1: string, user2: string): Promise<StartChatResponse> {
    const chat1 = await this.chatModel.findOne({user1, user2}).exec();
    const chat2 = await this.chatModel.findOne({user1: user2, user2: user1}).exec();
    const chatExisted = chat1 || chat2;
    if(chatExisted) {
       return {
           success: false,
           chatId: chatExisted.id
       }     
    } else {
        const createdChat = await this.chatModel.create({user1, user2, messages: []});
        return {
            success: true,
            chatId: createdChat.id
        }
    }
  }

  async postMessageToChat(chatId: string, message: Message): Promise<PostMessageResponse> {
    const chat = await this.getChat(chatId);
    chat.messages.push(message);
    const updatedChat = await chat.save();
    return {
        success: true,
        messages: updatedChat.messages
    }
  }
}
