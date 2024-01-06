import { createContext, useState } from "react";


export const FavoritesContext = createContext();


export const FavoritesContextProvider = ({ children }) => {
    
    //Global state
    const [favorites, setfavorites] = useState([]);

    return <FavoritesContext.Provider value={{ favorites, setfavorites }}>
        {children}
    </FavoritesContext.Provider>
    
}