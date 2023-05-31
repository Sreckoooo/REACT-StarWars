import React, { useState } from "react";
import axios from "axios";
import "../styles/Karakteri.css";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function About() {
  const [page, setPage] = useState(1);

  const { status, data, error, isFetching } = useQuery(
    ["characters", page],
    async () => {
      const response = await axios.get("https://swapi.dev/api/people", {
        params: { page },
      });
      return response.data;
    }
  );

  const handlePreviousPage = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="background-container">
      <div className="karakter">
        <h1>Karakteri</h1>
        {status === "loading" ? (
          "Sekunda..."
        ) : status === "error" ? (
          <span>Error: {error.message}</span>
        ) : (
          <>
            <div className="character-container">
              {data.results.map((character, index) => (
                <div key={index} className="character-card">
                  <h2 className="KarakterNaslov">{character.name}</h2>
                  <p>Višina: {character.height} cm</p>
                  <p>Teža: {character.mass} kg</p>
                  <p>Spol: {character.gender}</p>
                </div>
              ))}
            </div>
            <div className="pagination">
              <button
                onClick={handlePreviousPage}
                disabled={page === 1}
                className="pagination-button"
              >
                Prejšnja
              </button>
              <span className="page-info">Stran {page}</span>
              <button
                onClick={handleNextPage}
                disabled={!data.next}
                className="pagination-button"
              >
                Naslednja
              </button>
            </div>
          </>
        )}
        {isFetching }
      </div>
      </div>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default About;
