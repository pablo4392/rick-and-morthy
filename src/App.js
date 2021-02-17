import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import {useState} from 'react'
import SearchBox from './components/SearchBox.js'
import LocationContainer from './components/Location/LocationContainer.js'

function App() {
  const [query, setQuery] = useState('');

  const handleSearchUniverse = (value) => (
    setQuery(value)
  )

  return (
    <div className="App">
      <div className="banner">
        <h1 className="title">Rick and Morthy App</h1>
        <SearchBox handleSearch={handleSearchUniverse} />
      </div>
      <div className="body">
        <LocationContainer query={query} />
      </div>
    </div>
  );
}

export default App;
