import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import SearchBox from './components/SearchBox.js'
import LocationContainer from './components/Location/LocationContainer.js'
import ResidentContainer from './components/Resident/ResidentContainer.js'

function App() {

  return (
    <div className="App">
      <div className="banner">
        <h1 className="title">Rick and Morthy App</h1>
        <SearchBox />
      </div>
      <div className="body">
        <LocationContainer />
      </div>
      <div className="container">
        <ResidentContainer />
      </div>
    </div>
  );
}

export default App;
