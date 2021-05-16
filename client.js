$(document).ready(readyNow);

function readyNow(){

    // C L I C K   L I S T E N E R S

    $('#submitButton').on('click', handleForm)
    $('#deleteButton').on('click', handleDelete)
} // end readyNow fn

function handleForm(){
    // let employeeStuff = $('.input').val();

    // $('#employeeData').append(`
    // <td>
    //   ${employeeStuff};
    // </td>
    // `);

    let employee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        employeeID: $('#idNumber').val(),
        jobTitle: $('#jobTitle').val(),
        annualSalary: $('#annualSalary').val()
    };
    
    console.log(employee);

    $('#bodyBody').append(`<tr></tr>`)
    $('#bodyBody').last().append(`<td>${employee.firstName}</td>`);
    $('#bodyBody').last().append(`<td>${employee.lastName}</td>`);
    $('#bodyBody').last().append(`<td>${employee.employeeID}</td>`);
    $('#bodyBody').last().append(`<td>${employee.jobTitle}`);
    $('#bodyBody').last().append(`<td>${employee.annualSalary}`);

    $('#bodyBody').last().append(`<button>Delete</button>`)


    // $('#subFirstName').append(employee.firstName)
    // $('#subLastName').append(employee.lastName)
    // $('#subID').append(employee.employeeID)
    // $('#jobTitle').append(employee.jobTitle)
    // $('#annualSalary').append(annualSalary)
} // end handleForm fn

function handleDelete(){
    // delete the row that was just made
    
}



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

let employees = [];

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
