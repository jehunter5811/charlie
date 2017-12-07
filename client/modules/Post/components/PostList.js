import React, { PropTypes } from 'react';

// Import Components
import PostListItem from './PostListItem/PostListItem';
import styles from './PostListItem/PostListItem.css';

function PostList(props) {
  return (
    <div className={styles["pubcontainer"]}>
      <h2 className="center-align">Publications</h2>
      {
        props.posts.map(post => (
          <PostListItem
            post={post}
            key={post.cuid}
            onDelete={() => props.handleDeletePost(post.cuid)}
          />
        ))
      }
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  })).isRequired,
  handleDeletePost: PropTypes.func.isRequired,
};

export default PostList;
