const RULE_TYPE_CONTAINS = 1;
const RULE_TYPE_REGX     = 2;
const RULE_TYPE_INARRAY  = 3;
const HIDE_DURATION      = 1000;
const NOTICE_ID          = 'webenv-sticker-notice-'+new Date().getTime();
const COMMON_CSS = [
    {'attribute':"border-radius",'value': "45px"},
    {'attribute':"display",'value': "block"},
    {'attribute':"font-size",'value': "20px"},
    {'attribute':"font-weight",'value': "bold"},
    {'attribute':"box-sizing",'value': "content-box"},
    {'attribute':"left",'value': "0"},
    {'attribute':"margin",'value': "5px"},
    {'attribute':"padding",'value': "10px 30px"},
    {'attribute':"position",'value': "fixed"},
    {'attribute':"text-align",'value': "center"},
    {'attribute':"top",'value': "0"},
    {'attribute':"width",'value': "140px"},
    {'attribute':"z-index",'value': "9999"},
    {'attribute':"line-height",'value': "1.5"},
    {'attribute':"opacity",'value': ".7"},
];

var Site = {
		'development' : {
				'Notice' : 'Development',
				'Css'    : [
							{'attribute':'color','value': '#20B2AA'},
							{'attribute':'background-color','value':'#98FB98'},
							]
			},
		'staging'     : {
				'Notice' : 'Staging',
				'Css'    : [
							{'attribute':'color','value': '#F00'},
							{'attribute':'background-color','value':'#FFA500'},
							]
			},
		'production'  : {
				'Notice' : 'Production',
				'Css'    : [
							{'attribute':'color','value': '#FFF'},
							{'attribute':'background-color','value':'#F00'},
							]
			},
	};
