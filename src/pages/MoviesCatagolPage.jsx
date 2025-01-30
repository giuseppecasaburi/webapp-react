import axios from "axios";
import { useEffect, useState } from "react";

function MoviesCatagolPage() {

    // STATO PER I FILM
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/app").then((resp) => {
            setMovies(resp.data.data);

        })
    }, [])

    console.log(movies)
    return (
        <>
            <div className="container mt-4">
                <h1>Io sono catalogo dei film</h1>

            </div>

            <div className="row g-4">
                {movies.map((curMovie) => (
                    <div className="col-md-4" key={curMovie.id}>
                        <div className="card h-100">
                            <img src={curMovie.image || "placeholder.jpg"} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{curMovie.title}</h5>
                                <p className="card-text">{curMovie.abstract}</p>
                                <br />
                                <span>Director: {curMovie.director}</span>
                                <br />
                                <span>Genre: {curMovie.genre}</span>
                                <br />
                                <span>Release year: {curMovie.release_year}</span>
                            </div>
                        </div>
                    </div>
                ))}


            </div>

        </>
    );
};

export default MoviesCatagolPage;