import React from 'react';
import { Button, Card, Paragraph } from 'react-native-paper';

const PostCard = () => {
  return (
    <Card>
      <Card.Cover
        source={{
          uri:
            'https://tiyatrogunlugu.com/wp-content/uploads/biz-iyi-insanlariz-tiyatro-oyunu-1.jpg',
        }}
      />
      <Card.Title title="İzledim: Biz İyi İnsanlarız" />
      <Card.Content>
        <Paragraph>
          Fafa Tiyatro‘nun Biz İyi İnsanlarız oyununu dün akşam Baba Sahne’de
          izledim. Baba Sahne‘ye en son geçtiğimiz sezonun son ayında Kanlı
          Komedya “Caligula” oyununu izlemek için gitmiştim. Biz İyi İnsanlarız
          ile yeni sezonu açmış oldum. Biz İyi İnsanlarız aşina olduğum bir
          metin. Orijinal ismiyle Radiant Vermin. Philip Ridley‘in kaleme aldığı
          metinle ilk olarak İkinci Kat‘ın Işıltılı Haşereler oyununda
          karşılaşmıştım. [...]
        </Paragraph>
      </Card.Content>
      <Card.Actions style={{ justifyContent: 'flex-end' }}>
        <Button mode="contained">Devamı</Button>
      </Card.Actions>
    </Card>
  );
};

export default PostCard;
