import React from 'react';

const ContentBox = (props) => {
  return (
    <div className={'content-box box col'}>
      {props.children}
    </div>
  );
};

export default ContentBox;
