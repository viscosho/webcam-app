import React, { Component } from 'react';

export default class CameraTabs extends Component {
	render() {
		return (
			<div className='flex flex-wrap' id='tabs-id'>
				<div className='w-full'>
					<ul className='flex'>
						<li className='flex-1 mr-2'>
							<button
								className='text-center block border border-red-500 rounded py-2 px-4 bg-red-500 hover:bg-blue-700 text-white selected'
								data-select='cameras'
								id='cameras'
								href='#cameras'
							>
								Cameras
							</button>
						</li>
						<li className='flex-1 mr-2'>
							<button
								className='text-center block border border-red-500 rounded py-2 px-4 bg-red-500 hover:bg-blue-700 text-white'
								data-select='controls'
								id='controls'
								href='#controls'
							>
								Control
							</button>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
