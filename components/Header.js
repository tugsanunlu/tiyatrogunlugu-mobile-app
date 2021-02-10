import React from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from './Logo';
import { styles } from '../styles/theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        ...styles.container,
        ...inlineStyles.shadow,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
      }}
    >
      <Icon
        name="bars"
        size={34}
        style={{ marginLeft: 20, marginTop: 30 }}
        onPress={() => navigation.openDrawer()}
      />
      <Logo />
    </View>
  );
};
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

export default Header;
