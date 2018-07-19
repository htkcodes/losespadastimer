
$(".review").on('click',()=>{
    console.log('click')
   
})

$( document ).ready(function() {
    console.log( "ready!" );
    var sound = new Howl({
        src: ['https://files.fm/down.php?cf&i=q2h8njwk&n=notification.mp3']
      });
      sound.play();
    startTime();
});


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ms=today.getMilliseconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('hourr').innerHTML =
    h;
    document.getElementById('min').innerHTML=m;
    var t = setTimeout(startTime, 1000);
    if(h === 9 && m == 25 && s == 01)
    {
        //console.log(ms)
       M.toast({html: 'Daily Scrum in 5 minutes',displayLength:5000,classes:'toast-color'})
    }

    if(h === 10 && m == 14 && s == 01)
    {
        //console.log(ms)
       M.toast({html: 'Daily Scrum',displayLength:5000,classes:'toast-color'})
    }
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}


document.getElementById('timer').innerHTML =
15 + ":" + 00;
startTimer();

function startTimer() {
var presentTime = document.getElementById('timer').innerHTML;
var timeArray = presentTime.split(/[:]+/);
var m = timeArray[0];
var s = checkSecond((timeArray[1] - 1));
if(s==59){m=m-1}
//if(m<0){alert('timer completed')}

document.getElementById('timer').innerHTML =
  m + ":" + s;
setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
if (sec < 0) {sec = "59"};
return sec;
}






// Clock Widget's date and time

const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]

const now = new Date()

$('#monthDay').append(`${months[now.getMonth()]} ${now.getDate()}`);

$('#year').append(`${now.getFullYear()}`);

// Clock Widget's Rotation
$(function() {

      setInterval( function() {
      var seconds = new Date().getSeconds();
      var sdegree = seconds * 6;
      var srotate = "rotate(" + sdegree + "deg)";

      $("#sec").css({ "transform": srotate });

      }, 1000 );

      setInterval( function() {
      var hours = new Date().getHours();
      var mins = new Date().getMinutes();
      var hdegree = hours * 30 + (mins / 2);
      var hrotate = "rotate(" + hdegree + "deg)";

      $("#hour").css({ "transform": hrotate});

      }, 1000 );

      setInterval( function() {
      var mins = new Date().getMinutes();
      var mdegree = mins * 6;
      var mrotate = "rotate(" + mdegree + "deg)";

      $("#min").css({ "transform" : mrotate });

      }, 1000 );

});