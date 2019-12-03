 $(".btn").mousedown(function(e){
            e.preventDefault();
        });

        $('.btn').mouseup(function(){
            $(this).css("color", "white");
        });

        $('.btn').mouseover(function(){
            $(this).css("color", "black");
        });

        $('.btn').mouseout(function(){
            $(this).css("color", "white");
        });

        $("#info_btn").click(function(){
          $("html,body").animate({
              scrollTop: $('#about_pg').offset().top - $('body').offset().top + $('body').scrollTop()
          });
        });

        $("#buyticket_btn").click(function(){
            $("html,body").animate({
              scrollTop: $('#buytickets_pg').offset().top - $('body').offset().top + $('body').scrollTop()
          });
        });

        CountDownTimer('07/03/2020 10:00 AM', 'countdown');

        function CountDownTimer(dt, id)
        {

            var end = new Date(dt);

            var _second = 1000;
            var _minute = _second * 60;
            var _hour = _minute * 60;
            var _day = _hour * 24;
            var _week = _day * 7;

            var timer;

            function showRemaining() {

                var now = new Date();
                var distance = end - now;

                if (distance < 0) {

                    clearInterval(timer);
                    document.getElementById("#date-countdown").innerHTML = 'THE EVENT HAS STARTED';

                    return;
                }

                var weeks = Math.floor(distance / _week);

                var days = Math.floor((distance % _week) / _day);
                var hours = Math.floor((distance % _day) / _hour);
                var minutes = Math.floor((distance % _hour) / _minute);
                var seconds = Math.floor((distance % _minute) / _second);
           
                document.getElementById("weeks").innerHTML = weeks;
                document.getElementById("days").innerHTML = days;
                document.getElementById("hours").innerHTML = hours;
                document.getElementById("minutes").innerHTML = minutes
                document.getElementById("seconds").innerHTML = seconds;
            }

            timer = setInterval(showRemaining, 1000);
            

        }