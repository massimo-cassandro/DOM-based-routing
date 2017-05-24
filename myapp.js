/* jshint undef: true, unused: true, devel: true, curly: false, eqeqeq: false */
/* globals my_namespace */

/*
	@codekit-prepend '__common.js';
	@codekit-prepend '_script.js';
*/


(function() {
	"use strict";

	var UTIL = {
		exec: function( controller, action ) {
			var ns = my_namespace; // Change the namespace
			action = ( action === undefined ) ? "init" : action;

			if ( controller !== "" && ns[controller] && typeof ns[controller][action] == "function" ) {
				ns[controller][action]();
			}
		},

		init: function() {
			var body = document.body,
				controller = body.getAttribute( "data-controller" ),
				action = body.getAttribute( "data-action" );

			UTIL.exec( "common" );  //
			UTIL.exec( controller );
			UTIL.exec( controller, action );
			UTIL.exec( "common" , "finalize" );
		}
	};

	UTIL.init();

})();
