import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import List from "./features/ListPage/List";
import Main from "./features/MainPage/Main";
import Error from "./features/ErrorPage/Error";
import { PATHS } from "../src/constants";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.SEARCH} element={<Main />} />
        <Route path={PATHS.LIST} element={<List />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
