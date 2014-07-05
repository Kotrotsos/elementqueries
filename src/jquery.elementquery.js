
;(function ( $, window, document, undefined ) {
		var pluginName = "elementquery",
				defaults = {
					breakpoints: [ 
						{  "bp": 600 ,"classname": "eq-phone" },
						{  "bp": 768 ,"classname": "eq-tablet" }, 
						{  "bp": 1024 ,"classname": "eq-desktop" }],
					debounce: 500
				};


		function ElementQuery ( element, options ) {
			this.element = element;
			this.settings = $.extend( {}, defaults, options );
			this._defaults = defaults;
			this._name = pluginName;
			this.init();
		}
		$.extend(ElementQuery.prototype, {
			init: function () {
				var settings = this.settings;
				this.setElementQueries( settings );
				var $this = this;

				var resizeTimer;
				$(window).resize(function () {
				    if (resizeTimer) {
				        clearTimeout(resizeTimer);   // clear any previous pending timer
				    }
				     // set new timer
				    resizeTimer = setTimeout(function() {
				        resizeTimer = null;
				        $this.setElementQueries( settings );
				    }, settings.debounce);  
				})


				 
			},
			setElementQueries: function(settings) {
				var set = $( this.element ),
					eqbp = settings.breakpoints; 
				 
				$.each(set, function( ) {
					var element = $(this),
						computedWidth = element.width(),
						classname  = element.attr( "class" ),
						classlist = [];

					eqbp.forEach(function(obj) { 
						classlist.push( obj.classname ); 
					});

					var classlistRegExp = new RegExp(classlist.join("|") + '+','g')
					element.attr("class", classname.replace( classlistRegExp, "" )); 

					console.log("container width ", computedWidth);
					var classesToAdd = eqbp.filter(function (el) { 
							return el.bp <= computedWidth; 
					});

					classesToAdd.forEach(function(obj) { 
						element.addClass( obj.classname ); 
					});
				});
			}
		});


		$.fn[ pluginName ] = function ( options ) {
				this.each(function() {
						if ( !$.data( this, "plugin_" + pluginName ) ) {
								$.data( this, "plugin_" + pluginName, new ElementQuery( this, options ) );
						}
				});
				return this;
		};

})( jQuery, window, document );
