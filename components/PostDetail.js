import React from 'react';
import { View, ScrollView } from 'react-native';
import { Card, Button, Text } from 'react-native-paper';
import { styles } from '../styles/theme';
import HTML from 'react-native-render-html';
import PostTagList from './PostTagList';
import PostHTMLView from './PostHTMLView';
import { parseISODateTime } from '../utils/helpers';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from 'react-native-paper';
import PropTypes from 'prop-types';
import PostTitle from './PostTitle';

const PostDetail = ({ post, navigation }) => {
  const tags = post._embedded['wp:term'][1];
  const { colors } = useTheme();

  return (
    <View
      style={{
        ...styles.container,
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <ScrollView>
        <Card style={{ marginBottom: 15 }}>
          <Button
            icon={() => (
              <Icon name="arrow-left" size={20} color={colors.text} />
            )}
            onPress={() => navigation.goBack()}
            style={{ position: 'absolute', zIndex: 2, left: 5 }}
          ></Button>
          {post._embedded['wp:featuredmedia'] && (
            <HTML
              source={{
                html: `<img src='${post._embedded['wp:featuredmedia'][0].source_url}' />`,
              }}
            />
          )}
          <PostTitle title={post.title.rendered} />
          <Card.Content>
            <Text>
              <Icon name="calendar" /> {parseISODateTime(post.date)}
              {`   `}
              <Icon name="user" /> {post._embedded['author'][0].name}
            </Text>
            <PostHTMLView html={post.content.rendered} />
            {tags && <PostTagList tags={tags} />}
          </Card.Content>
        </Card>
      </ScrollView>
    </View>
  );
};

PostDetail.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
    }),
    content: PropTypes.shape({
      rendered: PropTypes.string.isRequired,
    }),
    _embedded: PropTypes.object.isRequired,
    date: PropTypes.string.isRequired,
  }),
  navigation: PropTypes.object.isRequired,
};

export default PostDetail;
