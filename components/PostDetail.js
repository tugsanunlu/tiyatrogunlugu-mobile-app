import React from 'react';
import { View, ScrollView } from 'react-native';
import { Card, Button } from 'react-native-paper';
import { styles, fonts } from '../styles/theme';
import HTML from 'react-native-render-html';
import PostTagList from './PostTagList';
import PostHTMLView from './PostHTMLView';

const PostDetail = ({ post, navigation }) => {
  const tags = post._embedded['wp:term'][1];

  return (
    <View style={{ ...styles.container, flex: 1 }}>
      <ScrollView>
        <Card style={{ marginBottom: 15 }}>
          <Button onPress={() => navigation.goBack()}>Geri dön</Button>
          {post._embedded['wp:featuredmedia'] && (
            <HTML
              source={{
                html: `<img src='${post._embedded['wp:featuredmedia'][0].source_url}' />`,
              }}
            />
          )}
          <Card.Title title={post.title.rendered} />
          <Card.Content>
            <PostHTMLView html={post.content.rendered} />
            {tags && <PostTagList tags={tags} />}
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

export default PostDetail;
