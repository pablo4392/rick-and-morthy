import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBox = ({searchFunction}) => {
    return(
        <div className="input-group mb-1">
            <input className="form-control" placeholder="Write a location" />
            <button className="btn btn-outline-secondary" onClick={searchFunction}> Search </button>
        </div>
    )
}

export default SearchBox