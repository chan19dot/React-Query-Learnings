import { Routes, Route } from "react-router-dom";
import { HOME, PLANETS } from "./CONSTANTS";
import { TableComponent } from "../Pages/TableComponent";
import { Planets } from "../Pages/Planets";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

export const RouterConfig = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route exact path={HOME} Component={TableComponent} />
          <Route exact path={PLANETS} Component={Planets} />
        </Routes>
      </QueryClientProvider>
    </>
  );
};
