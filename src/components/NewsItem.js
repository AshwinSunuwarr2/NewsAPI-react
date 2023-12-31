import React, { Component } from "react";
// import logo512 from "../../public/logo512.png";

export class NewsItem extends Component {
  render() {
    let { title, description, urlToImage, newsUrl } = this.props;
    return (
      <div className="container ml-20">
        <div className="card my-3 mx-2" style={{ width: "18rem" }}>
          <img
            src={urlToImage ? urlToImage : "./logo512"}
            className="card-img-top"
            alt="..."
            style={{ width: "18rem", height: "160px" }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              href={newsUrl}
              rel="noreferrer"
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
