import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import JokeCard from "./JokeCard";
import { JokesContext } from "./JokesContext";
function Jokes() {
    const {jokes, setJokes} = useContext(JokesContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const { category } = useParams();


    useEffect(() => {
        loadJokes()
    }, [category]);

    const loadJokes = () => {
        setLoading(true);
        setError(null);
        fetch(`https://v2.jokeapi.dev/joke/${category || "Any"}?amount=5`)
            .then(res => res.json())
            .then(data => {
               setJokes(data.jokes || [data]);
               console.log(data.amount);
                setLoading(false);
            }

            ).catch(err => {
                setJokes("Failed to fetch joke. Please try again.");
                setLoading(false);
                setError(err.message);
            });
    }
    return (
        <div>
    
            {
                loading ? (<p>Loading...</p>) : 
                error? (<p className="text-red-500">{error}</p>):(<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {jokes.map((j, index)=>(
                        <JokeCard key={index} joke={j}/>
                    ))}
                </div>)
            }
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={loadJokes}
            >Get Joke</button>

        </div>

    )
}
export default Jokes;