import React, { useEffect, useState } from 'react';
import { getPostById } from '../api/post';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native-paper';
import PostDetail from '../components/PostDetail';

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
    <Text>Ayrıntılar geliyor...</Text>
  );
};

export default PostScreen;
