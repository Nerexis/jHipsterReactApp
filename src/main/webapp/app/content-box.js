import React from 'react';

const ContentBox = (props) => {
  return (
    <div className={'content-box box col text-center'}>
      {
        (props.children) ? props.children : 'No content'
      }
    </div>
  );
};

export default ContentBox;
