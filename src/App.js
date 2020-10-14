import React, { Component } from 'react';
import './App.css';
import HeaderLayout from './components/Layout/header';
import CameraRender from './components/CameraRender/CameraRender';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<HeaderLayout />
				<CameraRender />
			</div>
		);
	}
}

export default App;
