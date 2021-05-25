import React from 'react';
import { Button, Card, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import PostHTMLView from './PostHTMLView';
import HTML from 'react-native-render-html';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { parseISODateTime } from '../utils/helpers';
import PropTypes from 'prop-types';

const PostCard = ({ post }) => {
  const navigation = useNavigation();

  return (
    <Card style={{ marginBottom: 15 }}>
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
          {`   `}
          <Icon name="user" /> {post._embedded['author'][0].name}
        </Text>
        <PostHTMLView html={post.excerpt.rendered} />
      </Card.Content>
      <Card.Actions style={{ justifyContent: 'flex-end' }}>
        <Button
          onPress={() =>
            navigation.navigate('PostDetailScreen', { postId: post.id })
          }
          mode="contained"
        >
          Devamı
        </Button>
      </Card.Actions>
    </Card>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
    }),
    excerpt: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
    }),
    _embedded: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

export default PostCard;
