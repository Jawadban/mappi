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

export default class StoreProfilePage extends React.Component {
	  constructor(props) {
	    super(props);
	    this.state = { 
	    		open: false,
			    fulfillmentType: [],
			    commodity: 1,
			    order: 1,
			    locs: 1,
			    algo: 1,
			    tableData: [{store: "4137-Asthon", priority: "1", type: "Default", def: "Christmas store", exc1from:"07/08/2017", exc1to: "09/08/2017", def2: "Halloween stores", exc2from:"07/08/2017", exc2to: "09/08/2017"},
			                {store: "4578-Dewsbury", priority: "1",type: "Default",  def: "Easter store", exc1from:"11/08/2017", exc1to: "12/12/2017", def2: "Halloween stores", exc2from:"07/08/2017", exc2to: "09/08/2017"}
			    			],
			    selectedRows: [],
			    selectedRowCount: 0
	    };
	  }
	  handleOpen = () => {
	    this.setState({open: true});
	  };
	
	  handleClose = () => {
	    this.setState({open: false});
	  };
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
	          title="New exception profile"
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
					<SelectField 
					  fullWidth={true}
					  multiple={true}
			          floatingLabelText="Store name"
			          value={this.state.fulfillmentType}
			          onChange={this.handleChangeFulfillmentType}
			        >
			          <MenuItem value={1} primaryText="4137-Asthon" />
			          <MenuItem value={2} primaryText="4578-Dewsbury" />  
			        </SelectField>
					</Col>
					<Col md="4">
						<SelectField fullWidth={true}
				          floatingLabelText="Exception profile"
				          value={this.state.order}
				          onChange={this.handleChangeOrder}
				        >
				          <MenuItem value={1} primaryText="Christmas store" />  
				          <MenuItem value={2} primaryText="Easter store" /> 
				          <MenuItem value={2} primaryText="Halloween store" /> 
				       </SelectField>
					</Col>
					{/*
					<Col md="2">
						<SelectField fullWidth={true}
				          floatingLabelText="Priority"
				          value={this.state.commodity}
				          onChange={this.handleChangeCommodity}
				        >
				          <MenuItem value={1} primaryText="1" />  
				          <MenuItem value={2} primaryText="2" />
				          <MenuItem value={3} primaryText="3" /> 
				          <MenuItem value={4} primaryText="4" />
				          <MenuItem value={5} primaryText="5" />
				       </SelectField>
					</Col>
					*/}
				</Row>
				<Row>
				<Col md="2">
					<DatePicker fullWidth={true} floatingLabelText="From date" container="inline" />
				</Col>
				<Col md="2">
					<DatePicker fullWidth={true} floatingLabelText="To date" container="inline" />
				</Col>
				</Row>
			</div>
	        </Dialog>
			<div className="minHeightWithoutFooter">
			<Row>
				<Col md="12">
					<h5 className="roverSubheaderText">Add store to exception profile</h5>
				</Col>
			</Row>
			<Row>
				<Col md="12" className="rowContainingTable">
				<Table className="rovrMaterialTable exceptionProfilePage" selectable={false} multiSelectable={false} onRowSelection={this.handleRowSelection}>
			    <TableHeader className="tableHeaderTextColor" displaySelectAll={false} adjustForCheckbox={false}>
			    <TableRow>
	              <TableHeaderColumn className="tableSuperHeader" colSpan="8" style={{textAlign: 'left'}}>
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
				        <TableHeaderColumn>Store</TableHeaderColumn>
				        <TableHeaderColumn>Exc profile 1</TableHeaderColumn>
				        <TableHeaderColumn>From</TableHeaderColumn>
				        <TableHeaderColumn>To</TableHeaderColumn>
				        <TableHeaderColumn>Exc profile 2</TableHeaderColumn>
				        <TableHeaderColumn>From</TableHeaderColumn>
				        <TableHeaderColumn>To</TableHeaderColumn>
				        <TableHeaderColumn className="textAlignRight">Actions</TableHeaderColumn>
				      </TableRow>
				    </TableHeader>
				    <TableBody displayRowCheckbox={false} deselectOnClickaway={false}>
				      {this.state.tableData.map((d, i) => {
				    	    return <TableRow key={i} selectable={true} selected={this.state.selectedRows.indexOf(i) !== -1}>
					    	    <TableRowColumn><a onTouchTap={this.handleOpen}>{d.store}</a></TableRowColumn>
						        <TableRowColumn>{d.def}</TableRowColumn>
						        <TableRowColumn>{d.exc1from}</TableRowColumn>
						        <TableRowColumn>{d.exc1to}</TableRowColumn>
						        <TableRowColumn>{d.def2}</TableRowColumn>
						        <TableRowColumn>{d.exc2from}</TableRowColumn>
						        <TableRowColumn>{d.exc2to}</TableRowColumn>
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
