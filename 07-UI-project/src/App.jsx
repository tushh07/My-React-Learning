import React from 'react';
import 'remixicon/fonts/remixicon.css'; 
import Section1 from './Components/Section1/Section1'; // Routes directly to the master layout wrapper

const App = () => {
  return (
    <div className='h-screen w-full bg-slate-50 overflow-hidden'>
      <Section1 />
    </div>
  );
};

export default App;
