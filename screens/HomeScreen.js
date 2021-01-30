import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from '../styles/theme';
import PostList from '../components/PostList';
import { getPosts } from '../api/post';

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
          <Text>Ayrıntılar geliyor...</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
