import React from 'react';
import { View } from 'react-native';
import { styles } from '../styles/theme';
import PostList from '../components/PostList';

const HomeScreen = () => {
  return (
    <View style={{ ...styles.container, flex: 1 }}>
      <PostList />
    </View>
  );
};

export default HomeScreen;
