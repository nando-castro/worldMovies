import { useEffect, useState } from "react";
import styled from "styled-components";
import MovieCard from "../components/movieCard/MovieCard";
import NavBar from "../components/navbar/NavBar";
import { api } from "../services/api";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url: string) => {
    await api
      .get(url)
      .then((res) => {
        setTopMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const topRatedUrl = `top_rated?${apiKey}`;

    getTopRatedMovies(topRatedUrl);
  }, []);

  const renderMoviesCard = () => {
    return topMovies.map((movie: any) => (
      <Content key={movie.id}>
        <MovieCard key={movie.id} movie={movie} showLink />
      </Content>
    ));
  };

  return (
    <Container>
      <Top>
        <NavBar />
      </Top>
      <Body>
        <SubTitle>Melhores Filmes:</SubTitle>
        {topMovies.length > 0 ? renderMoviesCard() : <p>Carregando...</p>}
      </Body>
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
  height: 100vh;
`;

const Top = styled.div`
  width: 100%;
  height: 60px;

  background-color: #CCDBE4;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  margin: 0 auto;
`;

const SubTitle = styled.h2`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  color: gold;
`;

const Content = styled.div`
  width: 400px;
  max-height: 754px;

  margin: 2rem;
`;

export default Home;
