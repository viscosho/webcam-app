import React, { Component } from 'react';
import './App.css';
import CameraRender from './components/CameraRender/CameraRender';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<header className='App-header flex mb-4'>
					<div className='w-full bg-gray-500 h-12'>
						<h1 className='text-3xl text-center mt-2 text-3xl leading-8 font-extrabold'>
							WebCam App
						</h1>
					</div>
				</header>
				<CameraRender />
			</div>
		);
	}
}

export default App;
