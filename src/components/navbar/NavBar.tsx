import styled from "styled-components";
import Input from "../input/Input";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <Container>
      <h2>
        <Link to="/">
          <BiCameraMovie className="icon" />
          Mundo dos Filmes
        </Link>
      </h2>
      <Form>
        <Input
          width="100%"
          // height="100%"
          maxLength={50}
          type={"text"}
          placeholder={"Busque um filme"}
          // value={movie}
          name={"movie"}
          // onChange={changeInput}
        />
        <Button type="submit" text={<BiSearchAlt2 className="icon" />} />
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
    font-size: 20px;
  }
`;

const Form = styled.div`
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default NavBar;
