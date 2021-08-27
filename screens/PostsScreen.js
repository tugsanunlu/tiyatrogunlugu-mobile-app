import React, { useEffect, useContext } from 'react';
import { View } from 'react-native';
import { styles } from '../styles/theme';
import PostList from '../components/PostList';
import { getPosts, getPostsByCategoryId } from '../api/post';
import PostPlaceholder from '../components/PostPlaceholder';
import { PostContext } from '../store/context/post-context';
import { POST_ACTION_TYPES } from '../store/reducers/post-reducers';
import Header from '../components/Header';
import { useTheme, FAB } from 'react-native-paper';

const PostsScreen = () => {
  const {
    state: { posts, page, category },
    dispatch,
  } = useContext(PostContext);
  const { colors } = useTheme();

  const handleResetCategory = () => {
    dispatch({ type: POST_ACTION_TYPES.CLEAR_POSTS });
    dispatch({
      type: POST_ACTION_TYPES.SET_CATEGORY,
      category: null,
    });
  };

  useEffect(() => {
    dispatch({ type: POST_ACTION_TYPES.SET_LOADER_TOGGLE });

    const handleLoadPosts = (resp) => {
      dispatch({ type: POST_ACTION_TYPES.SET_LOADER_TOGGLE });
      dispatch({ type: POST_ACTION_TYPES.LOAD_POSTS, posts: resp.data });
    };
    const handleEmptyPosts = () => {
      dispatch({ type: POST_ACTION_TYPES.SET_LOADER_TOGGLE });
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
          {category && (
            <FAB
              small
              label="Kategori seçimini temizle"
              icon="delete"
              uppercase={false}
              style={{
                backgroundColor: colors.primary,
                position: 'absolute',
                margin: 15,
                left: 0,
                bottom: 0,
                zIndex: 2,
                borderRadius: 5,
              }}
              onPress={() => handleResetCategory()}
            />
          )}
          <PostList posts={posts} />
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
