import React, { Fragment, useEffect, useState } from 'react';
import { getPostById } from '../api/post';
import { useNavigation } from '@react-navigation/native';
import PostDetail from '../components/PostDetail';
import PostPlaceholder from '../components/PostPlaceholder';
import Header from '../components/Header';

const PostScreen = ({ route }) => {
  const navigation = useNavigation();
  const { postId } = route.params;
  const [post, setPost] = useState();

  useEffect(() => {
    if (postId != post?.id) setPost();
    getPostById(postId).then((resp) => {
      setPost(resp.data);
    });
  }, [postId]);

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

export default PostScreen;
