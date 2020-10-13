import React, { Component, createRef } from 'react';
//import PropTypes from 'prop-types';

class CameraView extends Component {
	state = {
		view: createRef(),
		cameraView: window.WebCam.getCameraNode(),
		defaultSource: '',
		activeSource: '',
		position: {},
	};

	componentDidMount() {
		const { view, cameraView } = this.state;
		view.current.appendChild(cameraView);
	}

	componentDidUpdate() {
		let { defaultSource, activeSource, position, afterPositionChange } = this.state;

		if (Object.keys(position).length) {
			window.WebCam.move(position.x, position.y);
			afterPositionChange();
		}

		if (activeSource === defaultSource) {
			return;
		}

		window.WebCam.setSource(activeSource);
		defaultSource = activeSource;
	}

	render() {
		const { view } = this.state;
		return <section className='flex h-full' ref={view} />;
	}
}

export default CameraView;
