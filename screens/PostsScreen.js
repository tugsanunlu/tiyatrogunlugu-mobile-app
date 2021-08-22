import React, { useEffect, useContext, useState } from 'react';
import { View } from 'react-native';
import { styles } from '../styles/theme';
import PostList from '../components/PostList';
import { getPosts, getPostsByCategoryId } from '../api/post';
import PostPlaceholder from '../components/PostPlaceholder';
import { PostContext } from '../store/context/post-context';
import { POST_ACTION_TYPES } from '../store/reducers/post-reducers';
import Header from '../components/Header';
import { useTheme, Snackbar } from 'react-native-paper';

const PostsScreen = () => {
  const {
    state: { posts, page, category },
    dispatch,
  } = useContext(PostContext);
  const { colors } = useTheme();
  const [show404Snackbar, setShow404Snackbar] = useState(false);

  useEffect(() => {
    dispatch({ type: POST_ACTION_TYPES.SET_LOADER_TOGGLE });

    const handleLoadPosts = (resp) => {
      dispatch({ type: POST_ACTION_TYPES.SET_LOADER_TOGGLE });
      dispatch({ type: POST_ACTION_TYPES.LOAD_POSTS, posts: resp.data });
      setShow404Snackbar(false);
    };
    const handleEmptyPosts = () => {
      dispatch({ type: POST_ACTION_TYPES.SET_LOADER_TOGGLE });
      setShow404Snackbar(true);
    };

    if (category) {
      getPostsByCategoryId({ page, categoryId: category })
        .then((resp) => {
          handleLoadPosts(resp);
        })
        .catch(() => handleEmptyPosts());
      return;
    }

    getPosts(page)
      .then((resp) => {
        handleLoadPosts(resp);
      })
      .catch(() => handleEmptyPosts());
  }, [page, category]);

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
        <React.Fragment>
          <PostList posts={posts} show404Snackbar={show404Snackbar} />
          <Snackbar visible={show404Snackbar} duration={2000}>
            Bu kategoride okunacak başka günlük kalmadı.
          </Snackbar>
        </React.Fragment>
      ) : (
        Array.from({ length: 4 }).map((_, index) => (
          <PostPlaceholder key={index} />
        ))
      )}
    </View>
  );
};

export default PostsScreen;
