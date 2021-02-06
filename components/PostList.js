import React, { useContext } from 'react';
import { View, FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import PostCard from '../components/PostCard';
import { PostContext } from '../store/post-context';
import { ACTION_TYPES } from '../store/reducers';

const PostList = ({ posts }) => {
  const { dispatch } = useContext(PostContext);
  const handleMorePosts = () => {
    dispatch({ type: ACTION_TYPES.INCREASE_PAGE });
  };

  return (
    <View style={{ flex: 1, marginTop: 15 }}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostCard post={item} />}
        keyExtractor={(post) => post.id.toString()}
        onEndReached={handleMorePosts}
        onEndReachedThreshold={0.3}
        ListFooterComponent={() => (
          <ActivityIndicator size={35} style={{ marginVertical: 20 }} />
        )}
      />
    </View>
  );
};

export default PostList;
