import './App.css';
import './css/main.css'
import Moviecard from './components/moviecard';
import Searchresult from './components/searchresults';



function App() {
  return (
    <body>
      <header>
        <h1 className="maintitle">Filmsøk</h1>
        <h5>SØK HER</h5>
        </header>
        <Moviecard />
    </body>
  );
}

export default App;
