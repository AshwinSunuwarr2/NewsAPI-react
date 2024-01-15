// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Aboutus from "./components/Aboutus";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 11;

  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <>
        <Router>
          <NavBar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Routes>
            <Route exact path="/aboutus" element={<Aboutus />} />
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  pageItem={this.pageSize}
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
                  setProgress={this.setProgress}
                  pageItem={this.pageSize}
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
                  setProgress={this.setProgress}
                  pageItem={this.pageSize}
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
                  setProgress={this.setProgress}
                  pageItem={this.pageSize}
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
                  setProgress={this.setProgress}
                  pageItem={this.pageSize}
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
                  setProgress={this.setProgress}
                  pageItem={this.pageSize}
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
                  setProgress={this.setProgress}
                  pageItem={this.pageSize}
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
                  setProgress={this.setProgress}
                  pageItem={this.pageSize}
                  country="nepal"
                  key="technology"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </>
    );
  }
}
