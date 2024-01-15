import React, { Component } from "react";
import "./newsitem.css";
// import logo512 from "../../public/logo512.png";

export class NewsItem extends Component {
  render() {
    let { title, description, urlToImage, newsUrl, author, dateTime, source } =
      this.props;
    return (
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="card my-3 mx-2"
          style={{
            width: "18rem",
          }}
        >
          <span
            className="badge rounded-pill bg-danger"
            style={{
              display: "flex",
              flexDirection: "row",
              right: 0,
              position: "absolute",
            }}
          >
            {source}
          </span>
          <img
            src={urlToImage ? urlToImage : "./logo512"}
            className="card-img-top"
            alt="..."
            style={{ width: "18rem", height: "160px" }}
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{
                height: "6rem",
                paddingTop: "12px",
                alignSelf: "center",
                fontSize: "20px",
                fontWeight: 700,
                fontFamily: "serif",
              }}
            >
              {title}
            </h5>
            <p
              className="card-text"
              style={{
                textAlign: "justify",
                fontFamily: "poppins",
                fontWeight: 300,
                letterSpacing: 0.25,
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              {description}
            </p>
            <p className="card-text">
              <small className="text-muted">
                By {author} on {new Date(dateTime).toUTCString()}
              </small>
            </p>
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
