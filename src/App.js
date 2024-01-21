// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Aboutus from "./components/Aboutus";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const pageSize = 11;
  const news_api = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  const [bgMode, setBgMode] = useState("white");

  return (
    <>
      <Router>
        <NavBar bgMode={bgMode} />
        <LoadingBar
          color="#f11946"
          progress={progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                news_api={news_api}
                pageItem={pageSize}
                country="nepal"
                key="general"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                news_api={news_api}
                pageItem={pageSize}
                country="nepal"
                key="business"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                news_api={news_api}
                pageItem={pageSize}
                country="nepal"
                key="entertainment"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                news_api={news_api}
                pageItem={pageSize}
                country="nepal"
                key="general"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                news_api={news_api}
                pageItem={pageSize}
                country="nepal"
                key="health"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                news_api={news_api}
                pageItem={pageSize}
                country="nepal"
                key="science"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                news_api={news_api}
                pageItem={pageSize}
                country="nepal"
                key="sports"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                news_api={news_api}
                pageItem={pageSize}
                country="nepal"
                key="technology"
                category="technology"
              />
            }
          />
          <Route exact path="/aboutus" element={<Aboutus />} bgMode={bgMode} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
