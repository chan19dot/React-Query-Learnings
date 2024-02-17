import { useInfiniteQuery } from "react-query";
import { getPlanets } from "../api/get";

export const Planets = () => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery("fetchPlantes", getPlanets, {
      getNextPageParam: (lastPage) => lastPage.next,
    });
  const handleLoadMore = () => {
    console.log(data.pages);
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <>
      <strong>Infinite query example</strong>
      <ul>
        {data.pages.map((page) => {
          return page.results.map((planet) => {
            return <li key={planet.name}>{planet.name}</li>;
          });
        })}
      </ul>
      <button
        disabled={isFetchingNextPage || !hasNextPage}
        onClick={() => handleLoadMore()}
      >
        load more
      </button>
    </>
  );
};
