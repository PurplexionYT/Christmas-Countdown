let isDialogVisible = false; 

    function showDialog() {
        $('#dialog').dialog('open')
    };

        let whistle = new Audio()
        whistle.src = 'Whistle by Josh Hutcherson.mp3';
        
        function playSound() { whistle.play(); }
        function pauseSound() { whistle.pause(); }
        
        let isAudioPlaying;
        let isAudioLooped = false;
        
        var body = document.body;
            body.addEventListener("keypress", function(event) {
                if (event.key === " ") {
                    if (isAudioPlaying == true) {
                        pauseSound()
                        isAudioPlaying = false;
                    }
                    
                    else {
                        playSound();
                        isAudioPlaying = true
                    }}})
        
        $('document').ready(function() {
            $('#dialog').dialog({
                draggable: true,
                autoOpen: false,
            });
            document.getElementById('error-message').style.visibility = 'hidden';
        })
        
        if (document.getElementById('seconds').innerHTML.length == 1) { // if
            document.getElementById('seconds').innerHTML = '0' + document.getElementById('seconds').innerHTML
        }
            
        if (document.getElementById('minutes').innerHTML.length == 1) {
            document.getElementById('minutes').innerHTML = '0' + document.getElementById('minutes').innerHTML
        }
            
            if (document.getElementById('hours').innerHTML.length == 1) {
            document.getElementById('hours').innerHTML = '0' + document.getElementById('hours').innerHTML
        }
            
            if (document.getElementById('days').innerHTML.length == 1) {
            document.getElementById('days').innerHTML = '0' + document.getElementById('days').innerHTML
        }

        let stopwatch = setInterval(decreaseStopwatch, 1000);
        
        let counter = 0;
        
        document.addEventListener('visibilitychange', () => {
            if (document.visibilityState === "hidden") {
                if (counter == 0) { clearInterval(stopwatch)
                    stopwatch = setInterval(decreaseStopwatch, 1000)
                } 
                counter++;
            }
        })
        
        function checkIfLoop() {
            if (document.getElementById('loopCheckBox').checked === true && isAudioPlaying === true) {
                whistle.loop = true;
                console.log('hi')
            }
            
            else if (document.getElementById('loopCheckBox').checked === true && isAudioPlaying !== true) {
                document.getElementById('loopCheckBox').checked = false;
                
            }
            
            else {
                whistle.loop = false;
            }
        }
        
        var christmas = new Date("December 25, 2023 0:00:00"); // a variable that stores the date when Christmas starts
        var present = new Date(); // a variable that stores the present date
        var days = Math.floor((christmas.getTime() - present.getTime()) / 1000 / 60 / 60 / 24); // stores days between upper two dates
        var daysRemainder = ((christmas.getTime() - present.getTime()) / 1000 / 60 / 60 / 24) - days // stores day decimal for later use
        var hours = Math.floor(daysRemainder * 24) // makes upper decimal into hours, stores the whole number
        var hoursRemainder = daysRemainder * 24 - hours // stores hour decimal for later use
        var minutes = Math.floor(hoursRemainder * 60) // makes upper decimal into minutes, store the whole number
        var minutesRemainder = hoursRemainder * 60 - minutes // stores minute decimal for later use
        var seconds = Math.floor(minutesRemainder * 60) // makes upper decimal into seconds, store the whole number
        var secondsRemainder = minutesRemainder * 60 - seconds // stores seconds decimal, for really no use :-)
        
        document.getElementById('seconds').innerHTML = seconds;
        document.getElementById('minutes').innerHTML = minutes; 
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('days').innerHTML = days;
        
        if (document.getElementById('seconds').innerHTML.length == 1) {
            document.getElementById('seconds').innerHTML = '0' + seconds.toString();
        }
        
        if (document.getElementById('minutes').innerHTML.length == 1) {
            document.getElementById('minutes').innerHTML = '0' + minutes.toString();
        }
        
        if (document.getElementById('hours').innerHTML.length == 1) {
            document.getElementById('hours').innerHTML = '0' + hours.toString();
        }
        
        if (document.getElementById('days').innerHTML.length == 1) {
            document.getElementById('days').innerHTML = '0' + days.toString();
        }    
        
        function decreaseStopwatch() {
            christmas = new Date("December 25, 2023 0:00:00"); // a variable that stores the date when Christmas starts
            present = new Date(); // a variable that stores the present date
            days = Math.floor((christmas.getTime() - present.getTime()) / 1000 / 60 / 60 / 24); // stores days between upper two dates
            daysRemainder = ((christmas.getTime() - present.getTime()) / 1000 / 60 / 60 / 24) - days // stores day decimal for later use
            hours = Math.floor(daysRemainder * 24) // makes upper decimal into hours, stores the whole number
            hoursRemainder = daysRemainder * 24 - hours // stores hour decimal for later use
            minutes = Math.floor(hoursRemainder * 60) // makes upper decimal into minutes, store the whole number
            minutesRemainder = hoursRemainder * 60 - minutes // stores minute decimal for later use
            seconds = Math.floor(minutesRemainder * 60) // makes upper decimal into seconds, store the whole number
            secondsRemainder = minutesRemainder * 60 - seconds // stores seconds decimal, for really no use :-)

            document.getElementById('seconds').innerHTML = seconds;
            document.getElementById('minutes').innerHTML = minutes; 
            document.getElementById('hours').innerHTML = hours;
            document.getElementById('days').innerHTML = days;
            console.log(seconds, minutes, hours, days)
            
            if (document.getElementById('seconds').innerHTML.length == 1) {
                document.getElementById('seconds').innerHTML = '0' + seconds.toString();
            }
            
            if (document.getElementById('minutes').innerHTML.length == 1) {
                document.getElementById('minutes').innerHTML = '0' + minutes.toString();
            }
            
            if (document.getElementById('hours').innerHTML.length == 1) {
                document.getElementById('hours').innerHTML = '0' + hours.toString();
            }
            
            if (document.getElementById('days').innerHTML.length == 1) {
                document.getElementById('days').innerHTML = '0' + days.toString();
            }    
        }
        
        console.log(seconds)