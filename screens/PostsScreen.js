import React, { useEffect, useContext } from 'react';
import { View } from 'react-native';
import { styles } from '../styles/theme';
import PostList from '../components/PostList';
import { getPosts } from '../api/post';
import PostPlaceholder from '../components/PostPlaceholder';
import { PostContext } from '../store/context/post-context';
import { POST_ACTION_TYPES } from '../store/reducers/post-reducers';
import Header from '../components/Header';
import { useTheme } from 'react-native-paper';

const PostsScreen = () => {
  const { state, dispatch } = useContext(PostContext);
  const { posts, page } = state;
  const { colors } = useTheme();

  useEffect(() => {
    dispatch({ type: POST_ACTION_TYPES.SET_LOADER_TOGGLE });
    getPosts(page).then((resp) => {
      dispatch({ type: POST_ACTION_TYPES.LOAD_POSTS, posts: resp.data });
      dispatch({ type: POST_ACTION_TYPES.SET_LOADER_TOGGLE });
    });
  }, [page]);

  return (
    <View
      style={{
        ...styles.container,
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
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

export default PostsScreen;
