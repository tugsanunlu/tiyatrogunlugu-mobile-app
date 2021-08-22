import React, { useContext } from 'react';
import { View, ScrollView } from 'react-native';
import { styles } from '../styles/theme';
import Header from '../components/Header';
import { useTheme } from 'react-native-paper';
import { POST_CATEGORIES, SCREENS } from '../utils/constants';
import PostCategory from '../components/PostCategory';
import { PostContext } from '../store/context/post-context';
import { POST_ACTION_TYPES } from '../store/reducers/post-reducers';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../store/context/app-context';
import { APP_ACTION_TYPES } from '../store/reducers/app-reducers';

const CategoriesScreen = () => {
  const { colors } = useTheme();
  const { dispatch } = useContext(PostContext);
  const { dispatch: dispatchApp } = useContext(AppContext);
  const navigation = useNavigation();

  const handleGetPostsByCategoryId = (categoryId) => {
    navigation.navigate(SCREENS.POSTS);
    dispatchApp({
      type: APP_ACTION_TYPES.SET_ACTIVE_MENU,
      activeMenu: SCREENS.POSTS,
    });
    dispatch({ type: POST_ACTION_TYPES.CLEAR_POSTS });
    dispatch({ type: POST_ACTION_TYPES.RESET_PAGE });
    dispatch({ type: POST_ACTION_TYPES.SET_CATEGORY, category: categoryId });
  };

  return (
    <View
      style={{
        ...styles.container,
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <Header />
      <ScrollView>
        {POST_CATEGORIES.map((category) => (
          <PostCategory
            key={category.id}
            category={category}
            pressHandler={handleGetPostsByCategoryId}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoriesScreen;
