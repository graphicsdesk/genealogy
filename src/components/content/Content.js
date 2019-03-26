import React from 'react';
import injectSheet from 'react-jss';
import Paragraph from './Paragraph';
import Image from './Image';
import ContentBreak from './ContentBreak';

const styles = {
  content: {
    marginBottom: '2rem',
    padding: '0 15px',
  },
};

const Content = ({ classes, copy }) => {
  return (
    <div className={classes.content}>
      {copy.map(({ type, value }) => {
        if (type === 'text') return <Paragraph key={value} text={value} />;
        if (type === 'image')
          return (
            <Image
              key={value.source}
              source={value.source}
              caption={value.caption}
              align={value.align}
            />
          );
        if (type === 'break') return <ContentBreak />;
        return null;
      })}
    </div>
  );
};

export default injectSheet(styles)(Content);
