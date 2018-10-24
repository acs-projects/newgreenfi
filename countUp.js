<!DOCTYPE HTML>
<html>
<head>
<style>
p {
  text-align: center;
  font-size: 60px;
  margin-top: 0px;
}
</style>
</head>
<body>

<p id="clock"></p>

<script>
// Set the date we're counting down to
var LaunchDate = new Date("Oct 22, 2018 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = now - LaunchDate;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var totalsec = Math.floor(distance / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("clock").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s " +totalsec;
}, 1000);
</script>

</body>
</html>

