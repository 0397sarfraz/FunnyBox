import { Link } from "react-router-dom";
import { useContext } from "react";
import { JokesContext } from "./JokesContext";
function Layout({ children }) {
    const { favoriteJokes } = useContext(JokesContext);

    return (
        <div className="min-h-screen flex flex-col">
            <nav className="bg-gray-800 p-4 flex justify-end space-x-4">
                <Link className="text-white font-bold hover:text-blue-400 transition" to="/">All Jokes</Link>
                <Link className="text-white font-bold hover:text-blue-400 transition" to="/jokes/Programming">Programming Jokes</Link>
                <Link className="text-white font-bold hover:text-blue-400 transition" to="/jokes/Miscellaneous">Miscellaneous Jokes</Link>
                <Link className="text-white font-bold hover:text-blue-400 transition" to="/jokes/Dark">Dark Jokes</Link>
                <Link className="text-white font-bold hover:text-blue-400 transition" to="/jokes/Pun">Pun Jokes</Link>  
                <Link className="text-white font-bold hover:text-blue-400 transition" to="/jokes/Spooky">Spooky Jokes</Link>
                <Link className="text-white font-bold hover:text-blue-400 transition" to="/jokes/Favorite">Favorite Jokes</Link>
            </nav>
            <main className="p-6 flex flex-grow">
                {children}
            </main>
            <h1>Total Jokes: {favoriteJokes.length}</h1>
            <footer className="bg-gray-800 p-4 text-center text-white">
                &copy; 2024 Joke App. All rights reserved.
            </footer>
        </div>
    )
}
export default Layout;