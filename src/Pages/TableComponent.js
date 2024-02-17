import { useQuery } from "react-query";
import { getPeople } from "../api/get";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PLANETS } from "../Navigation/CONSTANTS";

export const TableComponent = () => {
  const [page, setPage] = useState(1);
  const [disableNextPage, setDisableNextPage] = useState(false);
  const navigate = useNavigate();

  const query = useQuery({
    queryKey: ["fetchData", page],
    queryFn: () => getPeople(page),
  });

  useEffect(() => {
    if (!query?.data?.data.next) {
      setDisableNextPage(true);
    } else {
      setDisableNextPage(false);
    }
  }, [query?.data?.data.next]);

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
        disabled={disableNextPage}
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
