import { Message } from "./message.model";

export interface PostMessageResponse {
    success: boolean;
    messages: Message[];
}