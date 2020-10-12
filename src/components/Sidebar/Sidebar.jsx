import React from 'react';

const Sidebar = ({ cameras }) => {
  
  const foo = () => console.log(this);

  return (
    <div>
      {cameras.map((camera) => (
        <button key={camera.id} id={camera.id} className='block m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={foo}>
          <span >{camera.name}</span>
        </button>
      ))}
    </div>
  )
};

export default Sidebar;