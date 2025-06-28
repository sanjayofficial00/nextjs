import React from 'react'
import { barber } from '@/app/fonts';

const Heading = ({ text, className = "" }) => (
  <h1 className={`${className} ${barber.className} font-bold lg:leading-none text-white`}>
    {text}
  </h1>
);

export default React.memo(Heading);
