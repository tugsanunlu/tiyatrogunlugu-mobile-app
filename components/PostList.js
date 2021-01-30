import React from 'react';
import { View } from 'react-native';
import PostCard from '../components/PostCard';

const PostList = ({ posts }) => {
  return (
    <View style={{ marginTop: 15 }}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </View>
  );
};

export default PostList;
