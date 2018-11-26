import React, {PropTypes, Component} from 'react';
import DatePicker from 'material-ui/DatePicker';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';

import {
	  Table,
	  TableBody,
	  TableHeader,
	  TableHeaderColumn,
	  TableRow,
	  TableRowColumn,
	} from 'material-ui/Table';

export default class ProfilesPage extends React.Component {
	  constructor(props) {
	    super(props);
	    this.state = { 
	    		open: false,
			    fulfillmentType: 1,
			    commodity: 1,
			    order: 1,
			    locs: 1,
			    algo: 1,
			    tableData: [{profile: "Super markets", comm: "Ambient", volume: "68000", bag: "70", weight: "30", active: "Yes"}, {profile: "Store markets", comm: "Ambient", volume: "28000", bag: "90", weight: "20", active: "Yes"}],
			    selectedRows: [],
			    selectedstore: [],
			    selectedRowCount: 0
	    };
	  }
	  handleOpen = () => {
	    this.setState({open: true});
	  };
	
	  handleClose = () => {
	    this.setState({open: false});
	  };
	  
	  handleChangeStores = (event, index, values) => this.setState({selectedstore: values});
	  
	  handleChangeFulfillmentType = (event, index, value) => this.setState({fulfillmentType: value});
	  handleChangeCommodity = (event, index, value) => this.setState({commodity: value});
	  handleChangeOrder = (event, index, value) => this.setState({order: value});
	  handleChangeLocs = (event, index, value) => this.setState({locs: value});
	  
	  handleRowSelection = (selectedRows) => {
		  this.setState({selectedRows: selectedRows.slice(0)});
		  if(selectedRows == "all"){
			  this.setState({selectedRowCount: 1000});  
		  }
		  else if(selectedRows == "none"){
			  this.setState({selectedRowCount: 0});  
		  }
		  else{
			  this.setState({selectedRowCount: selectedRows.length});
		  }
	  }
	
	render() {
		const actions = [
		                 <FlatButton
		                   label="Cancel"
		                   primary={true}
		                   onTouchTap={this.handleClose}
		                 />,
		                 <FlatButton
		                   label="Add"
		                   primary={true}
		                   keyboardFocused={true}
		                   onTouchTap={this.handleClose}
		                 />,
		               ];

	return (
			<div fluid={true}>
			<Dialog
	          title="New profile"
	          actions={actions}
	          modal={false}
	          open={this.state.open}
	          onRequestClose={this.handleClose}
			  className="rovrDialog"
		      actionsContainerClassName="rovrDialogFooter"
		      bodyClassName="rovrDialogBody"
	        >
			<div fluid={true}>
				<i className="material-icons dialogCloseBtn" onTouchTap={this.handleClose}>close</i>
				<Row>
					<Col md="4">
					<TextField
					  fullWidth={true}
				      defaultValue=""
				      floatingLabelText="Profile name"
				    />
					</Col>
					<Col md="2">
					<SelectField fullWidth={true}
			          floatingLabelText="Commodity"
			          value={this.state.commodity}
			          onChange={this.handleChangeCommodity}
			        >
			          <MenuItem value={1} primaryText="Ambient" />
			          <MenuItem value={2} primaryText="Chilled" />
			          <MenuItem value={3} primaryText="Frozen" />
			          <MenuItem value={4} primaryText="Short life" />
			          <MenuItem value={5} primaryText="MTO" />	  
			          <MenuItem value={6} primaryText="Default" />
			          <MenuItem value={7} primaryText="Unknown" />	  
			        </SelectField>
					</Col>
					{/*
					<Col md="6">
					<SelectField fullWidth={true}
			          floatingLabelText="Select stores"
			          multiple={true}
			          value={this.state.selectedstore}
			          onChange={this.handleChangeStores}
			        >
			          <MenuItem value={1} primaryText="4137-Asthon" />
			          <MenuItem value={2} primaryText="4587-Dewesbury" /> 
			        </SelectField>
					</Col>
					*/}
				</Row>
				<Row className="marginTop11px">
					<Col md="6">
						<p className="marginBottomNeg20px">Parameters</p>
					</Col>
				</Row>
				<Row>
					<Col md="2">
						<p className="dialogSubSubText indentText">Tote volume (litre)</p>
					</Col>
					<Col md="2">
						<TextField fullWidth={true} floatingLabelText=" " />
					</Col>
					<Col md="2">
						<p className="dialogSubSubText indentText">No volume default (litre)</p>
					</Col>
					<Col md="2">
						<TextField fullWidth={true} floatingLabelText=" " />
					</Col>
					<Col md="2">
						<p className="dialogSubSubText indentText">Walk speed (mt/sec)</p>
					</Col>
					<Col md="2">
						<TextField fullWidth={true} floatingLabelText=" " />
					</Col>
				</Row>
				<Row>
					<Col md="2">
						<p className="dialogSubSubText indentText">Bagged reduction (%)</p>
					</Col>
					<Col md="2">
						<TextField fullWidth={true} floatingLabelText=" " />
					</Col>
					<Col md="2">
						<p className="dialogSubSubText indentText">No weight default (kg)</p>
					</Col>
					<Col md="2">
						<TextField fullWidth={true} floatingLabelText=" " />
					</Col>
					<Col md="2">
						<p className="dialogSubSubText indentText">Turn speed (mt/sec)</p>
					</Col>
					<Col md="2">
						<TextField fullWidth={true} floatingLabelText=" " />
					</Col>
				</Row>
				<Row>
					<Col md="2">
						<p className="dialogSubSubText indentText">Tote weight (kg)</p>
					</Col>
					<Col md="2">
						<TextField fullWidth={true} floatingLabelText=" " />
					</Col>
					<Col md="2">
						<p className="dialogSubSubText indentText">Small volume limit (litre)</p>
					</Col>
					<Col md="2">
						<TextField fullWidth={true} floatingLabelText=" " />
					</Col>
					<Col md="2">
						<p className="dialogSubSubText indentText">Seek time (sec)</p>
					</Col>
					<Col md="2">
						<TextField fullWidth={true} floatingLabelText=" " />
					</Col>
			    </Row>
			    <Row>
					<Col md="2">
						<p className="dialogSubSubText indentText">Tote per trolley (integer)</p>
					</Col>
					<Col md="2">
						<TextField fullWidth={true} floatingLabelText=" " />
					</Col>
					<Col md="2">
						<p className="dialogSubSubText indentText">Small volume qty cap (integer)</p>
					</Col>
					<Col md="2">
						<TextField fullWidth={true} floatingLabelText=" " />
					</Col>
					<Col md="2">
						<p className="dialogSubSubText indentText">Scan and bag time (sec)</p>
					</Col>
					<Col md="2">
						<TextField fullWidth={true} floatingLabelText=" " />
					</Col>
				</Row>
				<Row>
					<Col md="2">
						<p className="dialogSubSubText indentText">Max pick duration (min)</p>
					</Col>
					<Col md="2">
						<TextField fullWidth={true} floatingLabelText=" " />
					</Col>
					<Col md="2">
						<p className="dialogSubSubText indentText">Max loads to cross (integer)</p>
					</Col>
					<Col md="2">
						<TextField fullWidth={true} floatingLabelText=" " />
					</Col>
						<Col md="2">
						<p className="dialogSubSubText indentText">Tote time (sec)</p>
					</Col>
					<Col md="2">
						<TextField fullWidth={true} floatingLabelText=" " />
					</Col>
				</Row>
				<Row>
					<Col md="2">
						<p className="dialogSubSubText indentText">Item limit (integer)</p>
					</Col>
					<Col md="2">
						<TextField fullWidth={true} floatingLabelText=" " />
					</Col>
					<Col md="2">
						<p className="dialogSubSubText indentText">Max window cross (mins)</p>
					</Col>
					<Col md="2">
						<TextField fullWidth={true} floatingLabelText=" " />
					</Col>
					<Col md="2">
						<p className="dialogSubSubText indentText">Algorithm specification</p>
					</Col>
					<Col md="2">
						<SelectField fullWidth={true}
				          floatingLabelText=" "
				          value={this.state.algo}
				          onChange={this.handleChangeAlgo}
				        >
				          <MenuItem value={1} primaryText="Genetic final pass" /> 
				        </SelectField>
					</Col>
				</Row>
				<Row>
					<Col md="2">
						<p className="dialogSubSubText indentText">Order limit (integer)</p>
					</Col>
					<Col md="2">
						<TextField fullWidth={true} floatingLabelText=" " />
					</Col>
					<Col md="2">
						<p className="dialogSubSubText indentText">Tote ordering</p>
					</Col>
					<Col md="2">
						<SelectField fullWidth={true}
				          floatingLabelText=" "
				          value={this.state.order}
				          onChange={this.handleChangeOrder}
				        >
				          <MenuItem value={1} primaryText="Most first item" />
				          <MenuItem value={2} primaryText="Most last item" />  
				        </SelectField>
					</Col>
				</Row>
				<Row>
					<Col md="2">
						
					</Col>
					<Col md="2">
					</Col>
						<Col md="2">
						<p className="dialogSubSubText indentText">Secondary locs</p>
					</Col>
					<Col md="2">
						<SelectField fullWidth={true}
				          floatingLabelText=" "
				          value={this.state.locs}
				          onChange={this.handleChangeLocs}
				        >
				          <MenuItem value={1} primaryText="Local search" />
				          <MenuItem value={2} primaryText="Global search" />  
				        </SelectField>
					</Col>
				</Row>
			</div>
	        </Dialog>
			<div className="minHeightWithoutFooter">
			<Row>
				<Col md="12">
					<h5 className="roverSubheaderText">Profiles</h5>
				</Col>
			</Row>
			<Row>
				<Col md="12" className="rowContainingTable">
				<Table className="rovrMaterialTable" selectable={false} multiSelectable={false} onRowSelection={this.handleRowSelection}>
			    <TableHeader className="tableHeaderTextColor" displaySelectAll={false} adjustForCheckbox={false}>
			    <TableRow>
	              <TableHeaderColumn className="tableSuperHeader" colSpan="7" style={{textAlign: 'left'}}>
		              <div className={((this.state.selectedRowCount > 0 ) ? "tableHeaderLeftButtons hideContent" : "tableHeaderLeftButtons")}>
	              		<FlatButton label="Add new" primary={true} onTouchTap={this.handleOpen}/>
	              		<div>
		              		<TextField className="headerSearchInput" hintText="Search"/>
		              		<IconButton tooltip="" className="tableheaderSearchIcon">
			              		<i className="material-icons">search</i>
			              	</IconButton>
			            </div>
	              	</div>
	              	<div className={((this.state.selectedRowCount > 0 ) ? "tableHeaderRightButtons" : "tableHeaderRightButtons hideContent")}>
		              	<IconButton tooltip="Delete">
		              		<i className="material-icons color3">delete</i>
		              	</IconButton>
	              	</div>
	              </TableHeaderColumn>
		            </TableRow>
				      <TableRow className="materialTableHeaderColor">
				        <TableHeaderColumn>Profile</TableHeaderColumn>
				        <TableHeaderColumn>Commodity</TableHeaderColumn>
				        <TableHeaderColumn>Tote volume</TableHeaderColumn>
				        <TableHeaderColumn>Bagged reduction</TableHeaderColumn>
				        <TableHeaderColumn>Tote weight</TableHeaderColumn>
				        <TableHeaderColumn>Active</TableHeaderColumn>
				        <TableHeaderColumn className="textAlignRight">Actions</TableHeaderColumn>
				      </TableRow>
				    </TableHeader>
				    <TableBody displayRowCheckbox={false} deselectOnClickaway={false}>
				      {this.state.tableData.map((d, i) => {
				    	    return <TableRow key={i} selectable={true} selected={this.state.selectedRows.indexOf(i) !== -1}>
					    	    <TableRowColumn><a onTouchTap={this.handleOpen}>{d.profile}</a></TableRowColumn>
						        <TableRowColumn>{d.comm}</TableRowColumn>
						        <TableRowColumn>{d.volume}</TableRowColumn>
						        <TableRowColumn>{d.bag}</TableRowColumn>
						        <TableRowColumn>{d.weight}</TableRowColumn>
						        <TableRowColumn>{d.active}</TableRowColumn>
						        <TableRowColumn className="tableBodyActionBtns">
				              		<IconButton>
					              		<i className="material-icons color3">delete</i>
					              	</IconButton>
					    	    </TableRowColumn>
				    	    </TableRow>
				       })}
				    </TableBody>
				  </Table>
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
