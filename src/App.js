import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import {useState} from 'react'
import Instructions from './components/Instructions.js'
import SearchBox from './components/SearchBox.js'
import LocationContainer from './components/Location/LocationContainer.js'

function App() {
  // const [query, setQuery] = useState('8');
  const [query, setQuery] = useState(() => {
    return Math.floor(Math.random() * (108 - 1) + 1);
  });

  const handleSearchUniverse = (value) => (
    setQuery(value)
  )

  return (
    <div className="App">
      <div className="banner">
        <h1 className="title">Rick and Morthy App</h1>
        <Instructions />
        <SearchBox className="search" handleSearch={handleSearchUniverse} />
      </div>
      <div className="body">
        <LocationContainer query={query} />
      </div>
    </div>
  );
}

export default App;
