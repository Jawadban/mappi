import React, {PropTypes, Component} from 'react';
import DatePicker from 'material-ui/DatePicker';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";

const data = [{name: 'R1', value: 425}, 
              {name: 'R2', value: 254},
              {name: 'R3', value: 158}, 
              {name: 'R4', value: 259}];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${data[index].name}`}
    </text>
  );
};

const AsyncGettingStartedExampleGoogleMap = withScriptjs(
		  withGoogleMap(
		    props => (
		      <GoogleMap
		        ref={props.onMapLoad}
		        defaultZoom={6}
		        defaultCenter={{ lat: 53.7986317, lng: -1.6915868 }}
		        onClick={props.onMapClick}
		      >
		      </GoogleMap>
		    )
		  )
		);

export default class HomedashboardPage extends React.Component {
	static version = Math.ceil(Math.random() * 22);
	state = {
			chartContainerWidth: 520,
			today: new Date()
	};
	componentDidMount = () => {
		var innerWidth = window.innerWidth;
		this.setState({chartContainerWidth: (innerWidth/2)-37});
	};
	render() {
	return (
<div fluid={true}>
		<div className="minHeightWithoutFooter">
			<Row>
				<Col md="12">
					<h5 className="roverSubheaderText">Dashboard</h5>
				</Col>
			</Row>
			<Row>
				<Col md="3" className="roverHeaderWithDate">
					<h5 className="roverSubSubheaderText marginTop11px">Overall stats</h5>
					<DatePicker className="rovrDatePicker" defaultDate={this.state.today} hintText="Enter date" container="inline"/>
				</Col>
			</Row>
			<Row>
				<Col md="3">
					<div className="dashboardTile">
						<img src="assets/img/tileIcon1.png"/>
						<div>
							<h3>52712</h3>
							<label>Total orders</label>
						</div>
					</div>
				</Col>
				<Col md="3">
					<div className="dashboardTile">
						<img src="assets/img/tileIcon2.png"/>
						<div>
							<h3>96%</h3>
							<label>On-time deilvery</label>
						</div>
					</div>
				</Col>
				<Col md="3">
					<div className="dashboardTile">
						<img src="assets/img/tileIcon3.png"/>
						<div>
							<h3>3.2</h3>
							<label>Miles per order</label>
						</div>
					</div>
				</Col>
				<Col md="3">
					<div className="dashboardTile">
						<img src="assets/img/tileIcon4.png"/>
						<div>
							<h3>89%</h3>
							<label>Capacity utilization</label>
						</div>
					</div>
				</Col>
			</Row>
			<Row>
				<Col md="12">
				<h5 className="roverSubSubheaderText marginTop11px">On Time</h5>
				<h5 className="roverSubSubheaderText chartTextPie">By regions</h5>
				</Col>
			</Row>
			<Row>
				<Col md="6">
					<PieChart className="containerShadow" width={this.state.chartContainerWidth} height={400}>
			        <Pie
			          data={data} 
			          cx={this.state.chartContainerWidth/2} 
			          cy={200}
			          outerRadius={140}
			        	innerRadius={80}
			          fill="#8884d8"
			        	  labelLine={false}
			          label={renderCustomizedLabel}>
			        {
			          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
			          }
			        </Pie>
			        <Tooltip/>
			      </PieChart>
				</Col>
				<Col md="6">
					<div className="mapContainer">
						<h5 className="roverSubSubheaderText">Live order view</h5>
						<AsyncGettingStartedExampleGoogleMap
					    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp"
					    loadingElement={
					      <div style={{ height: `100%` }}>
					        Loading.....
					      </div>
					    }
					    containerElement={
					      <div style={{ height: `361px` }} />
					    }
					    mapElement={
					      <div style={{ height: `361px` }} />
					    }
					    onMapLoad={_.noop}
					    onMapClick={_.noop}
					    onMarkerRightClick={_.noop}
					  />
						</div>
				</Col>
			</Row>
			</div>
			<div>
				<p className="mainFooter">© Copyright 2017, Wal-Mart Stores, Inc. All Rights Reserved.</p>
			</div>
		</div>
  );
}
}
