// hooks/useUploadSong.js
import { useContext } from "react";
import { UploadSongContext } from "../uploadSong.context";

export const useUploadSong = () => {
    const { uploadSong, loading, error, success } = useContext(UploadSongContext);

    return {
        uploadSong,
        loading,
        error,
        success
    };
};