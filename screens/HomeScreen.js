import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from '../styles/theme';
import PostList from '../components/PostList';
import { getPosts } from '../api/post';
import PostPlaceholder from '../components/PostPlaceholder';

const HomeScreen = () => {
  const [posts, setPosts] = useState();
  useEffect(() => {
    getPosts().then((resp) => {
      setPosts(resp.data);
    });
  }, []);

  return (
    <View style={{ ...styles.container, flex: 1 }}>
      <ScrollView>
        {posts ? (
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
