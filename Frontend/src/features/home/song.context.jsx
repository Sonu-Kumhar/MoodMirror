import { createContext } from "react";
import { useState } from "react";

export const SongContext = createContext()

export const SongContextProvider = ({ children }) => {
    const [song, setSong] = useState({

        url: "https://ik.imagekit.io/sonukumhar/moodmirror/songs/Jhol__Raag.Fm__5V3jEzMEb.mp3",
        posterUrl: "https://ik.imagekit.io/sonukumhar/moodmirror/posters/Jhol__Raag.Fm__Qj7KCrkPHA.jpeg",
        title: "Jhol (Raag.Fm)",
        mood: "surprised",
    })


    const [loading, setLoading] = useState(false)

    return (
        <SongContext.Provider value={{ loading, setLoading, song, setSong }}>
            {children}
        </SongContext.Provider>
    )
}