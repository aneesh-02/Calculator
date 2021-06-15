var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");

var operand1 = 0;
var operand2 = null;
var operator = null;


for (var i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener('click', calc)
}

function calc()
{
    var value = this.getAttribute('data-value');
    var text = display.textContent.trim();

    if(value == "+" || value == "-" || value == "*" || value == "/")
    {
        operator = value;
        operand1 = parseFloat(text);
        display.innerText = " ";
    }
    else if(value == "ac")
    {
        display.innerText = " ";
    }
    else if(value == "sign")
    {
        operand1 = parseFloat(text);
        operand1 = -1 * operand1;
        display.textContent = operand1;
    }
    else if(value == ".")
    {
        if (text.length && !text.includes('.')) 
        {
            display.textContent = text + '.';
        }
    }    
    else if(value == "%")
    {
        operand1 = parseFloat(text);
        operand1 = operand1 / 100;
        display.textContent = operand1;
    }   
    else if(value == "=")
    {
        operand2 = parseFloat(text);
        result = eval(operand1 + ' ' + operator + ' ' + operand2);
        display.innerText = result;
        operand1 = result;
        operand2 = null;
        operator = null;
    }
    else
    {
        display.innerText += value;
    }
    
}

