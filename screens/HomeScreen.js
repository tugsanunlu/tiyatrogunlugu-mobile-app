import React, { useEffect, useContext } from 'react';
import { View } from 'react-native';
import { styles } from '../styles/theme';
import PostList from '../components/PostList';
import { getPosts } from '../api/post';
import PostPlaceholder from '../components/PostPlaceholder';
import { PostContext } from '../store/post-context';
import { POST_ACTION_TYPES } from '../store/reducers';
import Header from '../components/Header';

const HomeScreen = () => {
  const { state, dispatch } = useContext(PostContext);
  const { posts, page } = state;

  useEffect(() => {
    dispatch({ type: POST_ACTION_TYPES.SET_LOADER_TOGGLE });

    getPosts(page).then((resp) => {
      dispatch({ type: POST_ACTION_TYPES.LOAD_POSTS, posts: resp.data });
      dispatch({ type: POST_ACTION_TYPES.SET_LOADER_TOGGLE });
    });
  }, [page]);

  return (
    <View style={{ ...styles.container, flex: 1 }}>
      <Header />
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
