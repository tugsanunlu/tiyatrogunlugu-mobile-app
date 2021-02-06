import React, { useEffect, useContext } from 'react';
import { View } from 'react-native';
import { styles } from '../styles/theme';
import PostList from '../components/PostList';
import { getPosts } from '../api/post';
import PostPlaceholder from '../components/PostPlaceholder';
import { PostContext } from '../store/post-context';
import { ACTION_TYPES } from '../store/reducers';

const HomeScreen = () => {
  const { state, dispatch } = useContext(PostContext);
  const { posts, page } = state;

  useEffect(() => {
    getPosts(page).then((resp) => {
      dispatch({ type: ACTION_TYPES.LOAD_POSTS, posts: resp.data });
    });
  }, [page]);

  return (
    <View style={{ ...styles.container, flex: 1 }}>
      {posts.length ? (
        <PostList posts={posts} />
      ) : (
        Array.from({ length: 4 }).map((_, index) => (
          <PostPlaceholder key={index} />
        ))
      )}
    </View>
  );
};

export default HomeScreen;
