import React from "react";

const NewsItem = (props) => {
  let { title, description, urlToImage, newsUrl, author, dateTime, source } =
    props;

  return (
    <div className="container">
      <div className="card my-3">
        <span
          className="badge rounded-pill bg-danger"
          style={{
            display: "flex",
            flexDirection: "row",
            right: "1%",
            position: "absolute",
          }}
        >
          {source}
        </span>
        <img
          src={
            !urlToImage
              ? "https://cdn.pixabay.com/photo/2014/08/07/21/13/newspaper-412811_1280.jpg"
              : urlToImage
          }
          alt="Not Accessable."
          className="card-img-top"
          style={{ height: "15rem", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
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
};

export default NewsItem;
