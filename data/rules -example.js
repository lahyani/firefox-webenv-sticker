var rules = [
		{
			'condition'   : ['example.com','example.org'],
			'type'        : RULE_TYPE_INARRAY,
			'action'      : function(){
								commonAction('production');
							}
		},
		{
			'condition'   : 'staging.example.com)$',
			'type'        : RULE_TYPE_CONTAINS,
			'action'      : function(){
								commonAction('staging');
							}
		},
		{
			'condition'   : ['(^dev\\..*$)|(^.*\\.dev$)'],
			'type'        : RULE_TYPE_REGX,
			'action'      : function(){
								commonAction('development');
							}
		}
	];
