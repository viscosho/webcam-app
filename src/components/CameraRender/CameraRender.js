import React, { Component } from 'react';
import Camera from '../Camera/Camera';
import Sidebar from '../Sidebar/Sidebar';
// import WebCam from '../../webcam';

// import webcam from '../webcam';
// import CitiesComponent from '../components/CitiesComponent';
// import CircleComponent from '../components/CircleComponent';
// import ImageComponent from '../components/ImageComponent';

class CameraRender extends Component {
	state = {
		// webcam: WebCam(),
		cameras: [],
	};
	componentDidMount() {
		fetch('http://runningios.com/screamingbox/cameras.json')
			.then((res) => res.json())
			.then((data) => {
				this.setState({ cameras: data });
				console.log(data);
			})
			.catch(console.log);
	}
	render() {
		return (
			<div className='max-w-6xl mx-auto grid grid-cols-2 gap-4 flex p-12 bg-gray-100 mt-10 rounded-lg shadow-xl'>
				<div className='ml-8 pt-1 max-w-full'>
					<div className='ml-8 pt-1 max-w-full'>
						<Camera cameras={this.state.cameras} />
					</div>
				</div>
				<div className='ml-4 pt-1 max-w-full'>
					<h3 className='text-base text-gray-700 leading-normal text-xl text-center'>Views</h3>

					<div className='ml-8 pt-1 max-w-full text-center'>
						<ul className='flex'>
							<li className='flex-1 mr-2'>
								<a
									className='text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white'
									data-select='cameras'
									id='cameras'
									href='#cameras'
								>
									Cameras
								</a>
							</li>
							<li className='flex-1 mr-2'>
								<a
									className='text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4'
									data-select='controls'
									id='controls'
									href='#controls'
								>
									Control
								</a>
							</li>
						</ul>
						<Sidebar id='cameras' cameras={this.state.cameras} />
						<div id='controls' className='hidden'>
							Control
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CameraRender;
