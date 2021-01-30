import React, { useState } from 'react';
import { Drawer } from 'react-native-paper';

const NavigationContent = ({ navigation }) => {
  const [active, setActive] = useState();
  const handleNavigateChange = (screen) => {
    navigation.navigate(screen);
    setActive(screen);
  };

  return (
    <Drawer.Section>
      <Drawer.Item
        label="ana sayfa"
        icon="home-outline"
        active={active === 'HomeScreen' || !active}
        onPress={() => handleNavigateChange('HomeScreen')}
      />
      <Drawer.Item
        label="izlediklerim"
        icon="drama-masks"
        active={active === 'PlaysScreen'}
        onPress={() => handleNavigateChange('PlaysScreen')}
      />
      <Drawer.Item
        label="iletişim"
        icon="email-outline"
        active={active === 'ContactScreen'}
        onPress={() => handleNavigateChange('ContactScreen')}
      />
    </Drawer.Section>
  );
};

export default NavigationContent;
