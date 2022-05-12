import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import instance from "../app/axios";
import { API_KEY, IMG_API } from "../app/resquets";

function Search() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const useQuery = new URLSearchParams(location.search);
  let keyword = useQuery.get("keywords");
  const fetchUrl = `/search/multi?api_key=${API_KEY}&language=en-US&query=${keyword}&include_adult=false`;

  useEffect(() => {
    const fetchData = async () => {
      const response = await instance.get(fetchUrl);
      console.log(response);
      setMovies(response.data.results);
      return response;
    };
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="search_container">
      {movies && movies.length > 0 ? (
        <div className="search_movie">
          {movies.map((movie) => (
            <div className="item_search" key={movie.id}>
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
          <h1>Your Search for "{keyword}" did not have any matches</h1>
        </div>
      )}
    </div>
  );
}

export default Search;
