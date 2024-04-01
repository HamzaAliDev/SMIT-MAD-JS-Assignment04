
let equation = ""

function handleGetValue(num) {
    equation += num

    document.getElementById('display').innerHTML = equation
    console.log(equation)
}

// result of equation
document.getElementById('result').onclick = function () {
    
    if (equation != "") {
        try{
            let ans = eval(equation)
            equation = ans

            document.getElementById('display').innerHTML = equation
            console.log(equation);
        }catch(error){
            document.getElementById('display').innerHTML = "Invalid"

        }
    } else {
        document.getElementById('display').innerHTML = ""
    }
    
    
}

// clear Screen function.
document.getElementById('clear-btn').onclick = function () {
    equation = "";
    document.getElementById('display').innerHTML = equation;
}

// delete an element
document.getElementById('delete-element').onclick = function () {
    let cutEquation = equation.slice(0,equation.length-1)
    equation = cutEquation
    document.getElementById('display').innerHTML = equation;
    console.log(equation);
}


// Function to calculate percentage
function calculatePercentage() {
    // Check if equation is not empty
    if (equation !== "") {
        // Split the equation into operands and operators
        let parts = equation.split(/[\+\-\*\/]/);
        // Get the last number entered
        let lastNumber = parts[parts.length - 1];
        // Calculate the percentage (divide by 100)
        let percentage = parseFloat(lastNumber) / 100;
        // Replace the last number with its percentage value
        equation = equation.replace(lastNumber, percentage);
        // Update the display
        document.getElementById('display').innerHTML = equation;
    }
}
