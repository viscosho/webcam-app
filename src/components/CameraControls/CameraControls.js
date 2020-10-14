import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class CameraControls extends Component {
	onMouseDown = this.onMouseDown.bind(this);
	onMouseUp = this.onMouseUp.bind(this);

	state = {
		startPosition: {},
	};

	onMouseDown(e) {
		this.setState({
			startPosition: {
				x: e.clientX,
				y: e.clientY,
			},
		});
		//console.log(e.clientX, e.clientY);
	}

	onMouseUp(e) {
		const { startPosition } = this.state;
		const { onPositionChange } = this.props;

		onPositionChange({
			x: startPosition.x - e.clientX,
			y: startPosition.y - e.clientY,
		});
		//console.log(e.clientX, e.clientY);

		window.WebCam.move(e.clientX);
	}

	render() {
		return (
			<div className='flex justify-center'>
				<span
					onMouseDown={this.onMouseDown}
					onMouseUp={this.onMouseUp}
					className='circle-control block text-center'
				/>
			</div>
		);
	}
}

export default CameraControls;
