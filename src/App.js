import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Camera from './components/Camera/Camera.jsx';

class App extends Component {
	state = {
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
			<div className='App'>
				<header className='App-header flex mb-4'>
					<div className='w-full bg-gray-500 h-12'>
						<h1 className='text-3xl text-center mt-2 text-3xl leading-8 font-extrabold'>
							WebCam App
						</h1>
					</div>
				</header>
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
							<div id='controls' class='hidden'>
								Control
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
