import React from 'react';
//import {Link} from 'react-router';
import {GridList, GridTile} from 'material-ui/GridList';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const LoginPage = () => {
  return (
	<div className="loginPage">
		<div className="rovrIconContainer">
			<img  src="./assets/img/rovrIcon.png"/>
			<h1>ROVR</h1>
			<p>Resource Optimization & Vehicle Routing</p>
			</div>
			<div className="loginContainer">
				<img src="./assets/img/asdaIcon.png" className="loginContainerHeaderImage"/>
				<GridList cols={4} cellHeight={80} className="loginInputs">
					<GridTile
						cols={4}
						rows={1}>
						<TextField
						hintText=""
						floatingLabelText="User ID"
						fullWidth={true}/>
					</GridTile>
					<GridTile
						cols={4}
						rows={1}>
						<TextField
						hintText=""
						floatingLabelText="Password"
						type="password"
						fullWidth={true}/>
					</GridTile>
				</GridList>
			<RaisedButton label="Login" fullWidth={true} primary={true} className="loginButton" href="#/home/dashboard"/>
		</div>
		<p className="loginFooter">© Copyright 2017, Wal-Mart Stores, Inc. All Rights Reserved.</p>
	</div>
  );
};

export default LoginPage;
