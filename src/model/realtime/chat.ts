import { realtimeDB } from "firebaseConfig"

export function createMessage(
  user: string,
  email: string,
  photoURL: string,
  message: string
) {
  const chatId = new Date().getTime()
  realtimeDB.ref("chats/" + chatId).set({
    user: user,
    email: email,
    photoURL: photoURL,
    message: message,
    createAt: new Date().toLocaleString(),
  })
}

export function deleteMessage(chatId: string) {
  realtimeDB.ref("chats/" + chatId).remove()
}

export const messageDBRef = realtimeDB.ref("chats")
