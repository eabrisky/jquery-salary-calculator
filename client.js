$(document).ready(readyNow);

let empMon = [];
// console.log(empMon);

// F U N C T I O N S

function readyNow(){

    // C L I C K   L I S T E N E R S

    $('#submitButton').on('click', handleForm)
    $('#mainBody').on('click', '.deleteButton', handleDelete);
} // end readyNow fn

function handleForm(){

    const employee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        employeeID: $('#idNumber').val(),
        jobTitle: $('#jobTitle').val(),
        annualSalary: $('#annualSalary').val(),
        monthlyCost: $('#annualSalary').val() / 12
    }; // end employee object
    
    // console.log(employee);

    calculateTotalMonthly();

    $('#mainBody').last().append(`
        <tr class = "stuff">
            <td class = "employeeInformation">${employee.firstName}</td>
            <td class = "employeeInformation">${employee.lastName}</td>
            <td class = "employeeInformation">${employee.employeeID}</td>
            <td class = "employeeInformation">${employee.jobTitle}</td>
            <td class = "employeeInformation">${employee.annualSalary}</td>
            <td class = "employeeInformation">${employee.monthlyCost.toFixed(2)}</td>
            <td class = "employeeInformation">
                <button class ="deleteButton">DELETE</button>
            </td>
        </tr>
    `); // end mainBody appendage


    // clear input
} // end handleForm fn

function handleDelete(){
    // delete the row that was just made
    // console.log('we tryna delet or nah?');
    $(this).closest('.stuff').remove();
} // end handleDelete fn

function calculateTotalMonthly(){
    // console.log('in calculateTotalMonthly');
    // let totalMonthly = [];
    // let employeeTotalCost = monthlyCost;
    // totalMonthly.push(employeeTotalCost);
    // console.log(monthlyCost);
    // // update the variable value 
    // $('#totalMonthlyCost').text(`Total Monthly Cost: ${totalMonthly}`);
    
    let anSal = $('#annualSalary').val();
    // console.log(anSal);
    let monCost = anSal / 12;
    let totalMonthlyCost = 0;
    // console.log(monCost);
    empMon.push(monCost);
    
    for(let i = 0; i < empMon.length; i++){
        totalMonthlyCost += parseInt(empMon[i]);
        
    } // end for loop

     $('#totalMonthlyCost').text(`Total Monthly Cost: $${totalMonthlyCost.toFixed(2)}`)

    // how to get the sum of every newly created monthly cost
    // perhaps found in code block or bonus adjustment assignments?
    
    if(totalMonthlyCost >=20000){
        $('#totalMonthlyCost').toggleClass('highlight')
    } // end calculateMonthlyCost fn

    // If the total monthly cost exceeds $20,000, add a red background color to the total monthly cost.
    // if statement >=20000, {
        // add class of redBackground to $('#totalMonthlyCost')
    // }
} // end calculateTotalMonthly fn

// create an empty array
// each employee is an object which will populate the array
// each property is the input value from the form
// first name: $('#firstName).val()
// etc.
// you could put $('#firsName).val() into a variable, too to make it easier to call
// let nameBoy = $('#firstName).val();
// then it would look like:
// first name : nameBoy,
// then populate the rest of your object
// then push that object to empty array?

// let employees = [];
// end employees array

// let employee = {
//     firstName: $('#firstName').val(),
//     lastName: $('#lastName').val(),
//     employeeID: $('#idNumber').val(),
//     jobTitle: $('#jobTitle').val(),
//     annualSalary: $('#annualSalary').val()
// };

// console.log(employee);


// on button click, append new td in employeeData tr
// on button click, populate the now existing td with data from each input form
