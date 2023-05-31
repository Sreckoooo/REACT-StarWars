import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "../styles/Filmi.css";


const queryClient = new QueryClient();

function Filmi() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await axios.get("https://swapi.dev/api/films/");
        setFilms(response.data.results);
      } catch (error) {
        console.error("Error fetching films:", error);
      }
    };

    fetchFilms();
  }, []);

  const [tooltipFilm, setTooltipFilm] = useState(null);

  const handleFilmMouseEnter = (film) => {
    setTooltipFilm(film);
  };

  const handleFilmMouseLeave = () => {
    setTooltipFilm(null);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="filmi">
      <section className="filmsSection">
        <div className="filmsContainer">
          <h2 className="filmsHeading">Star Wars Filme</h2>
          <ul className="filmsList">
            {films.map((film) => (
              <li
                key={film.episode_id}
                className="filmItem"
                onMouseEnter={() => handleFilmMouseEnter(film)}
                onMouseLeave={handleFilmMouseLeave}
              >
                {film.title}
              </li>
            ))}
          </ul>
          {tooltipFilm && (
            <div className="filmTooltip">
              <h3 className="filmTooltipTitle">{tooltipFilm.title}</h3>
              <p className="filmTooltipDescription">{tooltipFilm.opening_crawl}</p>
            </div>
          )}
        </div>
      </section>
      </div>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}

export default Filmi;
