import React, { Fragment, useEffect, useState, useCallback } from 'react';
import { getPostById } from '../api/post';
import { View } from 'react-native';
import PostDetail from '../components/PostDetail';
import PostPlaceholder from '../components/PostPlaceholder';
import Header from '../components/Header';
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';
import { styles } from '../styles/theme';

const PostDetailScreen = ({ route, navigation }) => {
  const { postId } = route.params;
  const [post, setPost] = useState();
  const { colors } = useTheme();

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
        <View
          style={{
            ...styles.container,
            flex: 1,
            backgroundColor: colors.background,
          }}
        >
          <PostPlaceholder />
        </View>
      )}
    </Fragment>
  );
};

export default PostDetailScreen;
