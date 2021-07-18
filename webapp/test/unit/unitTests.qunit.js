/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ovly/fiori64/worklistplantas/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});