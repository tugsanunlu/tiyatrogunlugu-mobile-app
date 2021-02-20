import React, { Fragment, useState, useContext } from 'react';
import { Drawer, Title, Switch } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { AppContext } from '../store/context/app-context';
import { APP_ACTION_TYPES } from '../store/reducers/app-reducers';

const NavigationContent = ({ navigation }) => {
  const [active, setActive] = useState('PostsScreen');
  const { state, dispatch } = useContext(AppContext);
  const { darkMode } = state;

  const handleNavigateChange = (screen, categoryId) => {
    navigation.navigate(screen, { categoryId });
    setActive(screen);
  };

  const handleDarkModeToggle = () => {
    dispatch({ type: APP_ACTION_TYPES.TOGGLE_DARK_MODE });
  };

  return (
    <Fragment>
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
      <Switch value={darkMode} onValueChange={handleDarkModeToggle} />
    </Fragment>
  );
};
export default NavigationContent;
