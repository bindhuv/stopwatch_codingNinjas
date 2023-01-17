window.onload = function(){
    // 1. getting all the required variables
    const startButton = document.querySelector('.start');
    const stopButton = document.querySelector('.stop');
    const resetButton = document.querySelector('.reset');
    var minutes = document.querySelector('.minutes');
    var seconds = document.querySelector('.seconds');
    var milliseconds = document.querySelector('.milliseconds');
    var Interval;
    var secondsVal = 00; 
    var millisecondsVal = 00;
    var minutesVal =00; 

    console.log(minutes, seconds, milliseconds)

    // 2. onclick function for start button
    startButton.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
  
    // 3. onclick function for stop button
    stopButton.onclick = function() {
        clearInterval(Interval);
    }
  

    // 4. onlick function for reser button
    resetButton.onclick = function() {
        clearInterval(Interval);
        millisecondsVal = "00";
        secondsVal = "00";
        minutesVal = "00"
        milliseconds.innerHTML = millisecondsVal;
        seconds.innerHTML = secondsVal;
        minutes.innerHTML = minutesVal;
    }
  
   
    // 5. timer function
    function startTimer () {
        millisecondsVal++; 
        
        if(millisecondsVal <= 9){
        milliseconds.innerHTML = "0" + millisecondsVal;
        }
        
        if (millisecondsVal > 9){
        milliseconds.innerHTML = millisecondsVal;
        
        } 
        
        if (millisecondsVal > 99) {
        console.log("seconds");
        secondsVal++;
        seconds.innerHTML = "0" + secondsVal;
        millisecondsVal = 0;
        milliseconds.innerHTML = "0" + 0;
        }
        
        if (secondsVal > 9){
        seconds.innerHTML = secondsVal;
        }
        if(secondsVal > 59){
            console.log("minutes");
            minutesVal++;
            minutes.innerHTML = "0" + minutesVal;
            secondsVal = 0;
            seconds.innerHTML = "0" + 0;
        }
        if (minutesVal>9) {
            minutes.innerHTML=minutesVal;
        }
    
    }
}