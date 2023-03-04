import styled from "styled-components";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../services/api";
import NavBar from "../components/navbar/NavBar";
import { useLanguage } from "../context/language";

const imageUrl = import.meta.env.VITE_IMG;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie]: any = useState(null);
  const { language }: any = useLanguage();

  const getMovie = async (url: string) => {
    await api
      .get(url)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formatCurrency = (number: number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  useEffect(() => {
    let movieUrl;

    if (language === true) {
      movieUrl = `${id}?${apiKey}&append_to_response=videos`;
    } else {
      movieUrl = `${id}?${apiKey}`;
    }
    getMovie(movieUrl);
  }, []);

  return (
    <Container>
      <Top>
        <NavBar />
      </Top>
      <Body>
        {movie ? (
          <Content>
            <img src={imageUrl + movie.poster_path} alt={movie.poster_path} />
            <div>
              <main>
                <h2>{movie.title}</h2>
                <span>
                  {" "}
                  <FaStar /> {movie.vote_average}
                </span>
              </main>
              <section>
                <h3>
                  <BsWallet2 /> Orçamento:{" "}
                </h3>
                <p>{formatCurrency(movie.budget)}</p>
              </section>
              <section>
                <h3>
                  <BsGraphUp /> Faturamento:{" "}
                </h3>
                <p>{formatCurrency(movie.revenue)}</p>
              </section>
              <section>
                <h3>
                  <BsHourglassSplit /> Duração:{" "}
                </h3>
                <p>{movie.runtime} minutos</p>
              </section>
              <section>
                <h3>
                  <BsFillFileEarmarkTextFill /> Descrição:{" "}
                </h3>
                <p>{movie.overview}</p>
              </section>
              <section>
                <h3>Lançamento:</h3>
                <p>{movie.release_date}</p>
              </section>
              <section>
                <h3>Gêneros:</h3>
                <section>
                  {movie &&
                    movie.genres.map((i: any) => (
                      <span key={i.id} className="genres">
                        {i.name}
                      </span>
                    ))}
                </section>
              </section>
              <section>
                <h3>Idioma Oficial:</h3>
                <p>{movie.original_language}</p>
              </section>
            </div>
          </Content>
        ) : (
          "carregando"
        )}
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
  margin: 0 auto;
`;

const Content = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 10px;

  main {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    span {
      text-align: center;
      color: gold;
      background-color: #000;
      border-radius: 50px;
      padding: 5px;
    }
  }

  div {
    width: 100%;
    height: 100%;
    flex-direction: column;
  }

  h2 {
    width: 100%;
    padding: 10px;
    font-size: 30px;
    font-weight: bold;
  }

  section {
    width: 100%;
    height: auto;
    padding: 10px;

    .genres {
      padding: 5px;
      border: 1px solid #000;
    }
  }

  h3 {
    width: 100%;
    padding: 5px;
    /* background-color: yellow; */
  }

  p {
    width: 100%;
    padding: 5px;
    /* background-color: aliceblue; */
  }

  @media (max-width: 830px) {
    display: block;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export default Movie;
