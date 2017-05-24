# Implementation of Paul Irish’s DOM-based Routing

Forked from [KnowitLabs/DOM-based-routing](https://github.com/KnowitLabs/DOM-based-routing)

An implementation of the *DOM-based Routing* tecnique using [Codekit](https://codekitapp.com/) for joining files.


## Structure

The goal of this implementation is to split large files into smaller ones to make editing easier. All files are  joined and syntax-checked using Codekit (you can else use Gulp/Grunt/etc.).

In the same time, using DOM-based routing, we can trigger automatically on each page the function needed.

The main file is `myapp.js` that, after being processed, produces `myapp-min.js`.

```js
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
```

The `__common.js` file sets the namespace, and istantiates some shared procedures (if you need them):

```js
/* jshint undef: true, unused: true, devel: true, curly: false, eqeqeq: false */
/* exported my_namespace */

var my_namespace = { // namespace
	// shared procedures, enable if you need
/*
	common: {
		init: function() {
			// JS
			// Lightbox, navigation etc
		},
		finalize: function() {
			// JS
		}
	},
*/
};
```

Now we can create some files, each of them related to a specific page or to a group of them (you can play with `controller` and `action` items to accommodate them in the best way).

Each file should be something like this:

```js
/* jshint undef: true, unused: true, devel: true, curly: false, eqeqeq: false */
/* globals my_namespace */


my_namespace.mypage = {
	init: function() {
		// JS
		alert('ok');
	},
	// action1 : function () {} // enable if you need
};
```

Now, all you need is to link `myapp-min.js` to your page and add to each body tag a `data-controller` and `data-action` (if you need) attribute.

More info in the articles reported below.

## References

Original [ReadMe](original_README.md) from Knowit Labs.

**Paul Irish**: [Markup-based Unobtrusive Comprehensive DOM-ready Execution](https://www.paulirish.com/2009/markup-based-unobtrusive-comprehensive-dom-ready-execution/)

**Jason Garber**: [Extending Paul Irish’s comprehensive DOM-ready execution](https://www.viget.com/articles/extending-paul-irishs-comprehensive-dom-ready-execution)