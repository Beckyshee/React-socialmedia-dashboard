import React from 'react'
import Intro from '../components/Intro'
import InBetween from '../layout/InBetween'
import Photos from './Photos';

const Bottom = () => {
  return (
    <div className='bottom'>
      <InBetween />
      <Intro />
      <Photos />
    </div>
  );
}

export default Bottom