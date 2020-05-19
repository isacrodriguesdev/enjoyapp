export interface MessageRequest {
  from: number;
  type: "text" | "audio" | "video" | "image" | "location";
  content: string;
  sentAt: number;
}

export interface MessageResponse extends MessageRequest {
   _id: string;
   read: boolean;
}

export interface Chat {
  chatId: string;
  userId: number;
  name: string;
  photo: string;
  online?: boolean;
  conn?: string;
  messages: MessageResponse[];
}
