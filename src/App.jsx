import "./App.css";
import {  Movies  } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";


function App() {
  const { movies: mappedMovies} = useMovies();

  return (
    <div className='page'>

      <header>
        <h1>Buscador de películas</h1>
        <form className="form">
          <input placeholder="Avengers, Star Wars, etc..."></input>
          <button>Buscar</button>
        </form>
      </header>

      <main>
      <Movies movies={mappedMovies}/>
      </main>


    </div>
  );
}



export default App;
