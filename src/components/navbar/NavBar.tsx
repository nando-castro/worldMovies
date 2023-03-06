import styled from "styled-components";
import Input from "../input/Input";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import Button from "../button/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../../context/language";
import logo from "../../assets/img/tmdb.svg"

const NavBar = () => {
  const [search, setSearch] = useState("");
  const { language, setLanguage }: any = useLanguage();
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <Container>
      <h2>
        <img src={logo} alt="logo" />
        <Link to="/">
          <BiCameraMovie className="icon" />
          Mundo dos Filmes
        </Link>
      </h2>
      <main>
        <p
          onClick={(e: any) => setLanguage(true)}
          className={language ? "selected" : ""}
        >
          pt-BR
        </p>
        <p
          onClick={(e: any) => setLanguage(false)}
          className={language === false ? "selected" : ""}
        >
          en-US
        </p>
      </main>
      <Form>
        <Input
          width="100%"
          maxLength={50}
          type={"text"}
          placeholder={"Busque um filme"}
          name={"search"}
          value={search}
          onChange={(e: any) => setSearch(e.target.value)}
        />
        <Button
          type="submit"
          action={handleSubmit}
          text={<BiSearchAlt2 className="icon" />}
        />
      </Form>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: space-between;
  padding: 10px;

  .icon {
    font-size: 30px;
  }

  h2 {
    font-size: 30px;
    display: flex;

    img {
      width: 80px;
      margin-right: 10px;
    }
  }

  main {
    width: 150px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #000;
    cursor: pointer;
    color: #fff;
  }

  .selected {
    background-color: #00164e;
  }
`;

const Form = styled.div`
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default NavBar;
