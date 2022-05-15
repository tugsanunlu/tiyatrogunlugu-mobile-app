import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native-paper';
import { fonts } from '../styles/theme';
import { useTheme } from 'react-native-paper';
import { replaceApostrophe } from '../utils/helpers';

const PostTitle = ({ title }) => {
  const { colors } = useTheme();

  return (
    <Text
      style={{
        fontFamily: fonts.medium,
        color: colors.text,
        margin: 6,
        fontSize: 19,
        padding: 10,
      }}
    >
      {replaceApostrophe(title)}
    </Text>
  );
};

PostTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PostTitle;
