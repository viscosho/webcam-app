import React, { Component } from 'react';

class CameraTabs extends Component {
	render() {
		return (
			<div className='flex flex-wrap' id='tabs-id'>
				<div className='w-full'>
					<ul className='flex'>
						<li className='flex-1 mr-2'>
							<a
								className='selected text-center block border border-red-500 rounded py-2 px-4 bg-red-500 hover:bg-blue-700 text-white'
								data-select='cameras'
								id='cameras'
								href='#cameras'
							>
								Cameras
							</a>
						</li>
						<li className='flex-1 mr-2'>
							<a
								className='text-center block border border-red-500 rounded hover:border-gray-200 text-red-500 hover:bg-gray-200 py-2 px-4'
								data-select='controls'
								id='controls'
								href='#controls'
							>
								Control
							</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default CameraTabs;
