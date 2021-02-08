import React, { Fragment } from 'react';
import { Title, Subheading } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Logo = () => {
  return (
    <Fragment>
      <Title style={styles.title}>Tiyatro Günlüğü</Title>
      <Subheading style={styles.subtitle}>
        çaylak bir tiyatro izleyicisinin notları
      </Subheading>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 40,
    fontSize: 25,
  },
});

export default Logo;
