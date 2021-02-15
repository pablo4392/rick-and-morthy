import 'bootstrap/dist/css/bootstrap.min.css';

const ResidentInfo = ({
    picture,
    name,
    status,
    origin,
    episodes,
}) => {

    return(
        <div className="card" style="width: 18rem;">
            <img src={picture} className="card-img-top" alt={name} />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p>Status: {status}</p>
                <p>Origin: {origin}</p>
                <p>Episode appearances: {episodes}</p>
            </div>
        </div>
    )
}

export default ResidentInfo