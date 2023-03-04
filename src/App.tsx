import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResetCSS from "./assets/css/reset";
import GlobalStyle from "./assets/css/global";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";
import { LanguageProvider } from "./context/language";

function App() {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalStyle />
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<Movie />} />
          <Route path="search" element={<Search />} />
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
