import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { push } from 'react-router-redux';

export default class HomePage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				open: false,
				currentRoute: "depots"
				};
	}

	handleToggle = () => {
		this.setState({open: !this.state.open});
	}

	handleClose = (path) => {
		this.setState({open: false, currentRoute: path});
	}
	componentDidMount = () => {
		var lastSlash = location.href.lastIndexOf("/");
		this.setState({open: false, currentRoute: location.href.substr(lastSlash+1)});
	}

	render() {
		return (
				<Container fluid={true} className="appParentContainer">
					<Row>
						<Col md="12" className="rovrHeader">
						<i className="material-icons menuIcon" onClick={this.handleToggle}>menu</i>
						<span>ROVR for ASDA</span>
						</Col>
					</Row>
				<Drawer
					docked={false}
					width={300}
					open={this.state.open}
					onRequestChange={(open) => this.setState({open})}
					>
					<div className="sideNavHeader">
						<div className="personIcon">
							<img src="assets/img/female_user.png"/>
						</div>
						<p className="userEmail">
						<span>shelly@walmart.com</span>
						</p>
					</div>
					<div className="menuItemContainer">
						<MenuItem href="#/home/depots" className={((this.state.currentRoute == "depots" || this.state.currentRoute == "depotsdetails") ? "selectedListItem" : "")} onClick={this.handleClose.bind(this, "depots")}><i className="material-icons">store</i>Stores</MenuItem>
						<MenuItem className="subMenuItemParent" disabled={true}><i className="material-icons">build</i>Configurations</MenuItem>
							<MenuItem href="#/home/costcontrol" className={(this.state.currentRoute == "costcontrol" ? "selectedListItem subMenuItem" : "subMenuItem")} onClick={this.handleClose.bind(this, "costcontrol")}>Cost profile templates</MenuItem>
							<MenuItem href="#/home/shifttemplate" className={(this.state.currentRoute == "shifttemplate" ? "selectedListItem subMenuItem" : "subMenuItem")} onClick={this.handleClose.bind(this, "shifttemplate")}>Shift templates</MenuItem>
							<MenuItem href="#/home/slottemplate" className={(this.state.currentRoute == "slottemplate" ? "selectedListItem subMenuItem" : "subMenuItem")} onClick={this.handleClose.bind(this, "slottemplate")}>Slot templates</MenuItem>
							<MenuItem href="#/home/vehicletemplate" className={(this.state.currentRoute == "vehicletemplate" ? "selectedListItem subMenuItem" : "subMenuItem")} onClick={this.handleClose.bind(this, "vehicletemplate")}>Vehicle templates</MenuItem>
							<MenuItem href="#/home/speedprofile" className={(this.state.currentRoute == "speedprofile" ? "selectedListItem subMenuItem" : "subMenuItem")} onClick={this.handleClose.bind(this, "speedprofile")}>Speed time profile templates</MenuItem>
						<MenuItem className="subMenuItemParent" disabled={true}><i className="material-icons">near_me</i>Picking Configurations</MenuItem>
							<MenuItem href="#/home/prioritization" className={(this.state.currentRoute == "prioritization" ? "selectedListItem subMenuItem" : "subMenuItem")} onClick={this.handleClose.bind(this, "prioritization")}>Global settings</MenuItem>
							<MenuItem href="#/home/algorithms" className={(this.state.currentRoute == "algorithms" ? "selectedListItem subMenuItem" : "subMenuItem")} onClick={this.handleClose.bind(this, "algorithms")}>Algorithms</MenuItem>
							<MenuItem href="#/home/profiles" className={(this.state.currentRoute == "profiles" ? "selectedListItem subMenuItem" : "subMenuItem")} onClick={this.handleClose.bind(this, "profiles")}>Profiles</MenuItem>
							<MenuItem href="#/home/linkprofile" className={(this.state.currentRoute == "linkprofile" ? "selectedListItem subMenuItem" : "subMenuItem")} onClick={this.handleClose.bind(this, "linkprofile")}>Add stores to profile</MenuItem>
							<MenuItem href="#/home/storeprofile" className={(this.state.currentRoute == "storeprofile" ? "selectedListItem subMenuItem" : "subMenuItem")} onClick={this.handleClose.bind(this, "storeprofile")}>Add stores to exception profile</MenuItem>
					</div>
				</Drawer>
				<div className="rightBodyContainer">
					{this.props.children}
				</div>
				</Container>
		);
	}
}
					// <MenuItem href="#/home/dashboard" className={(this.state.currentRoute == "dashboard" ? "selectedListItem" : "")} onClick={this.handleClose.bind(this, "dashboard")}><i className="material-icons">multiline_chart</i>Dashboard</MenuItem>