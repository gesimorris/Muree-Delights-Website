
// Countdown timer till ramadan
var countdown = new Date("March 11, 2024 18:07:50").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();

    var distance = countdown - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("dealsList").innerHTML = days + "d" + hours + "h" + minutes + "m" + seconds + "s";

    if(distance < 0) {
        clearInterval(x);
        document.getElementById("dealsList").innerHTML = "EXPIRED";
    }
}
, 1000);

