import React from 'react';

const ContentBox = (props) => {
  return (
    <div className={'content-box box col text-center col-lg-2'}>
      {
        (props.children) ? props.children : 'No content'
      }
    </div>
  );
};

export default ContentBox;
