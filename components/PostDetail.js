import React from 'react';
import { View, ScrollView } from 'react-native';
import { Card, Paragraph, Button } from 'react-native-paper';
import { styles } from '../styles/theme';

const PostDetail = ({ post, navigation }) => {
  return (
    <View style={{ ...styles.container, flex: 1 }}>
      <ScrollView>
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
      </ScrollView>
    </View>
  );
};

export default PostDetail;
