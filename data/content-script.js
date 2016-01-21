var envDefined = false;
if(rules instanceof Array && rules.length > 0) {
	var currentHostname = window.location.hostname;
	var i = 0;
	do {
		var rule = rules[i];
		switch(rule.type) {
			case RULE_TYPE_CONTAINS:	
					if(!envDefined && currentHostname.indexOf(rule.condition) >= 0) {
						rule.action();
						envDefined = true;
					};
					break;
			case RULE_TYPE_INARRAY:	
					var filtredArray = rule.condition.filter(function(el){return currentHostname.indexOf(el) >= 0});
					if(!envDefined && filtredArray.length>0) {
						rule.action();
						envDefined = true;
					};
					break;
			case RULE_TYPE_REGX:	
					if(!envDefined && currentHostname.match(rule.condition)) {
						rule.action();
						envDefined = true;
					};
					break;
		}
		i++;
	} while(!envDefined || i<rules.length);
}
