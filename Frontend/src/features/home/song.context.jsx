import { createContext } from "react";
import { useState } from "react";

const SongContext = createContext()

export const SongContextProvider = ({children}) => {
    const [song, setSong] = useState({})


    const [loading, setLoading] = useState(false)

    return (
        <SongContext.Provider value={{loading, setLoading, song, setSong}}>
            {children}
        </SongContext.Provider>
    )
}