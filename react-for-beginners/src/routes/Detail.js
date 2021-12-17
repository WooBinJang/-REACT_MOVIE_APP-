import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movie);
  return (
    <div>
      {loading ? <strong>Loading~~</strong> : null}
      <img src={movie.medium_cover_image} alt={movie.title}></img>
      <h1>{movie.title_long}</h1>
      <p>{`Runtime : ${movie.runtime} min`}</p>
      <p>{`language : ${movie.language}`}</p>
      <p>{`Description : ${movie.description_full}`}</p>
      <p>{`Rating : ${movie.rating}`}</p>
    </div>
  );
}

export default Detail;
