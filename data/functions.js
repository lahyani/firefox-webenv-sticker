function commonAction(env){
	var error = false;
	var errorMessage = '';	
    if(arguments.length === 0) {    
		error = true;
		errorMessage = "commonAction: Missing Parameter.";
	}
	if(typeof env !== 'string') {
		error = true;
		errorMessage = "commonAction: Invalid Parameter Type.";
	}
	env = env.toLowerCase();
	if( ['development','staging','production'].indexOf(env) < 0 ) {
		error = true;
		errorMessage = "commonAction: Invalid Parameter Value.";
	}
	if(error) {
		throw(errorMessage);
		return;
	}
	var hostname = location.hostname;
	var label = hostname;
	var matches = /(.*)\.dev\.absolunet.com/i.exec(hostname);
	if(matches) {
	    label = matches[1];
	}else{
		matches = /.*\.(.*)\.[a-z]/i.exec(hostname);
		if(matches) {
			if(matches.length>=2){
				label = matches[1];
			}
		}else{
			matches = /(.*)\.[a-z]/i.exec(hostname);
			if(matches) {
				if(matches.length>=2){
					label = matches[1];
				}
			}
		 }
	}
	var $notice = $('<div>');
	$notice.attr({id:NOTICE_ID})
		   .addClass(NOTICE_ID)
		   .addClass(env)
		   .addClass(label)
		   .html( Site[env].Notice + "<br/>" + label.toUpperCase() );
		   
	for(i in  COMMON_CSS){
		var style = COMMON_CSS[i];
		$notice.css(style.attribute,style.value);
	}
	
	for(i in  Site[env].Css){
		var style = Site[env].Css[i];
		$notice.css(style.attribute,style.value);
	}
	
	$notice.bind('mouseover',
          function(){
			  $notice.hide();
              setTimeout(function(){$notice.show();},HIDE_DURATION);
          }
	);
	
	var $body = $('body');
	$body.append($notice);
}
