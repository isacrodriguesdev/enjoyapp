import { MessageResponse } from "~/types";

type ActionReducer = { type: string, payload: any };

const initialState = {
  action: {},
  messages: [
    {
      type: "text",
      id: 0,
      content: "Oii, tudo bem?"
    },
    {
      type: "text",
      id: 1,
      content: "Oie, aqui é bem divertido hehe"
    },
    {
      type: "text",
      id: 0,
      content: "Vdd isso vai crescer um dia :)"
    },
    {
      type: "text",
      id: 0,
      content: "Vou usar um pacote de mensagens vai fica mais elegante"
    },
    {
      type: "image",
      id: 1,
      content: "Persistir sempre, desistir não esta em minhas opções",
      uri: "https://i.pinimg.com/originals/41/cb/eb/41cbeb1f39398395118b243c8dc12470.png"
    }
  ],
  error: null,
  loading: null
};

export default function reducer(state = initialState, action: ActionReducer) {

  switch (action.type) {
    case "chat/REQUEST_GETED_MESSAGES":
      return {
        ...state,
        loading: true,
        error: false
      };
    case "chat/SUCCESS_GETED_MESSAGES":
      return {
        ...state,
        messages: action.payload,
        error: false,
        loading: false
      };
    case "chat/ERROR_GETED_MESSAGES":
      return {
        ...state,
        error: action.payload.error,
        loading: false
      };
    case "chat/UPDATED_MESSAGES":
      return {
        ...state,
        messages: [...state.messages, action.payload],
        error: false,
        loading: false
      };
    case "chat/UNMOUNT_MESSAGES":
      return {
        ...state,
        messages: [],
        error: false,
        loading: false
      };
    default:
      return state;
  };
};

export function getMessages(userId: number) {
  return {
    type: "chat/REQUEST_GETED_MESSAGES",
    payload: { userId }
  };
};

export function updateMessages(message: MessageResponse) {
  return {
    type: "chat/UPDATED_MESSAGES",
    payload: message
  };
};

export function unmontMessages() {
  return {
    type: "chat/UNMOUNT_MESSAGES",
  };
};