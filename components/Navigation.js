import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer-no-warnings';
import { NavigationContainer } from '@react-navigation/native';
import NavigationContent from './NavigationContent';
import PostsScreen from '../screens/PostsScreen';
import PostDetailScreen from '../screens/PostDetailScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
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
        <Drawer.Screen name="PostsScreen" component={PostsScreen} />
        <Drawer.Screen name="PostDetailScreen" component={PostDetailScreen} />
        <Drawer.Screen name="CategoriesScreen" component={CategoriesScreen} />
        <Drawer.Screen name="ContactScreen" component={ContactScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
