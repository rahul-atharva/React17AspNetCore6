import { Link } from "react-router-dom";

function IndexMovieTheatres() {
    return ( 
        <>
        <h3>
        Movie Theatres
            </h3>
            <Link className="btn btn-primary" to="/movietheatres/create">Create</Link>
        </>
     );
}

export default IndexMovieTheatres
