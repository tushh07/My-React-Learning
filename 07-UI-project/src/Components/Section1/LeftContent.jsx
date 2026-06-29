import React from 'react';

const LeftContent = () => {
  return (
    // Fixed alignment framework to keep spacing clean and uniform
    <div className='h-96 flex flex-col justify-between w-1/3 py-2 pr-4'>
      <div>
        <h3 className='text-5xl font-bold tracking-tight text-slate-900 leading-tight'>
          Prospective <br />
          <span className='text-blue-600'>customer</span> <br />
          segmentation
        </h3>
      </div>

      <div className='flex flex-col gap-4 mt-auto'>
        <p className='text-sm font-medium text-gray-500 max-w-sm leading-relaxed'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto fuga impedit deleniti minus rem eaque quaerat tempora.
        </p>
        
        <div className='h-11 w-11 bg-white text-black border border-slate-200 rounded-full flex justify-center items-center shadow-sm cursor-pointer hover:bg-slate-50 transition-colors'>
          <i className="ri-arrow-right-up-line text-lg font-bold"></i>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
