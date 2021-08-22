import React from 'react';
import { Card } from 'react-native-paper';
import PropTypes from 'prop-types';

const PostCategory = ({ category, pressHandler }) => {
  return (
    <Card
      onPress={() => pressHandler(category.id)}
      style={{ marginBottom: 20 }}
    >
      <Card.Cover source={{ uri: category.featuredImage }} />
      <Card.Title title={category.title} />
    </Card>
  );
};

PostCategory.propTypes = {
  category: PropTypes.shape({
    title: PropTypes.string.isRequired,
    featuredImage: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

export default PostCategory;
