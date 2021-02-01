import React, { useEffect, useState } from 'react';
import { getPostById } from '../api/post';
import { useNavigation } from '@react-navigation/native';
import PostDetail from '../components/PostDetail';
import PostPlaceholder from '../components/PostPlaceholder';

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

  return post ? (
    <PostDetail post={post} navigation={navigation} />
  ) : (
    <PostPlaceholder />
  );
};

export default PostScreen;
