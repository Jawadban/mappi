import React from 'react';
import PropTypes from 'prop-types';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { push } from 'react-router-redux';


injectTapEventPlugin();

//This is a class-based component because the current
//version of hot reloading won't hot reload a stateless
//component at the top-level.
class App extends React.Component {

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
		<div className="sideNavHeader"/>
		<div className="menuItemContainer">
		<MenuItem href="#/depots" className={((this.state.currentRoute == "depots" || this.state.currentRoute == "depotsdetails") ? "selectedListItem" : "")} onClick={this.handleClose.bind(this, "depots")}><i className="material-icons">store</i>Stores</MenuItem>
			<MenuItem className="subMenuItemParent" disabled={true}><i className="material-icons">build</i>Configurations</MenuItem>
				<MenuItem href="#/costcontrol" className={(this.state.currentRoute == "costcontrol" ? "selectedListItem subMenuItem" : "subMenuItem")} onClick={this.handleClose.bind(this, "costcontrol")}>Cost profile templates</MenuItem>
				<MenuItem href="#/shifttemplate" className={(this.state.currentRoute == "shifttemplate" ? "selectedListItem subMenuItem" : "subMenuItem")} onClick={this.handleClose.bind(this, "shifttemplate")}>Shift templates</MenuItem>
				<MenuItem href="#/slottemplate" className={(this.state.currentRoute == "slottemplate" ? "selectedListItem subMenuItem" : "subMenuItem")} onClick={this.handleClose.bind(this, "slottemplate")}>Slot templates</MenuItem>
				<MenuItem href="#/vehicletemplate" className={(this.state.currentRoute == "vehicletemplate" ? "selectedListItem subMenuItem" : "subMenuItem")} onClick={this.handleClose.bind(this, "vehicletemplate")}>Vehicle templates</MenuItem>
				<MenuItem href="#/speedprofile" className={(this.state.currentRoute == "speedprofile" ? "selectedListItem subMenuItem" : "subMenuItem")} onClick={this.handleClose.bind(this, "speedprofile")}>Speed time profile templates</MenuItem>
				<MenuItem href="#/bookslot" className={(this.state.currentRoute == "bookslot" ? "selectedListItem subMenuItem" : "subMenuItem")} onClick={this.handleClose.bind(this, "bookslot")}>Book Slot</MenuItem>
				<MenuItem href="#/viewslot" className={(this.state.currentRoute == "viewslot" ? "selectedListItem subMenuItem" : "subMenuItem")} onClick={this.handleClose.bind(this, "viewslot")}>View Slot</MenuItem>
				<MenuItem href="#/holidays" className={(this.state.currentRoute == "holidays" ? "selectedListItem subMenuItem" : "subMenuItem")} onClick={this.handleClose.bind(this, "holidays")}>Holidays</MenuItem>
				<MenuItem href="#/storegroup" className={(this.state.currentRoute == "storegroup" ? "selectedListItem subMenuItem" : "subMenuItem")} onClick={this.handleClose.bind(this, "storegroup")}>Store Group</MenuItem>
				<MenuItem href="#/events" className={(this.state.currentRoute == "events" ? "selectedListItem subMenuItem" : "subMenuItem")} onClick={this.handleClose.bind(this, "events")}>Events</MenuItem>
				<MenuItem href="#/storeeventgroup" className={(this.state.currentRoute == "storeeventgroup" ? "selectedListItem subMenuItem" : "subMenuItem")} onClick={this.handleClose.bind(this, "storeeventgroup")}>Store Event Rules</MenuItem>
				<MenuItem href="#/KPI" className={(this.state.currentRoute == "KPI" ? "selectedListItem subMenuItem" : "subMenuItem")} onClick={this.handleClose.bind(this, "KPI")}>KPI</MenuItem>
		<MenuItem href="#/logout" className={((this.state.currentRoute == "logout") ? "selectedListItem" : "")} onClick={this.handleClose.bind(this, "logout")}>Logout</MenuItem>					
		    </div>
		</Drawer>
		<div className="rightBodyContainer">
		</div>
		</Container>
	);
    }
}

App.propTypes = {
	children: PropTypes.element
};

export default App;
