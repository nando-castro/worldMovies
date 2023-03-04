import styled from "styled-components";
import NavBar from "../components/navbar/NavBar";

const Home = () => {
  return (
    <Container>
      <Top>
        <NavBar />
      </Top>
      <Body>
        Corpo
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
  background-color: red;
`;

const Body = styled.main`
  width: 100%;
  height: 100%;
`;

export default Home;
