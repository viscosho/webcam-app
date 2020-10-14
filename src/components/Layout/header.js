import React, { Component } from 'react';

export default class HeaderLayout extends Component {
	render() {
		return (
			<header className='App-header flex mb-4'>
				<div className='w-full h-12'>
					<h1 className='text-3xl text-center mt-2 text-purple-800 font-bold text-center'>
						WebCam App
					</h1>
				</div>
			</header>
		);
	}
}
