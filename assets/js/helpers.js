(function() {

	Object.prototype.getKeyByValue = function( value ) {
		for( var prop in this ) {
			if( this.hasOwnProperty( prop ) ) {
				if( this[ prop ] === value )
					return prop;
			}	
		}
	}; 

	Handlebars.registerHelper('format', function(context, options) {
		var fn = options.fn, inverse = options.inverse;
		var ret = "";
		if(context) {
			for(var i=0, j=context.length; i<j; i++) {
				ret = ret + fn(_.extend({}, context[i], {
					//is this necessary?
					displayCharacterDetails: true,
					name: context[i].name,
					job: context[i].job,
					first: (i == 0),
					third: (i == 2),
					last: (i == 5)
				}));
			}

		} else {
			ret = inverse(this);
		}
		return ret;
	});


})();