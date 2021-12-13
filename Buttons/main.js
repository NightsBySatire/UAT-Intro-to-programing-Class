// Create the function to enable stop button and disable start buton
function start(){
    //change the start button  by getElementByID. Disable it by making value trye
    document.getElementById("startButton").disabled = true;
    //Similar to top portion, except false to enabe
    document.getElementById("stopButton").disabled = false;
}
//Create function to enable start and disable stop
function stop(){
    //Similar to top function
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}