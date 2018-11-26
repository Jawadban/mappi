import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Cookies from 'universal-cookie';
import { parse } from 'query-string';
import axios from 'axios';
var jwt = require('jsonwebtoken');
import App from './components/common/App';
// import DepotsPage from './components/depot/DepotsPage';
const https = require('https')


export default (
	<Route path="/" component={App} >
		<IndexRoute component={App} />
		<Route path="*" component={App}/>
	</Route>



);
