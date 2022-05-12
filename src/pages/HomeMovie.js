import React from "react";
import requets from "../app/resquets";
import Content from "../components/contentMovie/ContentNetflix";
import ContentAction from "../components/contentMovie/ContentAction";
import ContentNetflix from "../components/contentMovie/ContentNetflix";
import ContentTopRated from "../components/contentMovie/ContentTopRated";
import ContentTrending from "../components/contentMovie/ContentTrending";
import ContentHorror from "../components/contentMovie/ContentHorror";
import ContentComedy from "../components/contentMovie/ContentComedy";
import ContentRomance from "../components/contentMovie/ContentRomance";
import ContentDocumentaires from "../components/contentMovie/ContentDocumentaires";
import { Container } from "@mui/material";

function HomeMovie() {
  return (
    <div className="home_movie">
      <Container maxWidth="lg">
        <ContentNetflix
          title="Netflix Original"
          fetchUrl={requets.fetchNetFlixOriginal}
        />
        <ContentTrending
          title="Trending Movies"
          fetchUrl={requets.fetchTrending}
        />
        <ContentTopRated
          title="Top Rated Movies"
          fetchUrl={requets.fetchTopRated}
        />
        <ContentAction
          title="Action Movies"
          fetchUrl={requets.fetchActionMovie}
        />
        <ContentHorror
          title="Horror Movies"
          fetchUrl={requets.fetchHorrorMovie}
        />
        <ContentComedy
          title="Comedy Movies"
          fetchUrl={requets.fetchComedyMovie}
        />
        <ContentRomance
          title="Romance Movie"
          fetchUrl={requets.fetchRomanceMovie}
        />
        <ContentDocumentaires
          title="Documentaries Movie"
          fetchUrl={requets.fetchDocumentaires}
        />
      </Container>
    </div>
  );
}

export default HomeMovie;
