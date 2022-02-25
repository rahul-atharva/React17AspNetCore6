import { Link } from "react-router-dom";

function IndexGenres() {
    return ( 
        <>
        <h3>
            Genres
            </h3>
            <Link className="btn btn-primary" to="/genres/create">Create</Link>
        </>
     );
}

export default IndexGenres
