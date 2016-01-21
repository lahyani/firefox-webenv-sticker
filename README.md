# firefox-webenv-sticker
This Firefox extension help you to identify your web environment (dev, staging or prod).

First you have to rename the file _<rules-example.js>_ to _<rules.js>_.

You have to edit file _<data/rules.js>_ to set your web site projects. To customize css check file _<data/constants.js>_.

After setting your personal color and site. From command line enter jpm run to test the extension. To generate the extension enter _jpm xpi_

Requirement:

NodeJs

Firefox Addons SDK (npm install jpm --global)

You have enable xpi security before to add the extension

On Firefox enter: about:config

Find the option : xpinstall.signatures.required

Toggle it to true
