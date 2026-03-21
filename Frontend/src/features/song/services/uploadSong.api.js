import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
})

export async function uploadSong({songFile, mood}) {
    const formData = new FormData();
    formData.append("song", songFile);
    formData.append("mood", mood);

    return api.post("/api/songs", formData);
}