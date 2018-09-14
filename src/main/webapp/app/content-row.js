import React from 'react';

const ContentRow = (props) => {
  return (
    <div className={'row'}>
      {props.children}
    </div>
  );
};

export default ContentRow;
