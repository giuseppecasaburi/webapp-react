import axios from "axios";
import { useEffect, useState } from "react";
import SinglePage from "./SinglePage";
import { Link } from "react-router-dom";

function MoviesCatagolPage() {

    // STATO PER I FILM
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/app").then((resp) => {
            setMovies(resp.data.data);
        })
    }, [])

    console.log(movies)
    console.log()
    return (
        <>
            <div className="container mt-4">
            <form className="d-flex my-3" role="search">
                <input className="p-2 me-2 rounded-4" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success rounded-4" type="submit">Search</button>
            </form>

            </div>

            <div className="row g-4">
                {movies.map((curMovie) => (
                    <div className="col-md-4" key={curMovie.id}>
                        <div className="card h-100">
                            <img src={`http://localhost:3000/movies_cover/${curMovie.image}` || "placeholder.jpg"} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{curMovie.title}</h5>
                                <p className="card-text">{curMovie.abstract}</p>
                                <br />
                                <span>Director: {curMovie.director}</span>
                                <br />
                                <span>Genre: {curMovie.genre}</span>
                                <br />
                                <span>Release year: {curMovie.release_year}</span>
                                <br />
                                <Link className="btn btn-primary my-2" to={`/detail-page/${curMovie.id}`}>Dettagli del film</Link>                            
                            </div>
                        </div>
                    </div>
                ))}


            </div>

        </>
    );
};

export default MoviesCatagolPage;