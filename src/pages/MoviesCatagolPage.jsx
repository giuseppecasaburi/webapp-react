import axios from "axios";
import { useEffect, useState } from "react";
import SinglePage from "./SinglePage";
import { Link } from "react-router-dom";

function MoviesCatagolPage() {
    const genres = ["Science Fiction", "Crime", "Romance", "Action"]

    // STATO PER I FILM
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("");

    const getMovies = () => {
        const params = {};

        if (search.length > 0) {
            params.search = search;
        }

        if (selectedGenre !== "") {
            params.genre = genres[selectedGenre]
        }

        axios.get("http://localhost:3000/app", { params }).then((resp) => {
            setMovies(resp.data.data);
        })
    }

    useEffect(() => {
        getMovies()
    }, [selectedGenre])


    return (
        <>
            <section>
                <h2>Elenco di libri</h2>
                <div className="my-4 d-flex">
                    <input type="search" aria-label="Cerca libri per parola chiave" className="form-control" placeholder="Cerca libro" value={search} onChange={(event) => setSearch(event.target.value)} />
                    <button className="btn btn-primary ms-2" onClick={getMovies}>Cerca</button>
                </div>
            </section>

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
                                <Link className="btn btn-primary my-2" to={`/detail-page/${curMovie.slug}`}>Dettagli del film</Link>
                            </div>
                        </div>
                    </div>
                ))}


            </div>

        </>
    );
};

export default MoviesCatagolPage;