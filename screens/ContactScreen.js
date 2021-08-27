import React from 'react';
import { Linking, View } from 'react-native';
import { List } from 'react-native-paper';
import { styles } from '../styles/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../components/Header';
import { useTheme } from 'react-native-paper';

const ContactScreen = () => {
  const { colors } = useTheme();
  const contacts = [
    {
      title: '@tugsanunlu',
      description: 'twitter',
      icon: 'twitter',
      link: 'https://www.twitter.com/tugsanunlu/',
    },
    {
      title: '@tugsanunlu',
      description: 'instagram',
      icon: 'instagram',
      link: 'https://www.instagram.com/tugsanunlu/',
    },
    {
      title: 'unlutugsan@gmail.com',
      description: 'e-posta',
      icon: 'envelope',
      link: 'mailto:unlutugsan@gmail.com',
    },
  ];

  return (
    <View
      style={{
        ...styles.container,
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <Header />
      <View style={{ margin: 10 }}>
        <List.Section>
          {contacts.map((contact, index) => (
            <List.Item
              key={index}
              title={contact.title}
              description={contact.description}
              left={() => (
                <Icon
                  name={contact.icon}
                  size={25}
                  color={colors.text}
                  style={{ marginVertical: 10 }}
                />
              )}
              onPress={() => Linking.openURL(contact.link)}
            />
          ))}
        </List.Section>
      </View>
    </View>
  );
};

export default ContactScreen;
