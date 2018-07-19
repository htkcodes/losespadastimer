$(".review").on('click', () => {


})

$(document).ready(function () {
    console.log("ready!");

    startTime();
});


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var d = today.getDay();
    var s = today.getSeconds();
    var ms = today.getMilliseconds();
    m = checkTime(m);
    s = checkTime(s);
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    document.getElementById('hourr').innerHTML =
        h;
    document.querySelector(".day").innerHTML = days[d];

    document.getElementById('min').innerHTML = m;
    var ampm = h >= 12 ? 'pm' : 'am';
    document.querySelector('.ampm').innerHTML = ampm;
    var t = setTimeout(startTime, 1000);
    if (h === 9 && m == 25 && s == 01) {
        //console.log(ms)
        var sound = new Howl({
            src: ['https://raw.githubusercontent.com/htkcodes/losespadastimer/master/notification.mp3']
        });
        sound.play();
        M.toast({
            html: 'Daily Scrum in 5 minutes',
            displayLength: 5000,
            classes: 'toast-color'
        })
    }

    if (h == 9 && m == 30 && s == 01) {

        //console.log(ms)
        var sound = new Howl({
            src: ['https://raw.githubusercontent.com/htkcodes/losespadastimer/master/notification.mp3']
        });
        sound.play();
        M.toast({
            html: 'Daily Scrum',
            displayLength: 5000,
            classes: 'toast-color'
        })

        $("#hourr").fadeOut("slow");
        $(".min").fadeOut("slow");
        $(".ampm").fadeOut("slow", function () {
            console.log('done');
            $("#timer").removeClass("dbn");
        });

        $("#timer").fadeIn("slow");

        document.getElementById('timer').innerHTML =
            15 + ":" + 00;

        startTimer();

        function startTimer() {

            var presentTime = document.getElementById('timer').innerHTML;
            var timeArray = presentTime.split(/[:]+/);
            var m = timeArray[0];
            var s = checkSecond((timeArray[1] - 1));
            if (s == 59) {
                m = m - 1
            }

            if (m == 00 && s == 00) {

                var sound = new Howl({
                    src: ['https://raw.githubusercontent.com/htkcodes/losespadastimer/master/notification.mp3']
                });
                sound.play();
                M.toast({
                    html: 'Sprint Review should be wrapping up',
                    displayLength: 5000,
                    classes: 'toast-color'
                })
                $("#timer").fadeOut("slow", function () {
                    $("#hourr").fadeIn("slow");
                    $(".min").fadeIn("slow");
                });
            }
            //if(m<0){alert('timer completed')}

            document.getElementById('timer').innerHTML =
                m + ":" + s;

            setTimeout(startTimer, 1000);
        }

        function checkSecond(sec) {
            if (sec < 10 && sec >= 0) {
                sec = "0" + sec
            }; // add zero in front of numbers < 10
            if (sec < 0) {
                sec = "59"
            };
            return sec;
        }

    }
    if (h == 12 && m == 55 && s == 01) {
        var sound = new Howl({
            src: ['https://raw.githubusercontent.com/htkcodes/losespadastimer/master/notification.mp3']
        });
        sound.play();
        M.toast({
            html: 'Lunch in 2 minutes',
            displayLength: 5000,
            classes: 'toast-color'
        })
    }




    if (h == 14 && m == 14 && s == 30) {

        //console.log(ms)
        var sound = new Howl({
            src: ['https://raw.githubusercontent.com/htkcodes/losespadastimer/master/notification.mp3']
        });
        sound.play();
        M.toast({
            html: 'Lunch Time',
            displayLength: 10000,
            classes: 'toast-color'
        })
        M.toast({
            html: 'Lunch in Progress...',
            displayLength: 2460000,
            classes: 'toast-color'
        })

        $("#hourr").fadeOut("slow");
        $(".min").fadeOut("slow");
        $(".ampm").fadeOut("slow", function () {
            console.log('done');
            $("#timer").removeClass("dbn");
        });

        $("#timer").fadeIn("slow");

        document.getElementById('timer').innerHTML =
            15 + ":" + 00;

        startTimer();

        function startTimer() {

            var presentTime = document.getElementById('timer').innerHTML;
            var timeArray = presentTime.split(/[:]+/);
            var m = timeArray[0];
            var s = checkSecond((timeArray[1] - 1));
            if (s == 59) {
                m = m - 1
            }

            if (m == 00 && s == 00) {

                var sound = new Howl({
                    src: ['https://raw.githubusercontent.com/htkcodes/losespadastimer/master/notification.mp3']
                });
                sound.play();
                M.toast({
                    html: 'Lunch is up',
                    displayLength: 10000,
                    classes: 'toast-color'
                })
                $("#timer").fadeOut("slow", function () {
                    $("#hourr").fadeIn("slow");
                    $(".min").fadeIn("slow");
                });
            }
            //if(m<0){alert('timer completed')}

            document.getElementById('timer').innerHTML =
                m + ":" + s;

            setTimeout(startTimer, 1000);
        }

        function checkSecond(sec) {
            if (sec < 10 && sec >= 0) {
                sec = "0" + sec
            }; // add zero in front of numbers < 10
            if (sec < 0) {
                sec = "59"
            };
            return sec;
        }

    }



}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}




// Clock Widget's date and time

const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]

const now = new Date()

$('#monthDay').append(`${months[now.getMonth()]} ${now.getDate()}`);

$('#year').append(`${now.getFullYear()}`);

$(function () {

    setInterval(function () {
        var seconds = new Date().getSeconds();
        var sdegree = seconds * 6;
        var srotate = "rotate(" + sdegree + "deg)";

        $("#sec").css({
            "transform": srotate
        });

    }, 1000);

    setInterval(function () {
        var hours = new Date().getHours();
        var mins = new Date().getMinutes();
        var hdegree = hours * 30 + (mins / 2);
        var hrotate = "rotate(" + hdegree + "deg)";

        $("#hour").css({
            "transform": hrotate
        });

    }, 1000);

    setInterval(function () {
        var mins = new Date().getMinutes();
        var mdegree = mins * 6;
        var mrotate = "rotate(" + mdegree + "deg)";

        $("#min").css({
            "transform": mrotate
        });

    }, 1000);

});