import React, { Component } from 'react';
import CameraView from '../Camera/CameraView';
import Sidebar from '../Sidebar/Sidebar';

class CameraRender extends Component {
	onListItemClick = this.onListItemClick.bind(this);

	state = {
		cameras: [],
		activeSource: '',
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

	onListItemClick(source) {
		this.setState({
			activeSource: source,
		});
	}

	render() {
		const { activeSource } = this.state;
		return (
			<div className='max-w-6xl mx-auto lg:flex mb-4 gap-4 p-12 bg-gray-100 mt-10 rounded-lg shadow-xl'>
				<main className='pt-1 w-full sm:w-full md:w-full lg:w-3/4'>
					<CameraView activeSource={activeSource} />
				</main>
				<aside className='pt-1 w-full sm:w-full md:w-full lg:w-1/4'>
					<div className='pt-1 max-w-full text-center'>
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
						<Sidebar
							id='cameras'
							cameras={this.state.cameras}
							onListItemClick={this.onListItemClick}
						/>
						<div id='controls' className='hidden'>
							Control
						</div>
					</div>
				</aside>
			</div>
		);
	}
}

export default CameraRender;
