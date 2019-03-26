import React from 'react';
import injectSheet from 'react-jss';
import Paragraph from './Paragraph';
import Image from './Image';
import ThematicBreak from './ThematicBreak';

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
        switch (type) {
          case 'text':
            return <Paragraph key={value} text={value} />;
          case 'break':
            return <ThematicBreak key={value} />;
          case 'image':
            return (
              <Image
                key={value.source}
                source={value.source}
                caption={value.caption}
                align={value.align}
              />
            );
          default:
            return null;
        }
      })}
    </div>
  );
};

export default injectSheet(styles)(Content);
