import React from 'react';
import HTML from 'react-native-render-html';
import { fonts } from '../styles/theme';

const PostHTMLView = ({ html }) => {
  return (
    <HTML source={{ html }} baseFontStyle={{ fontFamily: fonts.regular }} />
  );
};

export default PostHTMLView;
