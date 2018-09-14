import React from 'react';

const ContentRow = (props) => {
  return (
    <div className={'row content-row'}>
      {props.children}
    </div>
  );
};

export default ContentRow;
