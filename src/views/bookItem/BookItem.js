import React from 'react';
import { Link } from 'react-router';

import styles from './BookItem.css';

function BookItem(props) {
  const { _id, img, title, linkTo, author, description } = props;
  return(
    <article className={styles.article}>
      <figure className={styles.bookInfo}>
        <img src={img} />
        <figcaption>
          <a href={linkTo} target="_blank">
            <h2>"{title}"</h2>
          </a>
          <h3>{author}</h3>
          <p>{description}</p>
        </figcaption>
      </figure>
      <Link to={`/books/${_id}/${title}`}>
            <span>
              Детальніше...
            </span>
      </Link>
    </article>
  )
}

export default BookItem;
