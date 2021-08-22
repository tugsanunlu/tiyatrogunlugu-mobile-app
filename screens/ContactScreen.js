import React from 'react';
import { Linking, View } from 'react-native';
import { List } from 'react-native-paper';
import { styles } from '../styles/theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../components/Header';
import { useTheme } from 'react-native-paper';

const ContactScreen = () => {
  const { colors } = useTheme();

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
          <List.Item
            title="@tugsanunlu"
            description="twitter"
            left={() => (
              <Icon
                name="twitter"
                size={25}
                color={colors.text}
                style={{ marginVertical: 10 }}
              />
            )}
            onPress={() =>
              Linking.openURL('https://www.twitter.com/tugsanunlu/')
            }
          />
          <List.Item
            title="@tugsanunlu"
            description="instagram"
            left={() => (
              <Icon
                name="instagram"
                size={25}
                color={colors.text}
                style={{ marginVertical: 10 }}
              />
            )}
            onPress={() =>
              Linking.openURL('https://www.instagram.com/tugsanunlu/')
            }
          />
          <List.Item
            title="unlutugsan@gmail.com"
            description="e-posta"
            left={() => (
              <Icon
                name="envelope"
                size={25}
                color={colors.text}
                style={{ marginVertical: 10 }}
              />
            )}
            onPress={() => Linking.openURL('mailto:unlutugsan@gmail.com')}
          />
        </List.Section>
      </View>
    </View>
  );
};

export default ContactScreen;
