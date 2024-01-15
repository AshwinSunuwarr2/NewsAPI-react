import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaulProps = {
    country: "nepal",
    pageSize: 8,
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
  };

  Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  constructor(props) {
    super(props);
    console.log("constructor works");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };

    document.title = `${this.Capitalize(this.props.category)} - NewsBuddy`;
  }

  async updateNews(pageNo) {
    this.props.setProgress(10);
    const newsApi = `https://newsapi.org/v2/everything?q=(${this.props.country}+${this.props.category})&sortBy=publishedAt&apiKey=b4e29624892b41b0ab30a25f00b5e76f&page=${this.state.page}&pageSize=${this.props.pageItem}`;
    this.setState({ loading: true });
    let data = await fetch(newsApi);
    let parsedData = await data.json();
    console.log(parsedData);
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    let newsApi = `https://newsapi.org/v2/everything?q=(${this.props.country}+${this.props.category})&sortBy=publishedAt&apiKey=b4e29624892b41b0ab30a25f00b5e76f&page=1&pageSize=${this.props.pageItem}`;
    this.setState({ loading: true });
    let data = await fetch(newsApi);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrevClick = async () => {
    // console.log("previous");

    // let newsApi = `https://newsapi.org/v2/everything?q=(${this.props.country}+${
    //   this.props.category
    // })&sortBy=publishedAt&apiKey=b4e29624892b41b0ab30a25f00b5e76f&pageSize=${
    //   this.props.pageItem
    // }&page=${this.state.page - 1}`;
    // this.setState({ loading: true });
    // let data = await fetch(newsApi);
    // let parsedData = await data.json();

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading: false,
    // });
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    // console.log("next");

    // if (
    //   !(
    //     this.state.page + 1 >
    //     Math.ceil(this.state.totalResults / this.props.pageItem)
    //   )
    // ) {
    //   let newsApi = `https://newsapi.org/v2/everything?q=(${
    //     this.props.country
    //   }+${
    //     this.props.category
    //   })&sortBy=publishedAt&apiKey=b4e29624892b41b0ab30a25f00b5e76f&pageSize=${
    //     this.props.pageItem
    //   }&page=${this.state.page + 1}`;
    //   this.setState({ loading: true });
    //   let data = await fetch(newsApi);
    //   let parsedData = await data.json();
    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     loading: false,
    //   });
    // }
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="container mb-3 text-center">
          NewsBuddy - Top {this.state.category} Headlines
        </h2>
        {/* {this.state.loading && <Spinner />} */}
        <div className="row mb-2">
          {!this.state.loading && this.state.articles
            ? this.state.articles.map((element) => {
                return (
                  <div className="col-md-3" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title : "no title"}
                      description={
                        element.description
                          ? element.description
                          : "no description"
                      }
                      urlToImage={element.urlToImage}
                      newsUrl={
                        element.url ? element.url : "https://fakeimg.pl/600x400"
                      }
                      dateTime={
                        element.publishedAt ? element.publishedAt : "unknown"
                      }
                      author={element.author ? element.author : "unknown"}
                      source={element.source ? element.source.name : "unknown"}
                    />
                  </div>
                );
              })
            : ""}
          <div className="container d-flex justify-content-between">
            <button
              disabled={this.state.page <= 1 ? true : false}
              type="button"
              className="btn btn-dark btn-sm"
              style={{ width: "86px" }}
              onClick={this.handlePrevClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
                  ? true
                  : false
              }
              type="button"
              className="btn btn-dark btn-sm"
              style={{ width: "86px" }}
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}
