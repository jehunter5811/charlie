import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './PostListItem.css';

function PostListItem(props) {
  const pStyle = {
    marginTop: "10px"
  };
  return (
    <div>
      <div>
        <a href={props.post.name} target="_blank"><h3 className={styles['post-title']}>

            {props.post.title}

        </h3></a>
        <p className="hide"><FormattedMessage id="by" /> {props.post.name}</p>
        <p className={styles['post-desc']}>{props.post.content}</p>
        <p className="btn white text-black"><a href="#" onClick={props.onDelete}><FormattedMessage id="deletePost" /></a></p>
      </div>
    </div>
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostListItem;
