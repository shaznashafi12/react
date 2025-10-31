import React from 'react';

const Child = (props) => {
  return (
    <div className='child'>
      <img src={props.images} alt={props.name}  />
      <h2>{props.name}</h2>
      <h3>{props.pos}</h3>
    </div>
  );
};

export default Child;
