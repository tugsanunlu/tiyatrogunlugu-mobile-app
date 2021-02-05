import React from 'react';
import { View } from 'react-native';
import PostCard from '../components/PostCard';
import PostPagination from '../components/PostPagination';

const PostList = ({ posts }) => {
  return (
    <View style={{ marginTop: 15 }}>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <PostPagination />
    </View>
  );
};

export default PostList;
