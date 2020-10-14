import React from 'react';

const CameraControls = (props) => {
	const onMouseDown = (e) => {
		e.target.addEventListener('mousemove', onMouseMove);
	};

	const onMouseMove = (e) => {
		let mouseX = e.clientX;
		let mouseY = e.clientY;

		let circle = e.target.getBoundingClientRect();
		let newMouseX = circle.x + circle.width / 2;
		let newMouseY = circle.y + circle.height / 2;
		let xPosition = mouseX - newMouseX;
		let yPosition = (mouseY - newMouseY) * -1;

		console.log(xPosition, yPosition);

		window.WebCam.move(xPosition, yPosition);
	};

	const onMouseUp = (e) => {
		e.target.removeEventListener('mousemove', onMouseMove);
	};

	return (
		<div className='flex justify-center p-4'>
			<span
				onMouseDown={onMouseDown}
				onMouseUp={onMouseUp}
				className='circle-control block text-center'
			/>
		</div>
	);
};

export default CameraControls;
