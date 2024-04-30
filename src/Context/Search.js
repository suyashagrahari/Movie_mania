import { createContext, useState } from "react";


export const SearchContext = createContext();

export const SearchProvider = (props) =>{
    const [language ,setLanguage] = useState("");
    const [country,setCountry] = useState("");
    const [search,setSearch] = useState("");
    return(
        <SearchContext.Provider value={{language ,setLanguage,country,setCountry,search,setSearch}} >
            {props.children}
        </SearchContext.Provider>
    )
}