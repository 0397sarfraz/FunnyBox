import {useContext} from "react";   
import { JokesContext } from "./JokesContext";
import JokeCard from "./JokeCard";
export default function Favorite() {

    const {favoriteJokes}=useContext(JokesContext);
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Favorite Jokes</h1>
            {favoriteJokes.length === 0 ? (
                <p className="text-gray-600">No favorite jokes yet.</p>
            ) : (
                favoriteJokes.map((jokes,index)=>(<JokeCard key={index} joke={jokes}/>))
            )}
        </div>
    );
}