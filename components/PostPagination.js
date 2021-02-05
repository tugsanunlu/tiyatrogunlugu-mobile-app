import React, { useContext } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { PostContext } from '../store/post-context';

const Pagination = () => {
  const { state, dispatch } = useContext(PostContext);
  const { page } = state;

  const handleMorePosts = () => {
    dispatch({ type: 'INCREMENT_PAGE' });
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: 25,
      }}
    >
      <Button mode="contained" onPress={() => handleMorePosts()}>
        Daha fazla {page}
      </Button>
    </View>
  );
};

export default Pagination;
