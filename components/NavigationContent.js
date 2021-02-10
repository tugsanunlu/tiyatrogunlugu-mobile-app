import React, { useState } from 'react';
import { Drawer } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

const NavigationContent = ({ navigation }) => {
  const [active, setActive] = useState();
  const handleNavigateChange = (screen) => {
    navigation.navigate(screen);
    setActive(screen);
  };

  return (
    <Drawer.Section>
      <Drawer.Item
        label="son yazılar"
        icon={() => <Icon name="clock" solid size={24} style={{ width: 30 }} />}
        active={active === 'HomeScreen' || !active}
        onPress={() => handleNavigateChange('HomeScreen')}
      />
      <Drawer.Item
        label="izlediklerim"
        icon={() => (
          <Icon name="theater-masks" solid size={24} style={{ width: 30 }} />
        )}
        active={active === 'HomeScreen'}
        onPress={() => handleNavigateChange('HomeScreen')}
      />
      <Drawer.Item
        label="fuaye konuşmaları"
        icon={() => (
          <Icon name="comments" solid size={24} style={{ width: 30 }} />
        )}
        active={active === 'HomeScreen'}
        onPress={() => handleNavigateChange('HomeScreen')}
      />
      <Drawer.Item
        label="duyurduklarım"
        icon={() => (
          <Icon name="bullhorn" solid size={24} style={{ width: 30 }} />
        )}
        active={active === 'HomeScreen'}
        onPress={() => handleNavigateChange('HomeScreen')}
      />
      <Drawer.Item
        label="iletişim"
        icon={() => (
          <Icon name="envelope" solid size={24} style={{ width: 30 }} />
        )}
        active={active === 'ContactScreen'}
        onPress={() => handleNavigateChange('ContactScreen')}
      />
    </Drawer.Section>
  );
};

export default NavigationContent;
