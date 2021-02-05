import React, { useEffect, useContext } from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from '../styles/theme';
import PostList from '../components/PostList';
import { getPosts } from '../api/post';
import PostPlaceholder from '../components/PostPlaceholder';
import { PostContext } from '../store/post-context';

const HomeScreen = () => {
  const { state, dispatch } = useContext(PostContext);
  const { posts, page } = state;

  useEffect(() => {
    getPosts(page).then((resp) => {
      dispatch({ type: 'ADD_POSTS', posts: resp.data });
    });
  }, [page]);

  return (
    <View style={{ ...styles.container, flex: 1 }}>
      <ScrollView>
        {posts.length ? (
          <PostList posts={posts} />
        ) : (
          Array.from({ length: 4 }).map((_, index) => (
            <PostPlaceholder key={index} />
          ))
        )}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
