import React from "react";
import GiphySearch from "./GiphySearch";
import ErrorBoundary from "./utils/ErrorBoundary";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <ErrorBoundary>
    <div style={styles}>
      <h1>Giphy Search</h1>
      <GiphySearch initialQuery="dog" />
    </div>
  </ErrorBoundary>
);

export default App;
