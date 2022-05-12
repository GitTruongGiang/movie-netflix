import React, { useEffect, useRef, useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Link, useNavigate } from "react-router-dom";
import instance from "../../app/axios";
import silderMovie from "../../sliderMovie/sliderMovie";
import { IMG_API } from "../../app/resquets";
import { useViewPort } from "../../hooks/useViewPort";
import StarRateIcon from "@mui/icons-material/StarRate";

function ContentComedy({ fetchUrl, title }) {
  const [windowWidth] = useViewPort();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();
  const hanleSrollyRight = () => {
    const scrollyWith = ref.current.scrollWidth;
    const clientWidth = ref.current.clientWidth;
    const scrollyLeft = scrollyWith - clientWidth;
    if (ref.current.scrollLeft < scrollyLeft) {
      silderMovie(ref.current, 250, clientWidth * 1, ref.current.scrollLeft);
    }
  };

  const hanleSrollyLeft = () => {
    const clientWidth = ref.current.clientWidth;
    if (ref.current.scrollLeft > 0) {
      silderMovie(ref.current, 250, -clientWidth * 1, ref.current.scrollLeft);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const requets = await instance.get(fetchUrl);
        setMovies(requets.data.results);
        return requets;
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="content_movie">
      <div className="nav_title">
        <h1>{title}</h1>
        <h3>
          View All <ChevronRightIcon />
        </h3>
      </div>
      <div
        className="list_movie"
        style={{
          gridTemplateColumns: `repeat(${movies.length}, ${
            windowWidth < 430
              ? "72px"
              : windowWidth < 830
              ? "152px"
              : windowWidth > 830
              ? "198px"
              : "198px"
          } )`,
        }}
        ref={ref}
      >
        {movies.map((movie) => (
          <Link
            to={`/comedy/${movie.id}`}
            key={movie.id}
            style={{ color: "white" }}
          >
            <div className="movie_item">
              <img src={IMG_API + movie.poster_path} alt="" />
              <div className="movie_rate">
                <StarRateIcon id="icon_star" />
                <span className="heading_rating">{movie.vote_average}</span>/10
              </div>
              <div className="bg_content"></div>
            </div>
          </Link>
        ))}
      </div>
      <div className="bgiconleft" onClick={hanleSrollyLeft}>
        <ChevronLeftIcon id="icon_left" sx={{ fontSize: "50px" }} />
      </div>
      <div className="bgiconright" onClick={hanleSrollyRight}>
        <ChevronRightIcon id="icon_right" sx={{ fontSize: "50px" }} />
      </div>
    </div>
  );
}

export default ContentComedy;
