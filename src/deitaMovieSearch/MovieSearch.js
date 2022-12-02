import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import instance from "../app/axios";
import { IMG_API } from "../app/resquets";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ShareIcon from "@mui/icons-material/Share";
import { RatingStar } from "rating-star";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useAuth from "../hooks/useAuth";
import Overviews from "../deitaMovie.js/overviews/Overviews";
import { useState } from "react";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function MovieSearch() {
  const [value, setValue] = React.useState(0);
  const [movie, setMovie] = useState({});
  const params = useParams();
  const fectdata = `/movie/${params.id}?api_key=fe596ed106bd53f85c6dd5b61bf8279d&language=en-US`;

  useEffect(() => {
    const fecthData = async () => {
      const response = await instance.get(fectdata);
      setMovie(response.data);
    };
    fecthData();
  }, []);
  console.log();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="deita_container">
      <div key={movie.id}>
        <div
          style={{
            backgroundImage: `url(${
              IMG_API + movie.backdrop_path || movie.poster_path
            })`,
            width: "100%",
            height: "400px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            objectFit: "cover",
          }}
        >
          <div className="fadetop"></div>
          <Container maxWidth="lg">
            <div className="deita_main">
              <div className="deita_poster">
                <img src={IMG_API + movie.poster_path} alt="" />
              </div>
              <div className="deita_heding">
                <div>
                  <h4>{movie.release_date || movie.first_air_date}</h4>
                  <h1> {movie.title || movie.name}</h1>
                  <p>{movie.overview}</p>
                </div>
                <div className="main_icon">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "30px",
                    }}
                  >
                    <button className="icon_playarrowicon">
                      <PlayArrowIcon id="icon_play" />
                    </button>
                    <span>Watch The Trailer</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <button className="icon_playarrowicon">
                      <ShareIcon id="icon_share" />
                    </button>
                    <span>Share</span>
                  </div>
                </div>
                <div className="deita_rate">
                  <div className="vote_average">
                    <p>
                      <span className="voted">{movie.vote_average}</span>
                      /10 <span className="imdb">IMDb</span>
                    </p>
                  </div>
                  <div className="rate">
                    <span>Rated This Movie:</span>
                    <RatingStar
                      clickable
                      maxScore={10}
                      numberOfStar={10}
                      id="123"
                      rating={movie.vote_average}
                    />
                  </div>
                  <div className="add_heart">
                    <button className="add">
                      <AddIcon id="icon_add" />
                    </button>
                    <button className="heart">
                      <FavoriteIcon id="icon_heart" />
                    </button>
                  </div>
                </div>
                <div className="select">
                  <Box className="list_tabs">
                    <Box className="tabs_deita">
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="primary tabs example"
                        indicatorColor="primary"
                        textColor="inherit"
                      >
                        <Tab label="OverViews" {...a11yProps(0)} id="tabs" />
                        <Tab label="Item Two" {...a11yProps(1)} id="tabs" />
                        <Tab label="Item Three" {...a11yProps(2)} id="tabs" />
                        <Tab label="Item Three" {...a11yProps(3)} id="tabs" />
                      </Tabs>
                    </Box>
                    <TabPanel value={value} index={0}>
                      <Overviews movie={movie} />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                      <Overviews />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                      <Overviews />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                      <Overviews />
                    </TabPanel>
                  </Box>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default MovieSearch;
