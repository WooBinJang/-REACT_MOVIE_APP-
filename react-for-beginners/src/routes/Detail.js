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
          <div className={styles.movie_img}>
            <img src={movie.medium_cover_image} alt={movie.title}></img>
          </div>

          <div className={styles.movie_info}>
            <dl>
              <div className={styles.movie_info_detail}>
                <dt>Title</dt>
                <dd>{movie.title_long}</dd>
              </div>
              <div className={styles.movie_info_detail}>
                <dt>Runtime</dt>
                <dd>{movie.title_long}</dd>
              </div>
              <div className={styles.movie_info_detail}>
                <dt>language</dt>
                <dd>{movie.language}</dd>
              </div>
              <div className={styles.movie_info_detail}>
                <dt>Description</dt>
                <dd>{movie.description_full}</dd>
              </div>
              <div className={styles.movie_info_detail}>
                <dt>Rating</dt>
                <dd>{movie.rating}</dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </Container>
  );
}

export default Detail;
