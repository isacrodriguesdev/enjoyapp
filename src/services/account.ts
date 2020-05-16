import decode from 'jwt-decode';
import AsyncStorage from "@react-native-community/async-storage";

export function getUserId() {
  // troque para ownerId
  return AsyncStorage.getItem("@userId");
}

export function getUserToken() {
  return AsyncStorage.getItem("@token");
}

export function getUserData(): Promise<object> {

  return new Promise((resolve, reject) => {

    AsyncStorage.getItem("@token")
      .then((token: any) => resolve(decode(token)))
  });
}