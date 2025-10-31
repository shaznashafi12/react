import React from 'react';
import Child from './Child';

import img6 from '../images/img11.jpg';
import img1 from '../images/img2.jpg';
import img2 from '../images/img3.jpg';
import img3 from '../images/img4.jpg';
import img4 from '../images/img5.jpg';
import img5 from '../images/img6.jpg';

const Parent = () => {
  return (
    <div>
        <div className='container'>
          <div className='ll'>
      <Child images={img6} name="Adam Johnson" pos="Developer" /></div>
      <Child images={img1} name="Margo Larson" pos="Manager" />
      <Child images={img2} name="Stefan Salvatore" pos="Designer" />
      </div>
      <div className='container2'>
      <Child images={img3} name="Linda Larson" pos="Manager" />
      <Child images={img4} name="Marry Hardson" pos="Designer" />
      <div className='lk'>
      <Child images={img5} name="Nina Hardson" pos="Developer" />
      </div>
    </div>
    </div>
  );
};

export default Parent;
