$(document).ready(function () {

    var toSay;
    for (var x = 1; x <= 100; x++)
    {
        toSay = "";
        if (x % 5 === 0 && x % 3 === 0)
        {
            toSay = "fizzbuzz"
        }
        else if (x % 5 === 0)
        {
            toSay = "buzz"
        }
        else if (x % 3 === 0)
        {
            toSay = "fizz"
        }
        else {
            toSay = x;
        }
        
        $('#fizzbuzz').append("" + toSay + "<br />");
    }
});