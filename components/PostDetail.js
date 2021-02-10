import React from 'react';
import { View, ScrollView } from 'react-native';
import { Card, Button, Text } from 'react-native-paper';
import { styles } from '../styles/theme';
import HTML from 'react-native-render-html';
import PostTagList from './PostTagList';
import PostHTMLView from './PostHTMLView';
import { parseISODateTime } from '../utils/helpers';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
            <Text>
              <Icon name="calendar" /> {parseISODateTime(post.date)}
            </Text>
            <PostHTMLView html={post.content.rendered} />
            {tags && <PostTagList tags={tags} />}
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

export default PostDetail;
