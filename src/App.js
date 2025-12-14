
import './App.css';
import {useState} from "react";

function App() {
    const [title, setTitle] = useState('Wall-E');

    const movies = [
    {title: "Wall-E"},
    {title: "Pulp Fiction"},
    {title: "Matrix"},
    {title: "1670"},
];

    function handleChange(event) {
        setTitle(event.target.value);
    }

    let message; 
  if (title.length < 4) {
    message = "Sprawdź czy tytuł jest za krótki";
  }
    else if (title.length < 15) {
    message = "Tytuł jest super";
  }
  else {
    message = "Tytuł jest za długi, nikt go nie zapamięta"; 
  }



    return (
        <div>
            <h1>My favourite movies to watch</h1>
            <ul>
            {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
            </ul>
            <h2>My favourite movie for today is {title}</h2>
            <p>{message}</p>
            <input type="text" value={title} onChange={handleChange}/>
            <button type="button" onClick={() => alert(title)}>
    Pokaż tytuł filmu
</button>
        </div>
  );
}

export default App;
