  import {createContext, useState} from "react";
  export const JokesContext=createContext();
  export function JokesProvider({children}){

    const [jokes,setJokes]=useState([]);
    const [favoriteJokes,setFavoriteJokes]=useState([]);
    return(
    <JokesContext.Provider value={{jokes, setJokes, favoriteJokes, setFavoriteJokes}}>
   {children}
    </JokesContext.Provider>
    )
  }