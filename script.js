// var button =document.getElementByClassName("button");
// var display =document.getElementById("display");

// var operand1 = null;
// var operand2 = null;
// var operator = null;
// var result = null;    

// // 1 on clicking a digit it should appened to the display
// // 2 on clicking more digits they also get appended to display
// // 3 on clicking an operator we get the diplay text at screen as 1st operand.
// // 4 same appending on screen for 2nd number
// // 5 on clicking the = buton, we get this displayed text at screen as 2nd operator.
// // 6 and the equal funtion is performed and the result gets displayed on the screen

// // iterate over each button
// for(var i=0;i<button.length;i++)
// {
// 	button[i].addEventListener("click",calc())  // to set clicking on each button
// }

// function calc()
// {
//     var value= this. getAttribute("value");

//     if(value == 1)
//     {
//         display.innerText +=value; 
//     }
    
//     if(value == "+")
// 	{
// 		operator = "+";
//         operand1 = parseFloat(display.textContent);
//         display.innerText = " ";
//     }
// 	else if(value == "=")
//     {
//         operand2 = parseFloat(display.textContent);
//         result = eval(operand1 + operand2);
//         display.innerText = result;
//     }
//     // else
//     // {
//     // 	display.innerText +=value;    
//     // }
// }


var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');
var four = document.getElementById('4');
// var button =document.getElementByClassName("button");
var display = document.getElementById('display');

// button.addEventListener('click',show)
// for(var i=0;i<button.length;i++)
// {
// 	button[i].addEventListener("click",calc())  // to set clicking on each button
// }

one.addEventListener('click',show)
two.addEventListener('click',show)
three.addEventListener('click',show)
four.addEventListener('click',show)

function show()
{
    var value= this.getAttribute("id");

    display.innerText +=value; 
}

var plus = document.getElementById('+');
var equal = document.getElementById('=');
var operand1 = null;
var operand2 = null;
var result = null;
plus.addEventListener('click',add)
equal.addEventListener('click',sum)

function add()
{
    operand1 = parseFloat(display.textContent);
    display.innerText = " ";
}

function sum()
{
    operand2 = parseFloat(display.textContent);
    result = eval(operand1+operand2)
    display.innerText = result;
}


