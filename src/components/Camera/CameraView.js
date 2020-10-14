import React, { Component, createRef } from 'react';
//import PropTypes from 'prop-types';

class CameraView extends Component {
	state = {
		view: createRef(),
		cameraView: window.WebCam.getCameraNode(),
		defaultSource: '',
		activeSource: '',
	};

	componentDidMount() {
		const { view, cameraView } = this.state;
		view.current.appendChild(cameraView);
	}

	componentDidUpdate() {
		const { activeSource } = this.state;

		let { defaultSource } = this.state;

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
