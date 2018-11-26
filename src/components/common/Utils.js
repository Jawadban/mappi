import axios from 'axios';

export function wrapJsonPayload(data){
	var payload  = {'payload' : data};
	return payload;
	
}

export function unwrapJsonPayload(data){
	return data.payload;	
}

export function api(url, method,data=null){
	switch(method) {
		case 'get' :
			return axios.get(url, {
            headers: {modifiedBy :sessionStorage.getItem('LoginId')}
        })
		case 'post' :
			return axios.post(url,{ 
				"payload":{...data, 				
					"createdBy": sessionStorage.getItem('LoginId'),
                 	"modifiedBy": sessionStorage.getItem('LoginId')
                 },
			},{
				headers: {modifiedBy :sessionStorage.getItem('LoginId')},
			})
		case 'put' :
			return axios.put(url ,{ 
				payload: {...data,
				modifiedBy :sessionStorage.getItem('LoginId')}
			},{
				headers: {modifiedBy :sessionStorage.getItem('LoginId')},
			})
		case 'delete' :
			return axios.delete(url ,{
				headers: {modifiedBy :sessionStorage.getItem('LoginId')}})
		default:
			return axios.get(url, {
				headers: {modifiedBy :sessionStorage.getItem('LoginId')}})
	}
	
}