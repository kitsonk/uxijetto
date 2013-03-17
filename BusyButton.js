define([
	'dojo/_base/declare',
	'dijit/form/Button',
	'./_BusyButtonMixin'
], function (declare, Button, _BusyButtonMixin) {

	return declare([Button, _BusyButtonMixin], {
		// summary:
		//		BusyButton is a simple widget which provides implementing more
		//		user friendly form submission.
		// description:
		//		When a form gets submitted by a user, many times it is recommended to disable
		//		the submit buttons to prevent double submission. BusyButton provides a simple set
		//		of features for this purpose

	});

});