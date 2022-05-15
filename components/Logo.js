import React from 'react';
import { Title, Subheading } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

const Logo = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Title style={styles.title}>Tiyatro Günlüğü</Title>
      <Subheading style={styles.subtitle}>
        bir tiyatro izleyicisinin notları
      </Subheading>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 40,
    fontSize: 25,
  },
});

export default Logo;
