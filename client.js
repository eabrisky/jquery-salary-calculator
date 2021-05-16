$(document).ready(readyNow);

function readyNow(){

    // C L I C K   L I S T E N E R S

    $('#submitButton').on('click', handleForm)
    $('#bodyBody').on('click', '.deleteButton', handleDelete);
} // end readyNow fn

function handleForm(){

    let employee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        employeeID: $('#idNumber').val(),
        jobTitle: $('#jobTitle').val(),
        annualSalary: $('#annualSalary').val(),
        monthlyCost: $('#annualSalary').val() / 12
    }; // end employee object
    
    console.log(employee);

    $('#bodyBody').last().append(`
        <tr class = "stuff">
            <td class = "employeeInformation">${employee.firstName}</td>
            <td class = "employeeInformation">${employee.lastName}</td>
            <td class = "employeeInformation">${employee.employeeID}</td>
            <td class = "employeeInformation">${employee.jobTitle}</td>
            <td class = "employeeInformation">${employee.annualSalary}</td>
            <td class = "employeeInformation">${employee.monthlyCost}</td>
            <td class = "employeeInformation">
                <button class ="deleteButton">DELETE</button>
            </td>
        </tr>
    `); // end bodyBody appendage

    $('.input').val('');
    // clear input
} // end handleForm fn

function handleDelete(){
    // delete the row that was just made
    console.log('we tryna delet or nah?');
    $(this).closest('.stuff').remove();
} // end handleDelete fn



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
