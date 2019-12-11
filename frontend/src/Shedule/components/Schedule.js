import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../../Context/Context';
import Nav from '../../Dashboard/components/Navi';
import TopNav from '../../Dashboard/components/TopNav';
import { FaMapMarkerAlt } from 'react-icons/fa';
import cash from '../assets/mdi-cash.svg';
import wallet from '../assets/wallet.svg';
import { withRouter } from 'react-router-dom';



import '../css/Schedule.css';
const google = window.google;
let infowindow;
// let map 
class Shedule extends Component {
	constructor(props) {
		super(props);

		this.state = {
			lat: 0,
			lng: 0,
			pickUpPoint: '',
			deliveryPoint: '',
			pickUpTime: '',
			pickUpDate: '',
			natureOfGood: 'Perishable',
			quantity: '',
			goodsType: 'others',
			goodsDescription: '',
			scheduleDistance: null,
			showFirstPage: true,
			pickUpId: 0,
			dropOffId: 0,
			file: null
		};
		this.mapRef = React.createRef();
		this.pickUpRef = React.createRef();
		this.dropOffRef = React.createRef();
	}
	componentDidMount() {
		this.geoLocation();
	}
	componentDidUpdate(prevProps, prevState) {
		// Typical usage (don't forget to compare props):
		if (((prevState.showFirstPage === false) && (this.state.showFirstPage === true)) ) {
			this.geoLocation();
		}
	  }
	
	  geoLocation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				function(location) {
					this.setState(
						{
							lat: location.coords.latitude,
							lng: location.coords.longitude
						},
						() => {
							const userLatLng = new google.maps.LatLng(this.state.lat, this.state.lng);
							const node = this.mapRef.current;
							const map = new google.maps.Map(node, {
								zoom: 8,
								center: {
									lat: this.state.lat,
									lng: this.state.lng
								}
							});
							const marker = new google.maps.Marker({
								position: userLatLng,
								title: 'Your Location',
								map: map
							});
							infowindow = new google.maps.InfoWindow();
							new AutocompleteDirectionsHandler(map, this.pickUpRef, this.dropOffRef, this);
						}
					);
				}.bind(this)
			);
		}
	  }
	handleClick = (e) => {
		e.preventDefault()
		this.setState({ showFirstPage: false });
	};
	handleBack = () => {
		this.setState({showFirstPage: true});
	}
	_onChange = (e) => {
		console.log(e)
		if((e.target.name === 'file') && e.target.files ){
			this.setState({file:e.target.files[0]},  () => console.log(this.state));
		} else {
			this.setState({[e.target.name]: e.target.value}, () => console.log(this.state))
		}
	}
	handleSelectNatureChange = (e) => {
		this.setState({ natureOfGood: e.target.value}, () => console.log(this.state))
	}
	handleSelectGoodChange = (e) => {
		this.setState({goodsType: e.target.value}, () => console.log(this.state))
	}
	render() {
		console.log(this.state);
		console.log("hiaaaaaaaaaaaaaaaaa", this.props.history);
		console.log(this.state.lat, this.state.lng);
		return (
			<ProductConsumer>
				{(value) => {
					return (
						<div className="dash-cont">
							<div className="navii">
								<Nav />
							</div>
							<div style={{ display: value.isFalse ? 'block' : 'none' }} className="navbar">
								<Nav />
							</div>
							<div
								onClick={value.side}
								style={{ right: value.isFalse ? '0%' : '100%', position: 'fixed' }}
								className="black"
							/>
							<div className="naviii">
								<TopNav tit={'Shedule Pickup'} />
								<div>
									<section className="schedule">
										{this.state.showFirstPage ? (
											<form className="schedule-form" onSubmit={this.handleClick}>
												<div className="scheduleForm-pickDetails">
													<aside>
														<FaMapMarkerAlt
															color="#2F80ED"
															width="12px"
															height="15.43"
															className="arrow"
														/>
														<input
															type="text"
															className="scheduleForm-pickUp"
															placeholder="Pick up point"
															ref={this.pickUpRef}
															required
															name="pickUpPoint"
															 defaultValue={this.state.pickUpPoint}
															// onChange={this._onChange}
														/>
													</aside>
													<aside>
														<FaMapMarkerAlt
															color="#2F80ED"
															width="12px"
															height="15.43"
															className="arrow"
															required
														/>
														<input
															type="text"
															className="scheduleForm-pickUp"
															placeholder="Delivery point"
															ref={this.dropOffRef}
															required
															name="deliveryPoint"
															defaultValue={this.state.deliveryPoint}
															// onChange={this._onChange}
														/>
													</aside>
												</div>

												<div className="scheduleForm-timeDetails">
													<input
														type="time"
														placeholder="Pick up time"
														className="scheduleForm-time"
														id="timepicker"
														required
														name="pickUpTime"
														value={this.state.pickUpTime}
														onChange={this._onChange}
													/>
													<input
														type="date"
														placeholder="Pick up Date"
														className="scheduleForm-date"
														required
														name="pickUpDate"
														value={this.state.pickUpDate}
														onChange={this._onChange}
													/>
												</div>

												<div className="schedule-goodsDesc">
													<h3 className="brf">Goods Description</h3>
													<div className="schedule-goodsDesc__1">
														<div>
															<label for="upload-photo" className="label-upload">
																{this.state.file ? this.state.file.name : <img src={cash} />}
															</label>
															<input
																type="file"
																name="file"
																accept="image/x-png,image/gif,image/jpeg"
																id="upload-photo"
																onChange={this._onChange}
															/>
														</div>
														<div className="schedule-goodsDesc__1-details">
															<select value={this.state.natureOfGood} onChange={this.handleSelectNatureChange} placeholder="Nature" required>
																<option disabled  defaultValue> -- Nature -- </option>
																<option value="Perishable" >Perishable</option>
																<option value="Non-Perishable">Non-Perishable</option>
															</select>
															<input
																type="number"
																placeholder="Add quantity"
																required
																name="quantity"
																value={this.state.quantity}
																onChange={this._onChange}
																min="0"
															/>
														</div>
													</div>

													<div>
														<select className="schedule-goodType" value={this.state.goodsType} onChange={this.handleSelectGoodChange} required>
															<option disabled >Goods Type</option>
															<option value="Cosmetics" >others</option>
															<option value="Food">Food</option>
															<option value="Electronic">Electronic</option>
															<option value="Furniture">Furniture</option>
															<option value="Cosmetics">Cosmetics</option>
														</select>
													</div>
													<div>
														<input
															type="text"
															placeholder="Describe your goods"
															className="schedule-describe "
															name="goodsDescription"
															value={this.state.goodsDescription}
															onChange={this._onChange}
														/>
													</div>
													<div className="schedule-btn">
														<button className="con" type="submit"   >
															Continue
														</button>
													</div>
												</div>
											</form>
										) : (
											<ReceiverWithRouter onHandleBack={this.handleBack} formOneDetails={this.state} />
										)}
										<div>
											<div
												className="card-block"
												id="map"
												style={{ height: '92vh' }}
												ref={this.mapRef}
											/>
										</div>
									</section>
								</div>
							</div>
						</div>
					);
				}}
			</ProductConsumer>
		);
	}
}

export default Shedule;

function AutocompleteDirectionsHandler(map, pickUpRef, dropOffRef, parenthis) {
	console.log(parenthis)
	this.map = map;
	this.originPlaceId = null;
	this.destinationPlaceId = null;

	const pickOffInput = pickUpRef.current;
	const dropOffInput = dropOffRef.current;
	console.log(pickOffInput, dropOffInput);
	this.directionsService = new google.maps.DirectionsService();
	this.directionsDisplay = new google.maps.DirectionsRenderer();
	this.directionsDisplay.setMap(map);
	const options = {
		componentRestrictions: { country: 'ng' },
		placeIdOnly: true
	};
	console.log("am executing")
	const pickOffAutocomplete = new google.maps.places.Autocomplete(pickOffInput, options);
	const dropOffAutocomplete = new google.maps.places.Autocomplete(dropOffInput, options);

	this.setupPlaceChangedListener(pickOffAutocomplete, 'ORIG',parenthis);
	this.setupPlaceChangedListener(dropOffAutocomplete, 'DEST',parenthis);
}

AutocompleteDirectionsHandler.prototype.setupPlaceChangedListener = function(autocomplete, mode, parenthis) {
	var self = this;
	console.log(self)
	if( parenthis.state.pickUpId && parenthis.state.dropOffId){
		console.log("halleyu")
		self.originPlaceId = parenthis.state.pickUpId;
		self.destinationPlaceId = parenthis.state.dropOffId;
		self.route(parenthis);
	}
	autocomplete.bindTo('bounds', this.map);
	autocomplete.addListener('place_changed', function() {
		var place = autocomplete.getPlace();
		console.log("hi am here",place)
		if (!place.place_id) {
			window.alert('Please select an option from the dropdown list.');
			return;
		}
		if (mode === 'ORIG') {
			console.log(place)
			console.log("++++++++++++", parenthis)
			self.originPlaceId = place.place_id;
			parenthis.setState({ pickUpPoint: place.name, pickUpId: place.place_id })
		} else {
			console.log(place)
			self.destinationPlaceId = place.place_id;
			parenthis.setState({ deliveryPoint: place.name, dropOffId: place.place_id })
		}
		self.route(parenthis);
	});
};

AutocompleteDirectionsHandler.prototype.route = function(parthis) {
	if (!this.originPlaceId || !this.destinationPlaceId) {
		return;
	}
	var self = this;

	this.directionsService.route(
		{
			origin: {
				placeId: this.originPlaceId
			},
			destination: {
				placeId: this.destinationPlaceId
			},
			travelMode: 'DRIVING'
		},
		function(response, status) {
			if (status === 'OK') {
				console.log(self.directionsDisplay);
				self.directionsDisplay.setDirections(response);
				var center = response.routes[0].overview_path[Math.floor(response.routes[0].overview_path.length / 2)];
				infowindow.setPosition(center);
				infowindow.setContent(
					response.routes[0].legs[0].duration.text + '<br>' + response.routes[0].legs[0].distance.text
				);
				parthis.setState({ scheduleDistance: response.routes[0].legs[0].distance.text });
				console.log("===========",parthis,response.routes[0].legs[0].distance.text)
				infowindow.open(self.map);
			} else {
				window.alert('Directions request failed due to ' + status);
			}
		}
	);
};

class Receiver extends Component {
	constructor(props) {
		super(props)
		this.state = {
			...this.props.formOneDetails,
			recieversEmail: '',
			recieversPhone: '',
			recieversName:  '',
			payMethod: ''
		}
		console.log(this.state)
		this.state.amount = this.calculatatePrice(this.state.scheduleDistance);
	}
	calculatatePrice = (dist) => {
		const pricePerKilo = 100;
		console.log(dist)
		const actualDist =  parseFloat(dist);
		console.log(actualDist);
		const amount = actualDist * pricePerKilo * this.state.quantity;
		return amount
	}
	handleChange = (e) => {
		this.setState({ [e.target.name] : e.target.value}, () => console.log(this.state))
	}
	goBack = () => {
		this.props.onHandleBack();
	}
	handleSubmit = (e) => {
		e.preventDefault()
		const { history } = this.props;
		console.log(history)
		if(this.state.payMethod){
			if( this.state.payMethod === "wallet" ){
				window.location.assign(`http://skada.herokuapp.com/api/wallet/pay?amount=${this.state.amount}`);
			} else {
				this.props.history.push({
					pathname: '/scheduleDetails',
					state: { orderDetails : this.state }
				  })
				  console.log("hello")
			}
		
		}
		
	}
	handleSelectPay = (opt) => {
		if(opt === "wallet"){
			this.setState({ payMethod : opt}, () => console.log(this.state.payMethod))
		} else {
			this.setState({ payMethod : opt}, () =>console.log(this.state.payMethod))
		}
	}
	render() {
		return (
			<div className="receivers">
				<h4 className="text-prim">Receivers Information</h4>
				<form onSubmit={this.handleSubmit}>
				<div className="receivers-info">
					<div>
						<input type="text" placeholder="Receivers name" name="recieversName" onChange={this.handleChange} required />
					</div>
					<div>
						<input type="text" placeholder="Email Address" name="recieversEmail"  onChange={this.handleChange} required/>
					</div>
					<div>
						<input type="text" placeholder="Phone number" name="recieversPhone"  onChange={this.handleChange} required/>
					</div>
				</div>
				<div className="receivers-delivery">
					<div>Estimated Delivery charge</div>
					<div>&#8358;{this.state.amount}</div>
				</div>
				<div className="payCheckout">
					<div style={{ marginRight: '5%'}}>Pay With</div>
					<button className="payCheckout-wallet" type="button" onClick={() => this.handleSelectPay("wallet")}>
						<img src={wallet} />
						{this.paymethod === "wallet" && <i class="fas fa-check"></i>}
					</button>
					<button className="payCheckout-cash" type="button" onClick={() => this.handleSelectPay("cash")}>
						<img src={cash} />			
						{this.paymethod === "cash" && <i class="fas fa-check"></i>}
					</button>
				</div>
				<div className="submit-btn">
					<div className="">
						<button className="submit-btn-back" type="button" onClick={this.goBack}>
							Back
						</button>
					</div>
					<div className="">
						<button className="submit-btn-pay" type="submit">
							Continue
						</button>
					</div>
				</div>
				</form>
			</div>
		);
	}
	
};

const ReceiverWithRouter = withRouter(Receiver)