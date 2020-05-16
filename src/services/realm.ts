import Realm, { ObjectSchema } from 'realm';

const MessageSchema: ObjectSchema = {
  name: 'Message',
  properties: {
    to: { type: 'int', optional: true },
    from: { type: 'int', optional: true },
    type: { type: 'string', optional: true },
    content: { type: 'string', optional: true },
    read: { type: 'bool', optional: true },
    sentAt: { type: 'date', optional: true },
  }
}

const ChatSchema: ObjectSchema = {
  name: 'Chat',
  properties: {
    users: { type: 'int[]', indexed: true },
    messages: { type: 'list', objectType: 'Message'}
  }
}

export default function getRealm() {
  return Realm.open({ schema: [ChatSchema, MessageSchema] });
}

export async function getMessagesRealmDB() {

  const messages: object[] = [];

  const realm = await getRealm();
  const data = realm.objects("Chat");

  data.forEach(message => {
     messages.push(message);
  });

  return messages;
}