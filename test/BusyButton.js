define([
	'teststack!tdd',
	'teststack/chai!assert',
	'dojo/_base/window',
	'dojo/dom-class',
	'dojo/dom-construct',
	'../BusyButton',
	'dojo/domReady!'
], function (test, assert, win, domClass, domConst, BusyButton) {

	var body = win.body();
	domClass.add(body, 'claro');
	var nodeB1 = domConst.create('button', {
		id: 'b1',
		type: 'button'
	}, body);

	test.suite('BusyButton', function () {
		var b1;
		test.test('create', function () {
			b1 = new BusyButton({
				id: 'b1',
				label: 'b1'
			}, nodeB1);
			assert(b1);
			b1.startup();
		});
	});

});