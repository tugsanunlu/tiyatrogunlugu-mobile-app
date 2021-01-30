import React from 'react';
import { Drawer } from 'react-native-paper';

const NavigationContent = ({ navigation }) => {
  return (
    <Drawer.Section>
      <Drawer.Item
        label="ana sayfa"
        icon="home-outline"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      />
      <Drawer.Item
        label="izlediklerim"
        icon="drama-masks"
        onPress={() => {
          navigation.navigate('HomeScreen');
        }}
      />
      <Drawer.Item
        label="iletişim"
        icon="email-outline"
        onPress={() => {
          navigation.navigate('ContactScreen');
        }}
      />
    </Drawer.Section>
  );
};

export default NavigationContent;
