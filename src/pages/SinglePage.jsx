import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SinglePage() {
    const [movies, setMovies] = useState([]);
    const { slug } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:3000/app/${slug}`).then((resp) => {
            setMovies(resp.data.data)
        });
    }, [slug])

    const movie = movies[0];
    const reviews = movies.reviews;
    console.log(movie, reviews)

    // Se movie è undefined o null, non tentare di accedere alle sue proprietà
    if (!movie) {
        return <p>Caricamento...</p>;  // O un messaggio di errore o caricamento
    }

    return (
        <>
            {/* SEARCH BAR */}
            <section>
                <form className="d-flex my-3" role="search">
                    <input className="p-2 me-2 rounded-4" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success rounded-4" type="submit">Search</button>
                </form>
            </section>

            {/* RESULTS */}
            <section>
                <div className="container">
                    <div id="movie">
                        <img src={`http://localhost:3000/movies_cover/${movie.image}` || "placeholder.jpg"} style={{ maxWidth: "30%"}} alt="" />
                        <h1>{movie.title}</h1>
                        <p>{movie.abstract}</p>
                        <span>Director: {movie.director}</span>
                        <br />
                        <span>Genre: {movie.genre}</span>
                        <br />
                        <span>Release year: {movie.release_year}</span>
                    </div>
                </div>
            </section>

            {/* REVIEWS */}
            <section>
                <div className="container">
                    <div id="reviews">
                        {reviews.map((curReview, index) => (
                            <div className="card my-2" key={index}>
                            <div className="card-body">
                                <h5 className="card-title">{curReview.name}</h5>
                                <span className="card-text">{curReview.text}</span>
                                <br />
                                <span>Vote: {curReview.vote}</span>                           
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default SinglePage;