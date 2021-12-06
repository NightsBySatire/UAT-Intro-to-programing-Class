function StartTheCountdown(){
    // declaring the variables for our function
    var countdown = 10;
    
    var timeout = 10000
    
    // needs to be 11 so count can reach 0 and change to blast off
    for (var i = 11; i >= 0; i--){
    setTimeout(() => {
        //Here's our if statement to execute our change of orders
        if (countdown >= 5){

        document.getElementById("CountdownDisplay").innerHTML = countdown;
        //Changes the number for the countdown
       countdown = countdown - 1;;}
       else if(countdown >= 0) {
           //Add Line to include text + the variable that changes
        document.getElementById("CountdownDisplay").innerHTML = "Warning, half of countdown elapsed, time left = " + countdown;
        countdown = countdown - 1;

       }else{
           //The blast off text is unchanged since we still want the rocket to launch
        document.getElementById("CountdownDisplay").innerHTML = "Blast Off!"
       }

    },timeout)
    //Sets our time delay to 1000ms or 1 second
    timeout = timeout - 1000;
    continue;
    }
}