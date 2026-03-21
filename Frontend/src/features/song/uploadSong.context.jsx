// context/uploadSong.context.jsx
import { createContext, useState } from "react";
import { uploadSong as uploadSongAPI } from "./services/uploadSong.api";

export const UploadSongContext = createContext();

export const UploadSongProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const uploadSong = async ({ songFile, mood }) => {
        try {
            setLoading(true);
            setError(null);
            setSuccess(false);

            const res = await uploadSongAPI({ songFile, mood });

            setSuccess(true);
            return res.data;
        } catch (err) {
            setError(err.response?.data?.message || "Upload failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <UploadSongContext.Provider
            value={{
                uploadSong,
                loading,
                error,
                success
            }}
        >
            {children}
        </UploadSongContext.Provider>
    );
};