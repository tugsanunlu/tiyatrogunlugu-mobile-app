import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer-no-warnings';
import { NavigationContainer } from '@react-navigation/native';
import NavigationContent from './NavigationContent';
import HomeScreen from '../screens/HomeScreen';
import PlaysScreen from '../screens/PlaysScreen';
import ContactScreen from '../screens/ContactScreen';

const Drawer = createDrawerNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="ana sayfa"
        drawerContent={(props) => <NavigationContent {...props} />}
      >
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="PlaysScreen" component={PlaysScreen} />
        <Drawer.Screen name="ContactScreen" component={ContactScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
