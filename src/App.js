import React from "react";
import { Route, Routes } from "react-router-dom";
import requets from "./app/resquets";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthContext";
import DeitaAction from "./deitaMovie.js/DeitaAction";
import DeitaComedy from "./deitaMovie.js/DeitaComedy";
import DeitaDocumentaires from "./deitaMovie.js/DeitaDocumentaires";
import DeitaHorror from "./deitaMovie.js/DeitaHorrror";
import DeitaNetflixOriginal from "./deitaMovie.js/DeitaNetflixOriginal";
import DeitaRomance from "./deitaMovie.js/DeitaRomance";
import DeitaTopRated from "./deitaMovie.js/DeitaTopRated";
import DeitaTrending from "./deitaMovie.js/DeitaTrending";
import Layouts from "./layouts/Layouts";
import LoginForm from "./pages/LoginForm";
import Search from "./search/Search";

function App() {
  return (
    <div className="container">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route path="/login" element={<LoginForm />} />
          </Route>
          <Route path="/search" element={<Search />} />
        </Routes>
        <Routes>
          <Route
            path="netFlix/:id"
            element={
              <DeitaNetflixOriginal fetchUrl={requets.fetchNetFlixOriginal} />
            }
          />
          <Route
            path="trending/:id"
            element={<DeitaTrending fetchUrl={requets.fetchTrending} />}
          />
          <Route
            path="toprated/:id"
            element={<DeitaTopRated fetchUrl={requets.fetchTopRated} />}
          />
          <Route
            path="action/:id"
            element={<DeitaAction fetchUrl={requets.fetchActionMovie} />}
          />
          <Route
            path="horror/:id"
            element={<DeitaHorror fetchUrl={requets.fetchHorrorMovie} />}
          />
          <Route
            path="comedy/:id"
            element={<DeitaComedy fetchUrl={requets.fetchComedyMovie} />}
          />
          <Route
            path="romance/:id"
            element={<DeitaRomance fetchUrl={requets.fetchRomanceMovie} />}
          />
          <Route
            path="documentaires/:id"
            element={
              <DeitaDocumentaires fetchUrl={requets.fetchDocumentaires} />
            }
          />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
