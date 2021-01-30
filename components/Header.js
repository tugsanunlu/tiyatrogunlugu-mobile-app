import React from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from './Logo';
import { styles } from '../styles/theme';

const inlineStyles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
});

const Header = () => {
  return (
    <View
      style={{
        ...styles.container,
        ...inlineStyles.shadow,
        alignItems: 'center',
        paddingBottom: 10,
      }}
    >
      <Logo />
    </View>
  );
};

export default Header;
