//here's our simple function to randomly generate our workout times, fitness is important during space travel!
//The times can range anywhere from 12-85
function play() {
    //Here's where the variables are dictated, both using random generators for a range of numbers
    var a=Math.floor(Math.random() * 30); 
    var b =Math.floor(Math.random() * 45); 
    //the console.log is leftover from troubleshooting
    console.log(a+b+10);
    //these alerts were simpler to code in rather than add another statement (Which I still can't work out how to fix ;-;)
    alert("Your alloted workout minutes today are...");
    //the 'a' and 'b' correspond to the variables dictated above, they're what are displayed, or rather their sum is in the alert.
    alert (a+b+10);
}