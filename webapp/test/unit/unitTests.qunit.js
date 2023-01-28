/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"edu/ap/be/zsd042materiallist2/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});