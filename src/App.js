import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { RouterConfig } from "./Navigation/RouterConfig";

function App() {
  return (
    <BrowserRouter>
      <RouterConfig />
    </BrowserRouter>
  );
}

export default App;
