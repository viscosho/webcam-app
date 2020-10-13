import React from 'react';
import setSource from '../../webcam';

const Sidebar = ({ cameras }) => {
	const sourceCam = window.WebCam;

	const changeCity = (source) => {
		console.log(source);
		sourceCam.setSource(source);
	};

	return (
		<>
			{cameras.map((camera) => {
				const { id, name, source } = camera;
				return (
					<button
						key={id}
						id={id}
						className='w-full block m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
						onClick={() => changeCity(source)}
					>
						<span>{name}</span>
					</button>
				);
			})}
		</>
	);
};

export default Sidebar;
