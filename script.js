var button =document.getElementByClassName("buttons");
var screen =document.getElementById(screen);

var operand1 = 0;
var operand2 = null;
var operator = null;    

// 1 on clicking a digit it should appened to the display
// 2 on clicking more digits they also get appended to display
// 3 on clicking an operator we get the diplay text at screen as 1st operand.
// 4 same appending on screen for 2nd number
// 5 on clicking the = buton, we get this displayed text at screen as 2nd operator.
// 6 and the equal funtion is performed and the result gets displayed on the screen

// iterate over each button
for(var i=0;i<buttons.length;i++)
{
	buttons[i].addEventListener("click",calc())  // to set clicking on each button
    
}

function calc()
{
    var value= this. getAttribute("value");
    
    if(value == "+")
	{
		operator = "+";
		// operand1 = display.innerText;
		operand1 = parseFloat(display.textContent);
    }
	else if(value == "=")
    {
        operand1 = parseFloat(display.textContent);
        //eval
        //show result on display
    }
    else
    {
    	display.innerText +=value;    
    }
}
