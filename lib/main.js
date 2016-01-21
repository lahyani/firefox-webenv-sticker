var data = require("sdk/self").data;
var tabs = require("sdk/tabs");

tabs.on('ready', function(tab) {
  tab.attach({
      contentScriptFile: [data.url("jquery.min.js"),data.url("constants.js"),data.url("functions.js"),data.url("rules.js"),data.url("content-script.js")]      
  });
});
