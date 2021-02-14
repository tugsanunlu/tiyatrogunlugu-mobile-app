import React, { Fragment, useEffect, useState, useCallback } from 'react';
import { getPostById } from '../api/post';
import PostDetail from '../components/PostDetail';
import PostPlaceholder from '../components/PostPlaceholder';
import Header from '../components/Header';
import { useFocusEffect } from '@react-navigation/native';

const PostDetailScreen = ({ route, navigation }) => {
  const { postId } = route.params;
  const [post, setPost] = useState();

  useFocusEffect(
    useCallback(() => {
      getPostById(postId).then((resp) => {
        setPost(resp.data);
      });
      return () => setPost();
    }, [postId]),
  );

  return (
    <Fragment>
      <Header />
      {post ? (
        <PostDetail post={post} navigation={navigation} />
      ) : (
        <PostPlaceholder />
      )}
    </Fragment>
  );
};

export default PostDetailScreen;
