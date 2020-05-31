import getRealm from "~/services/realm";
import socket from "~/services/socket";

interface Data {
  headers: {
    authorization: string | null;
  };
  user: {
    id: number;
    conn: string;
  };
  message: {
    type: "text" | "image";
    content: string;
    uri: string | null;
    to: number;
    from: number | null;
    sentAt: number;
  };
}

class Message {
  data: Data;

  constructor(data: any) {
    this.data = data;
  }

  public async send() {
    console.log(this.data)
    socket().emit("message", this.data)
  }

  // to -> para
  // from -> de
  public async getMessagesRealmDB(message: any) {
    const messages: object[] = [];

    const realm = await getRealm();
    const data = realm.objects("Chat");

    data.forEach((message) => {
      messages.push(message);
    });

    return messages;
  }

  public async syncMessagesRealmDB() {
    // sincronizar mensagens com o banco de dados
  }

  public saveMessageRealmDB(message: Message) {}
}

export default Message;
