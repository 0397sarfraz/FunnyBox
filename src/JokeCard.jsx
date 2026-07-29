import { CiHeart } from "react-icons/ci";
import { useContext, useState } from "react";
import { JokesContext } from "./JokesContext";
import { FaHeart } from "react-icons/fa6";
function JokeCard({joke}){
const {favoriteJokes, setFavoriteJokes} = useContext(JokesContext);



const isFavorite = favoriteJokes.find(fav => fav.id === joke.id);
const handleFavorite=()=>{

if(!isFavorite){
    setFavoriteJokes([...favoriteJokes, joke]); 
}
else{
    setFavoriteJokes(favoriteJokes.filter(fav=>fav.id!==joke.id));
    }
}
    return(
        <div className="border flex justify-between  border-gray-300 bg-white rounded-lg shadow-md p-4 my-2">

            {joke.type === "single" ? (
                <p className="text-gray-800 font-medium">{joke.joke}</p>
            ) : (
               <div>
                
                    <p className="text-gray-900 font-semibold">{joke.setup}</p>
                    <p className="text-gray-700 italic mt-2">{joke.delivery}</p>
                </div>
            )}

            {isFavorite ? (
                <FaHeart
                    onClick={handleFavorite}
                    size={24}
                    className="flex-shrink-0 text-pink-500 hover:scale-125 transition-transform duration-200 cursor-pointer ml-2"
                />
            ) : (
                <CiHeart
                    onClick={handleFavorite}
                    size={24}
                    className="flex-shrink-0 text-pink-500 hover:scale-125 transition-transform duration-200 cursor-pointer ml-2"
                />
            )}  
        </div>
    )
}

export default JokeCard;

