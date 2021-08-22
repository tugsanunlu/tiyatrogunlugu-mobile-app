import React, { useContext } from 'react';
import { View, FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import PostCard from '../components/PostCard';
import { PostContext } from '../store/context/post-context';
import { POST_ACTION_TYPES } from '../store/reducers/post-reducers';
import PropTypes from 'prop-types';

const PostList = ({ posts, show404Snackbar }) => {
  const { state, dispatch } = useContext(PostContext);
  const { isLoader } = state;

  const handleMorePosts = () => {
    dispatch({ type: POST_ACTION_TYPES.INCREASE_PAGE });
  };

  return (
    <View style={{ flex: 1, marginTop: 15 }}>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostCard post={item} />}
        keyExtractor={(post) => post.id.toString()}
        onEndReached={!isLoader && handleMorePosts}
        onEndReachedThreshold={0.3}
        ListFooterComponent={() =>
          !show404Snackbar && (
            <ActivityIndicator size={35} style={{ marginVertical: 20 }} />
          )
        }
      />
    </View>
  );
};

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default PostList;
