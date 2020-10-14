import React from 'react';
// eslint-disable-next-line
import setSource from '../../assets/webcam';

const ButtonList = ({ cameras }) => {
	const sourceCam = window.WebCam;

	const changeCity = (source) => {
		//console.log(source);
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
						className='w-full block m-3 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded'
						onClick={() => changeCity(source)}
					>
						<span>{name}</span>
					</button>
				);
			})}
		</>
	);
};

export default ButtonList;
