import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer-no-warnings';
import { NavigationContainer } from '@react-navigation/native';
import NavigationContent from './NavigationContent';
import HomeScreen from '../screens/HomeScreen';
import PostScreen from '../screens/PostScreen';
import ContactScreen from '../screens/ContactScreen';

const Navigation = () => {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="ana sayfa"
        drawerContent={(props) => <NavigationContent {...props} />}
        drawerType="slide"
      >
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="PostScreen" component={PostScreen} />
        <Drawer.Screen name="ContactScreen" component={ContactScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
