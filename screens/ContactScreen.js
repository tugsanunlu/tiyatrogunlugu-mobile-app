import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { styles } from '../styles/theme';

const ContactScreen = () => {
  return (
    <View style={{ ...styles.container, flex: 1 }}>
      <Text>İletişim ayrıntıları geliyor...</Text>
    </View>
  );
};

export default ContactScreen;
