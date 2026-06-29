import React from 'react';
import RightCard from './RightCard';

const RightContent = (props) => {
  console.log(props.user);
  
  const cardData = [
    {
      number: "1",
      imgUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
      btnColor: "#2563eb" 
    },
    {
      number: "2",
      imgUrl: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=500&auto=format&fit=crop",
      btnColor: "#16a34a"
    },
    {
      number: "3",
      imgUrl: "https://images.unsplash.com/photo-1758598497414-3ddd779e2611?q=80&w=1032&auto=format&fit=crop",
      btnColor: "#dc2626"
    },
    {
      number: "4",
      imgUrl: "https://plus.unsplash.com/premium_photo-1661767011483-feab300357ba?w=500&auto=format&fit=crop",
      btnColor: "#fbbf24"
    }
  ];

  return (
    <div className='h-full w-2/3 flex items-center justify-start gap-4 p-2 overflow-x-auto scrollbar-none'>
      {cardData.map((elem, index) => (
        <RightCard 
          key={index}
          number={elem.number} 
          imgUrl={elem.imgUrl} 
          btnColor={elem.btnColor} // FIXED: Changed card.btnColor to elem.btnColor
        />
      ))}
    </div>
  );
};

export default RightContent;
