/*!
 * Auto Complete [VERSION]
 * [DATE]
 * Corey Hart @ http://www.codenothing.com
 */ 
(function( jQuery, window ) {

var AutoCompletes = {

	// Normal Auto-complete initiation
	search1: function(){
		jQuery('input[name=search1]').autoComplete();

		// Add enabling feature (disable to begin with)
		jQuery('input[name=enable-1]').attr('disabled', 'true').click(function(){
			jQuery('input[name=search1]').autoComplete();
			jQuery('input[name=destroy-1]').attr('disabled', false);
			jQuery(this).attr('disabled', 'true');
		});
		// Add disabling feature
		jQuery('input[name=destroy-1]').click(function(){
			jQuery('input[name=search1]').autoComplete('destroy');
			jQuery('input[name=enable-1]').attr('disabled', false);
			jQuery(this).attr('disabled', 'true');
		});
	},

	// Auto-complete preventing form submission, and firing onSelect function
	search2: function(){
		jQuery('input[name=search2]').autoComplete({
			// preventEnterSubmit is already flagged true by default
			onSelect: function( event, ui ) {
				alert('You have selected ' + ui.data.value);
			}
		});
	},

	// Auto-complete using separate ajax script/post values
	search3: function(){
		jQuery('input[name=search3]').autoComplete({
			ajax: 'ajax2.php',
			postData: {
				hook1: 'Do something on hook1',
				hook2: 1942,
				hook3: 'Do something with hook3'
			},
			postFormat: function(event, ui){
				// Add the current timestamp to each request
				ui.data.requestTimestamp = (new Date()).getTime();

				// Return the data object to be passed with the ajax function
				return ui.data;
			}
		});
	},

	// Auto-complete using metadata and maximum requests
	search4: function(){
		jQuery('input[name=search4]').autoComplete({
			onMaxRequest: function(event, ui){
				jQuery(this).css('background-color', 'red');
				alert('Sorry, but you have used up the maximum number of reqests allowed, and ' + ui.search + ' was not processed');
			}
		});

		// Clear requests and remove red background
		jQuery('input[name=search4-submit]').click(function(){
			jQuery('input[name=search4]').autoComplete('flush').css('background-color', 'white').val('').focus();
		});
	},

	// Auto-complete with triggers
	search5: function(){
		jQuery('input[name=search5]').autoComplete();

		// Trigger full 'c' list
		jQuery('#submit-c').click(function(){
			jQuery('input[name=search5]').autoComplete('button-ajax', { all: true, letter: 'c' }, 'ALL_LETTER_C_REQUESTS');
		});
		// Trigger full 'd' list
		jQuery('#submit-d').click(function(){
			jQuery('input[name=search5]').autoComplete('button-ajax', { all: true, letter: 'd' },  'ALL_LETTER_D_REQUESTS');
		});
		// Clear just the cache, not the # of requests
		jQuery('#submit-flush').click(function(){
			jQuery('input[name=search5]').autoComplete('flush', true);
		});
	},

	// Auto-complete on User Supplied data
	search6: function(){
		jQuery('input[name=search6]').autoComplete({
			dataSupply: [
				'jane', 'john', 'doe', 'amy', 'alice', 'louis', 'liz',
				{ value: 'mark' },
				{ value: 'merideth', display: 'Merideth Johnson' }
			]
		});

		// Trigger whole list
		jQuery('#search6').click(function(){
			jQuery('input[name=search6]').autoComplete('button-supply');
		});
	},

	// Auto-complete using formatSupply to build a custom list
	// Fuzzy Searching technique described by Dustin Diaz @ http://www.dustindiaz.com/autocomplete-fuzzy-matching/
	search7: function(){
		CSV(function( supply ) {
			var cache = {}, rword = /\W/g;
			jQuery('input[name=search7]').removeAttr('disabled').autoComplete({
				maxItems: 10,
				dataSupply: supply,

				// Custom list formatting
				formatSupply: function( event, ui ) {
					// Make sure we have something to search with and search through
					if ( ! ui.search || ui.search === '' || ! ui.supply ) {
						return [];
					}
					
					// Need to get array of characters
					var chars = ui.search.replace( rword, '' ).split( '' ),
						// Develop the regex
						regex = cache[ ui.search ] || {
							searching: new RegExp( chars.join( "\\w*" ), 'i' ),
							bolding: new RegExp( '(' + chars.join( ")\\w*(" ) + ')', 'i' )
						},
						// For lower loop
						i = -1, l = ui.supply.length, list = [];

					// Highlight the matched letters
					function replace( section ) {
						var list = ( section || '' ).split( '' ), word = '',
							i = -1, l = list.length, pos = 0;

						for ( ; ++i < l; ) {
							if ( chars[ pos ] && list[ i ].toLowerCase() === chars[ pos ].toLowerCase() ) {
								word += "<b style='color: red;'>" + list[ i ] + "</b>";
								pos++;
							}
							else {
								word += list[ i ];
							}
						}

						return word;
					}

					// Recache the regex incase it isnt yet
					cache[ ui.search ] = regex;

					// Create a new list to present
					for ( ; ++i < l; ) {
						if ( regex.searching.exec( ui.supply[ i ] ) ) {
							// Push onto the cached list
							list.push({
								value: ui.supply[ i ],
								display: "<span style='color:gray;'>" + 
										ui.supply[ i ].replace( regex.bolding, replace ) +
									"</span>"
							});

							// Reduce the load on the browser and only load as many as needed
							if ( ui.settings.maxItems > -1 && list.length > ui.settings.maxItems ) {
								break;
							}
						}
					}


					return list;
				}
			});
		});
	},

	// Multiple words, autofill, and striped lists
	search8: function(){
		jQuery('input[name=search8]').autoComplete({
			multiple: true,
			multipleSeparator: ' ',
			autoFill: true,
			striped: 'auto-complete-striped',
			// Add a delay as autofill takes some time
			delay: 100
		});
	},

	
	// Using templates and stripes
	search9: function(){
		CSV(function( supply ) {
			jQuery('input[name=search9]').autoComplete({
				dataSupply: supply,
				striped: 'auto-complete-striped',
				template: "<li class='#{striped}'>#{value}</li>"
			});
		});
	},

	// Showing how to track autoCompletes from a global level
	tracking: function(){
		// Need to cache the element first for sizing
		var wrapper = jQuery('#AutoCompleteFocus');

		// Toggle code for floater
		wrapper.width( jQuery(window).width() - wrapper.offset().left - 50 ).find('a').toggle(
			function(){
				jQuery(this).html('- Close Code');
				wrapper.find('pre').show();
				return false;
			},
			function(){
				jQuery(this).html('+ Open Code');
				wrapper.find('pre').hide();
				return false;
			} 
		);

		// Setup global focus event for tracking
		jQuery.autoComplete.focus = function(){
			var focus = jQuery.autoComplete.getFocus( true ), previous = jQuery.autoComplete.getPrevious( true );

			wrapper.find('.current span').html(
				focus.length ? 'name=' + focus.attr('name') + "'" : 'Nothing in Focus'
			);
			wrapper.find('.previous span').html(
				previous.length ? 'name=' + previous.attr('name') + "'" : 'Nothing previously in focus'
			);
		};
	}

};


// Delaying for csv supply
function CSV( fn ) {
	CSV.stack.push( fn );
}
CSV.stack = [];


// Dom Ready
jQuery(function(){
	// Setup maxHeight for IE6
	jQuery.autoComplete.defaults.maxHeight = 250;

	for ( var i in AutoCompletes ) {
		if ( jQuery.isFunction( AutoCompletes[ i ] ) ) {
			AutoCompletes[ i ]();
		}
	}
		
	jQuery.get( 'words.txt', function( csv ) {
		var words = csv.split(','), i = -1, l = CSV.stack.length;

		for ( ; ++i < l; ) {
			CSV.stack[ i ]( words );
		}
	});
});



})( jQuery, this );
