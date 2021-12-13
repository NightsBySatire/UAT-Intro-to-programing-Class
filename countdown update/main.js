//beginning of our javascript file starting with the function
function StartTheCountdown(){
    var countdown = 10;
   
    var timeout = 10000
  
    for (var i = 11; i >= 0; i--){
    setTimeout(() => {
        //dictates the timeout for the countdown 10000 is equal to the total number of seconds our timeout should be in total
        //The if statement then monitors for when our countdown reaches 0 or becomes less than 0 if it does, it  then updates to displaying our desired text
        if (countdown >= 0){

        document.getElementById("CountdownDisplay").innerHTML = countdown;
        countdown = countdown - 1;;}
       else{
        document.getElementById("CountdownDisplay").innerHTML = "Blast Off!";

       }

       if (countdown <= 5){

        document.getElementById("CountdownDisplay").innerHTML = "Less than half way to countdown 5s remain";
        }

        else{
            document.getElementById("CountdownDisplay").innerHTML = countdown;
        }
       


    },timeout)
    //End of the timeout dictation both dictating the end of our code blocks but the dictating what our timeout should be repeatedly, 1000ms = 1 second
    timeout = timeout - 1000;
    continue;
    }
}