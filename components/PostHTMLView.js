import React from 'react';
import HTML from 'react-native-render-html';
import { fonts } from '../styles/theme';
import { useTheme } from 'react-native-paper';

const PostHTMLView = ({ html }) => {
  const { colors } = useTheme();

  return (
    <HTML
      source={{ html }}
      baseFontStyle={{ fontFamily: fonts.regular, color: colors.text }}
    />
  );
};

export default PostHTMLView;
