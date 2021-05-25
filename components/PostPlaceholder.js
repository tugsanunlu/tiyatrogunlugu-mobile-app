import React from 'react';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';

const PostPlaceholder = () => {
  return (
    <Placeholder Animation={Fade} style={{ marginVertical: 15 }}>
      <PlaceholderMedia style={{ width: '100%', height: 300 }} />
      <PlaceholderLine
        width={90}
        height={30}
        style={{ marginHorizontal: '5%', marginTop: 25 }}
      />
      {Array.from({ length: 6 }).map((_, index) => (
        <PlaceholderLine
          key={index}
          width={index % 2 === 0 ? 80 : 90}
          height={10}
          style={{ marginHorizontal: '5%' }}
        />
      ))}
    </Placeholder>
  );
};

export default PostPlaceholder;
