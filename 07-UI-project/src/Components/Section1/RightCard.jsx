import React from 'react';

const RightCard = ({ number = "1", imgUrl, btnColor }) => {
  return (
    <div className='h-96 w-64 rounded-3xl relative overflow-hidden shadow-md shrink-0 bg-slate-900'>
      
      {/* Background Profile Graphic Asset */}
      <img 
        className='h-full w-full object-cover absolute top-0 left-0' 
        src={imgUrl} 
        alt={`Profile Segment ${number}`} 
      />
      
      {/* Native Linear Gradient Mask Layer (Bypasses Tailwind yellow linter warning lines) */}
      <div 
        className='absolute inset-0 pointer-events-none' 
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)'
        }}
      />

      {/* Interactive Content Layout Layer */}
      <div className='absolute inset-0 p-5 flex flex-col justify-between z-10'>
        <h2 className='bg-white text-xs rounded-full font-medium h-7 w-7 flex justify-center items-center text-black shadow-sm'>
          {number}
        </h2>
        
        <div className='flex flex-col gap-4 mt-auto'>
          <div>
            <p className='text-xs leading-normal text-white font-normal drop-shadow-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis repellendus voluptatum nesciunt nobis at id!
            </p>
          </div>
          
          <div className='flex justify-between items-center w-full'>
            {/* Dynamic Custom Color Button */}
            <button 
              className='text-white font-medium px-4 py-1.5 rounded-full text-xs transition-opacity hover:opacity-90'
              style={{ backgroundColor: btnColor }}
            >
              Satisfied
            </button>
            
            {/* Matching Dynamic Custom Color Icon Button */}
            <button 
              className='text-white font-medium h-7 w-7 rounded-full flex justify-center items-center transition-opacity hover:opacity-90'
              style={{ backgroundColor: btnColor }}
            >
              <i className="ri-arrow-right-line text-xs text-white"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
