import React from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from './Logo';
import { styles } from '../styles/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';

const Header = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <View
      style={{
        ...styles.container,
        ...inlineStyles.shadow,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
        backgroundColor: colors.background,
      }}
    >
      <Icon
        name="bars"
        size={36}
        style={{ marginLeft: 20, marginTop: 30 }}
        onPress={() => navigation.openDrawer()}
        color={colors.text}
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
