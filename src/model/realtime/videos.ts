import { realtimeDB } from "firebaseConfig"
import { v4 as uuidv4 } from "uuid"

export function createMessage(
  songNameCN: string,
  songNameVN: string,
  singNameCN: string,
  singNameVN: string,
  image: string,
  url: string
) {
  const videoId = uuidv4()
  realtimeDB.ref("videos/" + videoId).set({
    songNameCN: songNameCN,
    songNameVN: songNameVN,
    singNameCN: singNameCN,
    singNameVN: singNameVN,
    image: image,
    url: url,
  })
}

export function deleteVideo(videoId: string) {
  realtimeDB.ref("videos/" + videoId).remove()
}

export const videosDBRef = realtimeDB.ref("videos")
