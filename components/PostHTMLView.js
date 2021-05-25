import React from 'react';
import HTML from 'react-native-render-html';
import { fonts } from '../styles/theme';
import { useTheme } from 'react-native-paper';
import PropTypes from 'prop-types';

const PostHTMLView = ({ html }) => {
  const { colors } = useTheme();

  return (
    <HTML
      source={{ html }}
      baseFontStyle={{ fontFamily: fonts.regular, lineHeight: 24 }}
      tagsStyles={{
        p: {
          color: colors.text,
          marginVertical: 15,
        },
        a: {
          color: colors.text,
        },
      }}
      classesStyles={{
        cta: {
          color: colors.text,
          marginVertical: 20,
        },
      }}
      ignoredTags={['span']}
    />
  );
};

PostHTMLView.propTypes = {
  html: PropTypes.string.isRequired,
};

export default PostHTMLView;
