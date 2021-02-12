import React, { useState } from 'react';
import { Drawer, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

const NavigationContent = ({ navigation }) => {
  const [active, setActive] = useState('PostsScreen');
  const handleNavigateChange = (screen, categoryId) => {
    navigation.navigate(screen, { categoryId });
    setActive(screen);
  };

  return (
    <Drawer.Section>
      <Title style={{ textAlign: 'center', marginTop: 30 }}>
        Tiyatro Günlüğü
      </Title>
      <Drawer.Item
        label="günlükler"
        icon={() => <Icon name="book-open" solid size={24} />}
        active={active === 'PostsScreen'}
        onPress={() => handleNavigateChange('PostsScreen')}
      />
      <Drawer.Item
        label="iletişim"
        icon={() => <Icon name="paper-plane" solid size={24} />}
        active={active === 'ContactScreen' || !active}
        onPress={() => handleNavigateChange('ContactScreen')}
      />
    </Drawer.Section>
  );
};

export default NavigationContent;
