import React from 'react';
import { View } from 'react-native';
import { Chip } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTheme } from 'react-native-paper';

const PostTagList = ({ tags }) => {
  const { colors } = useTheme();

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 20 }}>
      {tags.map((tag) => (
        <Chip
          key={tag.id}
          icon={() => <Icon name="tag" color={colors.text} />}
          mode="outlined"
          selected
          style={{ marginRight: 10, marginBottom: 10 }}
        >
          {tag.name}
        </Chip>
      ))}
    </View>
  );
};

export default PostTagList;
