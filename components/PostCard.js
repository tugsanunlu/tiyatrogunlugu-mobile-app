import React from 'react';
import { Button, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import HTML from 'react-native-render-html';

const PostCard = ({ post }) => {
  const navigation = useNavigation();

  return (
    <Card style={{ marginBottom: 15 }}>
      {post._embedded['wp:featuredmedia'] && (
        <Card.Cover
          source={{
            uri: post._embedded['wp:featuredmedia'][0].source_url,
          }}
        />
      )}
      <Card.Title title={post.title.rendered} />
      <Card.Content>
        <HTML source={{ html: post.excerpt.rendered }} />
      </Card.Content>
      <Card.Actions style={{ justifyContent: 'flex-end' }}>
        <Button
          onPress={() => navigation.navigate('PostScreen', { postId: post.id })}
          mode="contained"
        >
          Devamı
        </Button>
      </Card.Actions>
    </Card>
  );
};

export default PostCard;
