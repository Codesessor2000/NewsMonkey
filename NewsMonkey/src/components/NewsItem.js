import React from 'react'

const formatDate = (isoDateString) => {
  const date = new Date(isoDateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{
            right: 0,
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute'
          }}>
            <span className="badge rounded-pill bg-danger">{source !== "unknown" ? source.name : "unknown"}
              <span className="visually-hidden">unread messages</span>
            </span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small>By {author} on {date ? formatDate(date) : "DD/MM/YYYY"}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
}

export default NewsItem
