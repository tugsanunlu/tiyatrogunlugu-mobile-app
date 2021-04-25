import React, { Fragment, useState, useContext } from 'react';
import { View } from 'react-native';
import { Drawer, Title, Switch } from 'react-native-paper';
import { AppContext } from '../store/context/app-context';
import { APP_ACTION_TYPES } from '../store/reducers/app-reducers';
import { useTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';

const NavigationContent = ({ navigation }) => {
  const [active, setActive] = useState('PostsScreen');
  const { state, dispatch } = useContext(AppContext);
  const { darkMode } = state;
  const { colors } = useTheme();

  const handleNavigateChange = (screen, categoryId) => {
    navigation.navigate(screen, { categoryId });
    setActive(screen);
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
          active={active === 'PostsScreen'}
          onPress={() => handleNavigateChange('PostsScreen')}
        />
        <Drawer.Item
          label="iletişim"
          active={active === 'ContactScreen' || !active}
          onPress={() => handleNavigateChange('ContactScreen')}
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
