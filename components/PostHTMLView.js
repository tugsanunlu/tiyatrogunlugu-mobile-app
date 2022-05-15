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
          textAlign: 'justify',
        },
        a: {
          color: colors.text,
        },
        strong: {
          fontFamily: fonts.medium,
          fontWeight: 'normal',
        },
        h4: {
          color: colors.text,
          fontSize: 18,
        },
      }}
      classesStyles={{
        cta: {
          color: colors.text,
          marginVertical: 20,
          fontFamily: fonts.regular,
        },
        title: {
          fontSize: 18,
          color: colors.text,
          fontFamily: fonts.medium,
          fontWeight: 900,
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
