import React, { CSSProperties } from "react";
import GiphySearch from "./GiphySearch";
import ErrorBoundary from "./utils/ErrorBoundary";
import { BrowserRouter, Route } from 'react-router-dom';

const styles : CSSProperties = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

const App = () => (
  <BrowserRouter>
    <ErrorBoundary>
        <Route path="/" component={GiphySearch} />
    </ErrorBoundary>
  </BrowserRouter>
);

export default App;
