import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/movieCard/MovieCard";
import NavBar from "../components/navbar/NavBar";
import { useLanguage } from "../context/language";

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const { language }: any = useLanguage();

  const getSearchMovies = async (url: string) => {
    await axios
      .get(url)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    let searchWithQueryUrl;
    if (language) {
      searchWithQueryUrl = `${searchUrl}?${apiKey}&query=${query}&language=pt-BR&region=BR`;
    } else {
      searchWithQueryUrl = `${searchUrl}?${apiKey}&query=${query}`;
    }

    console.log(searchWithQueryUrl);
    getSearchMovies(searchWithQueryUrl);
  }, [query]);

  const renderMoviesCard = () => {
    return movies.map((movie: any) => (
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
        <SubTitle>Resultados para: {query}</SubTitle>
        {movies.length > 0 ? renderMoviesCard() : <p>Carregando...</p>}
      </Body>
    </Container>
  );
};

const Container = styled.main`
  width: 100%;
  height: 100%;
`;

const Top = styled.div`
  width: 100%;
  height: 60px;

  background-color: #ccdbe4;
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

export default Search;
