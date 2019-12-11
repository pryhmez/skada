import React, { Component } from 'react';
import InTransit from './In-Transit';
import Delivered from './Delivered';
import './css/DeliveryStatus.css';
import Pending from './Pending';

class DeliveryStatusSide extends Component {
	constructor(props){
		super(props)
		this.state = {
			activeTab: 0,
			tabs : [
				{ label: 'In-Transit', component: <InTransit goods={this.props.open} /> },
				{ label: 'Delivered', component: <Delivered goods={this.props.closed} /> },
				{ label: 'Pending', component: <Pending goods={this.props.pending} /> }
			]
		};
	}
	

	handleClick = (i) => {
		this.setState({ activeTab: i });
	};

	render() {
		const { activeTab } = this.state;

		return (
			<div>
				<div className="del-cont">
					<div style={{ width: '100%' }}>
						<div style={{ width: '100%', borderBottom: '0.2px solid #C4C4C4', marginTop: '26px' }}>
							<div style={{  display: 'flex', justifyContent: 'space-evenly' }}>
								{this.state.tabs.map((tab, i) => {
									let className = 'del-lik ';
									className += activeTab === i ? 'del-active' : '';
									return (
										<div
											onClick={() => this.handleClick(i)}
											key={`${tab.label}${i}`}
											className={className}
										>
											{tab.label}
										</div>
									);
								})}
							</div>
						</div>
						<br />
						<br />
						<br />
						<div style={{ width: '95%', margin: '0px auto' }}>
							{this.state.tabs[activeTab] && this.state.tabs[activeTab].component}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

// const DeliveryStatusSide = () => {

// }
export default DeliveryStatusSide;
