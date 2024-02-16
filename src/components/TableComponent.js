import { useQuery } from "react-query";
import { getPeople } from "../api/get";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Planets } from "./Planets";
import { PLANETS } from "../Navigation/CONSTANTS";

export const TableComponent = () => {
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const query = useQuery({
    queryKey: ["fetchData", page],
    queryFn: () => {
      return getPeople(page);
    },
  });

  if (query.isLoading) {
    return <div>Loading...</div>;
  }
  const loadNextPage = () => {
    setPage((old) => old + 1);
  };
  const loadPrevPage = () => {
    setPage((old) => {
      return Math.max(old - 1, 1);
    });
  };

  const navigateToPlanets = () => {
    navigate(PLANETS);
  };

  return (
    <div>
      <div>
        <span>
          <button
            onClick={() => {
              navigateToPlanets();
            }}
          >
            Go to planets
          </button>
        </span>
      </div>
      <ul>
        {query?.data?.data?.results.map((person) => {
          return (
            <li key={person.name}>{`${person.name} - ${person.height}`}</li>
          );
        })}
      </ul>
      <button
        disabled={page === 1}
        onClick={() => {
          loadPrevPage();
        }}
      >
        Previous page
      </button>
      <button
        onClick={() => {
          loadNextPage();
        }}
      >
        Next page
      </button>
      current page: {page}
    </div>
  );
};
