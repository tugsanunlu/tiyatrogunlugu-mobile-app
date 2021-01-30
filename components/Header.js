import React from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from './Logo';
import { styles } from '../styles/theme';

const inlineStyles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});

const Header = () => {
  return (
    <View
      style={{
        ...styles.container,
        ...inlineStyles.shadow,
        alignItems: 'center',
      }}
    >
      <Logo />
    </View>
  );
};

export default Header;
