import React from 'react';

const Camera = ({ cameras }) => {
  return (
    <div>
      {cameras.map((camera) => (
        <img key={camera.id} src={camera.source} alt={camera.id}/>
      ))}
    </div>
  )
};

export default Camera;