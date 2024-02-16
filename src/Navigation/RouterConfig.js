import { Routes, Route } from "react-router-dom";
import { HOME, PLANETS } from "./CONSTANTS";
import { TableComponent } from "../components/TableComponent";
import { Planets } from "../components/Planets";
import {
  QueryClient,
  QueryClientProvider,
  ReactQueryDevtools,
} from "react-query";

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
