import React from 'react';
import { View } from 'react-native';
import { Chip } from 'react-native-paper';

const PostTagList = ({ tags }) => {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 20 }}>
      {tags.map((tag) => (
        <Chip key={tag.id} icon="tag" selected style={{ marginVertical: 5 }}>
          {tag.name}
        </Chip>
      ))}
    </View>
  );
};

export default PostTagList;
