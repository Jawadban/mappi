import $ from 'jquery';
import {unwrapJsonPayload, wrapJsonPayload} from './Utils'
export function makeServerCall(options, that, allowParallelCalls, errorMsg) {
	var defaults, settings;
	defaults = {
			//crossOrigin: true,
			contentType: 'application/json',
			beforeSend: function(xhrObj){
                xhrObj.setRequestHeader("modifiedBy",sessionStorage.getItem('LoginId'));
        	},
			dataType: 'json',
			cache: false,
			error: function(xhr, status, err) {
				this.setState({serverCallInProgress: false});
				if(xhr.responseJSON && xhr.responseJSON.errors
						&& xhr.responseJSON.errors[0]){
					var errorText = xhr.responseJSON.errors[0].description;
					this.setState({error: true, errorMsg : errorText});
				}else{
					if(errorMsg){
						this.setState({error: true, errorMsg : errorMsg});
					}else{
						var err = eval("(" + xhr.responseText + ")");
						this.setState({error: true, errorMsg : 'Error During Operation' + err.Message});
					}
				}
				console.error(this.props.url, status, err.toString());
			}.bind(that)
 	};
	 console.log(options, 'options')
	settings = $.extend(defaults, options);

	if(options){
		if(options.type == "PUT" ) {
			const payload = unwrapJsonPayload(JSON.parse(options.data))
			payload.modifiedBy = sessionStorage.getItem('LoginId')

			options.data = JSON.stringify(wrapJsonPayload(payload));
		}
		if(options.type == "POST") {
			const payload = unwrapJsonPayload(JSON.parse(options.data))
			payload.createdBy = sessionStorage.getItem('LoginId')
			payload.modifiedBy = sessionStorage.getItem('LoginId')

			options.data = JSON.stringify(wrapJsonPayload(payload));
		}
		if(allowParallelCalls  || !that.state.serverCallInProgress){
			if(!allowParallelCalls){
				that.setState({serverCallInProgress: true});
			}
			console.log("Making API Call  - " + JSON.stringify(settings));
			$.ajax(settings);
		}
	}
}