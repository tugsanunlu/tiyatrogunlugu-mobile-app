import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Card, Text, Paragraph, Button } from 'react-native-paper';
import { styles } from '../styles/theme';
import { getPostById } from '../api/post';
import { useNavigation } from '@react-navigation/native';

const PostScreen = ({ route }) => {
  const navigation = useNavigation();
  const { postId } = route.params;
  const [post, setPost] = useState();

  useEffect(() => {
    setPost();
    getPostById(postId).then((resp) => {
      setPost(resp.data);
    });
  }, [postId]);

  return (
    <View style={{ ...styles.container, flex: 1 }}>
      <ScrollView>
        {post ? (
          <Card style={{ marginBottom: 15 }}>
            <Button onPress={() => navigation.goBack()}>Geri dön</Button>
            {post._embedded['wp:featuredmedia'] && (
              <Card.Cover
                source={{
                  uri: post._embedded['wp:featuredmedia'][0].source_url,
                }}
              />
            )}
            <Card.Title title={post.title.rendered} />
            <Card.Content>
              <Paragraph>{post.content.rendered}</Paragraph>
            </Card.Content>
          </Card>
        ) : (
          <Text>Ayrıntılar geliyor...</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default PostScreen;
