import React from 'react';
import { Button, Card, Paragraph } from 'react-native-paper';

const PostCard = ({ post }) => {
  return (
    <Card style={{ marginBottom: 15 }}>
      <Card.Cover
        source={{
          uri:
            'https://tiyatrogunlugu.com/wp-content/uploads/biz-iyi-insanlariz-tiyatro-oyunu-1.jpg',
        }}
      />
      <Card.Title title={post.title.rendered} />
      <Card.Content>
        <Paragraph>{post.excerpt.rendered}</Paragraph>
      </Card.Content>
      <Card.Actions style={{ justifyContent: 'flex-end' }}>
        <Button mode="contained">Devamı</Button>
      </Card.Actions>
    </Card>
  );
};

export default PostCard;
