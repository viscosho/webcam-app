import React, { Component } from 'react';
import CameraView from '../Camera/CameraView';
import CameraControls from '../CameraControls/CameraControls';
import ButtonList from '../ButtonList/ButtonList';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

class CameraRender extends Component {
	onLocationSelect = this.onLocationSelect.bind(this);
	onPositionChange = this.onPositionChange.bind(this);

	state = {
		cameras: [],
		activeSource: '',
		position: {},
	};

	componentDidMount() {
		fetch('http://runningios.com/screamingbox/cameras.json')
			.then((res) => res.json())
			.then((data) => {
				this.setState({ cameras: data });
				//console.log(data);
			})
			.catch(console.log);
	}

	onLocationSelect(source) {
		this.setState({
			activeSource: source,
		});
	}

	onPositionChange(position) {
		this.setState({
			position,
		});
	}

	render() {
		const { activeSource, position } = this.state;

		//console.log(position);
		return (
			<div className='max-w-6xl mx-auto lg:flex mb-4 gap-4 p-12 bg-gray-100 mt-10 rounded-lg shadow-xl'>
				<main className='pt-1 w-full sm:w-full md:w-full lg:w-2/4'>
					<CameraView activeSource={activeSource} position={position} />
				</main>
				<aside className='pt-1 w-full sm:w-full md:w-full lg:w-2/4'>
					<div className='pt-1 max-w-full text-center'>
						<Tab.Container id='left-tabs-example'>
							<Tabs defaultActiveKey='Camera'>
								<Tab eventKey='Camera' title='Camera'>
									<ButtonList
										id='cameras'
										cameras={this.state.cameras}
										onLocationSelect={this.onLocationSelect}
									/>
								</Tab>
								<Tab eventKey='Control' title='Control'>
									<CameraControls onPositionChange={this.onPositionChange} />
								</Tab>
							</Tabs>
						</Tab.Container>
					</div>
				</aside>
			</div>
		);
	}
}

export default CameraRender;
