import React from 'react';

const Sidebar = ({ cameras }) => {
	const sourceCam = window.WebCam;

	const changeCity = (source) => {
		console.log(source);
		//sourceCam.setSource(source);
		// setSource(source);
	};

	return (
		<div>
			{cameras.map((camera) => {
				const { id, name, source } = camera;
				return (
					<button
						key={id}
						id={id}
						className='block m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
						onClick={() => changeCity(source)}
					>
						<span>{name}</span>
					</button>
				);
			})}
		</div>
	);
};

export default Sidebar;
