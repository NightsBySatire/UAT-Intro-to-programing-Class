// Creating our functions, note our lack of variables due to the fact that we don't really have anything to do in this function other than set true/false values
function start(){
    //Grabbing our element and changing its value to what each button should reflect on either start or stop
    document.getElementById("startButton").disabled = true;
    //Similar to top portion, except false to enabe
    document.getElementById("stopButton").disabled = false;
}
//Creating our second function for the stop 
function stop(){
    //Inverse of our start function
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}