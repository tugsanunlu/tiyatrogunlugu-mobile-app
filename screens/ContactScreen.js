import React from 'react';
import { Linking, View } from 'react-native';
import { List, Title } from 'react-native-paper';
import { styles } from '../styles/theme';
import Icon from 'react-native-vector-icons/FontAwesome';

const ContactScreen = () => {
  return (
    <View style={{ ...styles.container, flex: 1, padding: 10 }}>
      <Title>iletişim</Title>
      <List.Section>
        <List.Item
          title="@tugsanunlu"
          description="twitter"
          left={() => (
            <Icon name="twitter" size={25} style={{ marginVertical: 10 }} />
          )}
          onPress={() => Linking.openURL('https://www.twitter.com/tugsanunlu/')}
        />
        <List.Item
          title="@tugsanunlu"
          description="instagram"
          left={() => (
            <Icon name="instagram" size={25} style={{ marginVertical: 10 }} />
          )}
          onPress={() =>
            Linking.openURL('https://www.instagram.com/tugsanunlu/')
          }
        />
        <List.Item
          title="unlutugsan@gmail.com"
          description="e-posta"
          left={() => (
            <Icon name="envelope" size={25} style={{ marginVertical: 10 }} />
          )}
          onPress={() => Linking.openURL('mailto:unlutugsan@gmail.com')}
        />
      </List.Section>
    </View>
  );
};

export default ContactScreen;
