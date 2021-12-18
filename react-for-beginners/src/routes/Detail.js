import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";
import styled from "styled-components";

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

  const Container = styled.div`
    background-image: url(${movie.background_image_original});
    background-size: cover;
    height: 100vh;
  `;
  console.log(movie);
  return (
    <Container>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div>
          <img
            className={styles.movie_img}
            src={movie.medium_cover_image}
            alt={movie.title}
          ></img>
          <div
            className={styles.movie_info}
          >{`Title : ${movie.title_long} `}</div>
          <div
            className={styles.movie_info}
          >{`Runtime : ${movie.runtime} min`}</div>
          <div
            className={styles.movie_info}
          >{`language : ${movie.language}`}</div>
          <div
            className={styles.movie_info}
          >{`Description : ${movie.description_full}`}</div>
          <div className={styles.movie_info}>{`Rating : ${movie.rating}`}</div>
        </div>
      )}
    </Container>
  );
}

export default Detail;
