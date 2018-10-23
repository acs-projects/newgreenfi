(function($){

	$.fn.animationCounter = function(options) {
		return this.each(function() {
			try {
				var element = $(this);

				var defaults = {
					start: 0,
					end: null,
					step: 1,
					delay: 1000,
					txt: ""
				}

				var settings = $.extend(defaults, options || {})

				var nb_start = settings.start;
				var nb_end = settings.end;

 				element.text(nb_start + settings.txt);

				var counter = function() {
					// Definition of conditions of arrest
					if (nb_end != null && nb_start >= nb_end) {
						return;
					}
					// incrementation
					nb_start = nb_start + settings.step;
					// display
					element.text(nb_start + settings.txt);
				}

				// Timer
				// Launches every "settings.delay"
				setInterval(counter, settings.delay);

			} catch(e){
				alert( e + ' at line ' + e.lineNumber );
			}
		});
	};

})(jQuery);

// Add new

(function($){

	$.fn.countUp = function(options) {
		return this.each(function() {
			
			<body>

<p id="demo"></p>

<script>
// Set the date we're counting up from
var LaunchDate = new Date("Oct 21, 2018 15:37:25").getTime();

// Update the count up every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count up date
    var distance = now - LaunchDate;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
</script>

</body>
		

})(jQuery);
