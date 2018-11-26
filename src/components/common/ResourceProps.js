import React from 'react';

const APP_RESOUCE_CONTEXT = '/rovr-app/services/admin' ;

const ResourceProps = {

		DEPOTS: {
			resourcePath : APP_RESOUCE_CONTEXT + '/deliverystartpoint',
			displayProps :{
				elementLinkBaseUrl : 'deliverystartpoint',     // base of the url to a specific element(Monitor in this case)
				elementLinkProperty : 'externalId' //name of the property whose value is used in the link to the details page
			}


		},
		STW: {
			resourcePath : APP_RESOUCE_CONTEXT + '/speedTimeWindow'
		},
		STWRULE: {
			resourcePath : APP_RESOUCE_CONTEXT + '/speedTimeWindowRule'
		},
		COSTCONTROLRULE: {
			resourcePath : APP_RESOUCE_CONTEXT + '/costControlRule'
		},
		COSTCONTROL: {
			resourcePath : APP_RESOUCE_CONTEXT + '/costGroup'
		},
		COSTPARAMETER: {
			resourcePath : APP_RESOUCE_CONTEXT + '/costParameter'
		},
		SLOT: {
			resourcePath : APP_RESOUCE_CONTEXT + '/slottype'
		},
		VEHICLETYPE: {
			resourcePath : APP_RESOUCE_CONTEXT + '/vehicletype'
		},
		VEHICLESBYTYPE: {
			resourcePath : APP_RESOUCE_CONTEXT + '/vehicle/vehicletype'
		},
		VEHICLES: {
			resourcePath : APP_RESOUCE_CONTEXT + '/vehicle'
		},
		VEHICLE_SHIFT_RULE: {
			resourcePath : APP_RESOUCE_CONTEXT + '/vehicleshiftrules'
		},
		SHIFT_TYPE: {
			resourcePath : APP_RESOUCE_CONTEXT + '/shifttype'
		}

};

export { ResourceProps, APP_RESOUCE_CONTEXT};
