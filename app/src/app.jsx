import React from "react";

import "./styles/global.scss";
import PopularMoviesContainers from "App/src/presentation/containers/MovieTypeContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetailsContainer from "App/src/presentation/containers/MovieDetailsContainer";
import Layout from "App/src/presentation/containers/Layout";
import SearchContainer from "App/src/presentation/containers/SearchContainer";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/m/:id" element={<MovieDetailsContainer />} />
          <Route path="/search" element={<SearchContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

const Home = () => {
  return <PopularMoviesContainers />;
};

export default App;
