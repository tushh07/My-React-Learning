import React from 'react';

const HeroText = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h3 className='text-5xl font-bold tracking-tight text-slate-900 leading-tight'>
        Prospective <br />
        <span className='text-blue-600'>customer</span> <br />
        segmentation
      </h3>
      <p className='text-base font-medium text-gray-500 max-w-sm'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto fuga impedit deleniti minus rem eaque quaerat tempora.
      </p>
    </div>
  );
};

export default HeroText;
