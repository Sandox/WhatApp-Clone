export class Message {
  sender: string;
  imageUrl: string;
  message: string;
  date: string;
  readMessage: boolean;

  constructor(senderName?: string, imageUrl?: string, message?: string, date?: string, readMessage?: boolean) {
    this.sender = senderName;
    this.imageUrl = imageUrl;
    this.message = message;
    this.date = date;
    this.readMessage = readMessage;
  }

}
