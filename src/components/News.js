import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // document.title = `${Capitalize(props.category)} - NewsBuddy`;
  // ♂
  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const newsApi = `https://newsapi.org/v2/everything?q=(${props.country}+${props.category})&sortBy=publishedAt&apiKey=${props.news_api}&page=${page}&pageSize=${props.pageItem}`;
    setLoading(true);
    let data = await fetch(newsApi);
    let parsedData = await data.json();
    console.log(parsedData);
    props.setProgress(70);

    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    updateNews();
  }, [updateNews]);

  // handlePrevClick = async () => {
  //   // console.log("previous");

  //   // let newsApi = `https://newsapi.org/v2/everything?q=(${props.country}+${
  //   //   props.category
  //   // })&sortBy=publishedAt&apiKey=b4e29624892b41b0ab30a25f00b5e76f&pageSize=${
  //   //   props.pageItem
  //   // }&page=${page - 1}`;
  //   // setState({ loading: true });
  //   // let data = await fetch(newsApi);
  //   // let parsedData = await data.json();

  //   // setState({
  //   //   page: page - 1,
  //   //   articles: parsedData.articles,
  //   //   loading: false,
  //   // });
  //   setState({ page: page - 1 });
  //   updateNews();
  // };

  // handleNextClick = async () => {
  //   // console.log("next");

  //   // if (
  //   //   !(
  //   //     page + 1 >
  //   //     Math.ceil(totalResults / props.pageItem)
  //   //   )
  //   // ) {
  //   //   let newsApi = `https://newsapi.org/v2/everything?q=(${
  //   //     props.country
  //   //   }+${
  //   //     props.category
  //   //   })&sortBy=publishedAt&apiKey=b4e29624892b41b0ab30a25f00b5e76f&pageSize=${
  //   //     props.pageItem
  //   //   }&page=${page + 1}`;
  //   //   setState({ loading: true });
  //   //   let data = await fetch(newsApi);
  //   //   let parsedData = await data.json();
  //   //   setState({
  //   //     page: page + 1,
  //   //     articles: parsedData.articles,
  //   //     loading: false,
  //   //   });
  //   // }
  //   setState({ page: page + 1 });
  //   updateNews();
  // };

  const fetchMoreData = async () => {
    setPage(page + 1);

    props.setProgress(10);
    const newsApi = `https://newsapi.org/v2/everything?q=(${props.country}+${props.category})&sortBy=publishedAt&apiKey=b4e29624892b41b0ab30a25f00b5e76f&page=${page}&pageSize=${props.pageItem}`;

    let data = await fetch(newsApi);
    let parsedData = await data.json();
    console.log(parsedData);
    props.setProgress(70);

    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    props.setProgress(100);
  };

  return (
    <>
      <div className="container my-3">
        <h2
          className="container mb-3 text-center"
          style={{ marginTop: "90px" }}
        >
          NewsBuddy - Top {Capitalize(props.category)} Headlines
        </h2>
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={articles.length <= totalResults ? <Spinner /> : ""}
        >
          <div className="container">
            <div className="row mb-2">
              {articles
                ? articles.map((element) => {
                    return (
                      <div className="col-md-4" key={element.url}>
                        <NewsItem
                          title={element.title ? element.title : "no title"}
                          description={
                            element.description
                              ? element.description
                              : "no description"
                          }
                          urlToImage={element.urlToImage}
                          newsUrl={
                            element.url
                              ? element.url
                              : "https://fakeimg.pl/600x400"
                          }
                          dateTime={
                            element.publishedAt
                              ? element.publishedAt
                              : "unknown"
                          }
                          author={element.author ? element.author : "unknown"}
                          source={
                            element.source ? element.source.name : "unknown"
                          }
                        />
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        </InfiniteScroll>
      </div>
      {/* <div className="container d-flex justify-content-between">
            <button
              disabled={page <= 1 ? true : false}
              type="button"
              className="btn btn-dark btn-sm"
              style={{ width: "86px" }}
              onClick={handlePrevClick}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                page + 1 > Math.ceil(totalResults / 20)
                  ? true
                  : false
              }
              type="button"
              className="btn btn-dark btn-sm"
              style={{ width: "86px" }}
              onClick={handleNextClick}
            >
              Next &rarr;
            </button>
          </div> */}
    </>
  );
};

News.defaulProps = {
  country: "nepal",
  pageSize: 8,
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
