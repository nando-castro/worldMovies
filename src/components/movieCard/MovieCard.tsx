import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({
  movie,
  showLink = true,
}: {
  movie: any;
  showLink: boolean;
}) => {
  return (
    <Container>
      <Vote>
        <FaStar /> {movie.vote_average}
      </Vote>
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <Title>{movie.title}</Title>
      <Info>{showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}</Info>
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }
`;

const Title = styled.h2`
  height: 100px;
  font-size: 1.8rem;
  padding-top: 1rem;
  line-height: 1.8rem;
`;

const Info = styled.div`
  padding: 1rem;
  font-size: 25px;
  text-align: center;
  color: #000;
  border-radius: 50px 0 50px 0;
  background-color: gold;
  transition: 0.4s;
  cursor: pointer;
`;

const Vote = styled.span`
  position: absolute;
  margin-top: 5px;
  margin-left: 5px;
  z-index: 1;
  font-size: 30px;
  color: gold;
  border-radius: 10px;
  border: 1px solid #000;
  padding: 5px;
  background-color: #fff;
`;

export default MovieCard;
