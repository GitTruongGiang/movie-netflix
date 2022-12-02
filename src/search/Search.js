import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import instance from "../app/axios";
import { API_KEY, IMG_API } from "../app/resquets";

function Search() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const searchQuery = searchParams.get("keywords");
  const fetchUrl = `/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&include_adult=false`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await instance.get(fetchUrl);
      await setMovies(response.data.results);
      return response;
    };
    fetchData();
  }, [fetchUrl]);

  const handleChange = async (movie) => {
    if (movie) {
      await navigate(`/movie/${movie.id}`);
    } else {
      await navigate("/");
    }
  };
  console.log(movies);
  return (
    <div className="search_container">
      {movies && movies.length > 0 ? (
        <div className="search_movie">
          {movies.map((movie) => (
            <div
              className="item_search"
              key={movie.id}
              onClick={() => handleChange(movie)}
            >
              <img
                src={
                  IMG_API +
                  (movie.poster_path ||
                    movie.backdrop_path ||
                    movie.profile_path)
                }
                alt=""
              />
              <span>{movie.title || movie.name}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="notfound">
          <h1>Your Search for "{searchQuery}" did not have any matches</h1>
        </div>
      )}
    </div>
  );
}

export default Search;
