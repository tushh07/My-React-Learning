import React from 'react';
import LeftContent from './LeftContent';
import RightContent from './RightContent';

const Page1Content = () => {
  return (
    // FIXED: Subtracted the Navbar height to align text grids perfectly with your right cards
    <div className='flex h-[calc(100vh-120px)] w-full items-center bg-slate-50 px-18 pb-6 gap-8'>
        <LeftContent />
        <RightContent />
    </div>
  );
};

export default Page1Content;
