import React, { Fragment, useState, useContext } from 'react';
import { View } from 'react-native';
import { Drawer, Title, Switch } from 'react-native-paper';
import { AppContext } from '../store/context/app-context';
import { APP_ACTION_TYPES } from '../store/reducers/app-reducers';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import { SCREENS } from '../utils/constants';

const NavigationContent = ({ navigation }) => {
  const {
    state: { darkMode, activeMenu },
    dispatch,
  } = useContext(AppContext);
  const { colors } = useTheme();

  const handleNavigateChange = (screen, categoryId) => {
    navigation.navigate(screen, { categoryId });
    dispatch({ type: APP_ACTION_TYPES.SET_ACTIVE_MENU, activeMenu: screen });
  };

  const handleDarkModeToggle = () => {
    dispatch({ type: APP_ACTION_TYPES.TOGGLE_DARK_MODE });
  };

  return (
    <Fragment>
      <Drawer.Section
        style={{ backgroundColor: colors.background, height: '100%' }}
      >
        <Title style={{ textAlign: 'center', marginTop: 30 }}>
          Tiyatro Günlüğü
        </Title>
        <Drawer.Item
          label="günlükler"
          active={activeMenu === SCREENS.POSTS}
          onPress={() => handleNavigateChange(SCREENS.POSTS)}
        />
        <Drawer.Item
          label="kategoriler"
          active={activeMenu === SCREENS.CATEGORIES}
          onPress={() => handleNavigateChange(SCREENS.CATEGORIES)}
        />
        <Drawer.Item
          label="iletişim"
          active={activeMenu === SCREENS.CONTACT}
          onPress={() => handleNavigateChange(SCREENS.CONTACT)}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
          {darkMode ? (
            <Icon
              name="sun"
              size={20}
              color={colors.text}
              style={{ marginTop: 13 }}
            />
          ) : (
            <Icon
              name="moon"
              size={20}
              color={colors.text}
              style={{ marginTop: 13 }}
            />
          )}
          <Switch
            value={darkMode}
            onValueChange={handleDarkModeToggle}
            style={{ margin: 10 }}
            color={colors.primary}
          />
        </View>
      </Drawer.Section>
    </Fragment>
  );
};

NavigationContent.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default NavigationContent;
