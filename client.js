$(document).ready(readyNow);

function readyNow(){
    $('#submitButton').on('click', handleForm)
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

    $('#employeeData').append(`<td>${employee.firstName}</td>`, `<td>${employee.lastName}</td>`, `<td>${employee.employeeID}</td>`)

    // $('#subFirstName').append(employee.firstName)
    // $('#subLastName').append(employee.lastName)
    // $('#subID').append(employee.employeeID)
    // $('#jobTitle').append(employee.jobTitle)
    // $('#annualSalary').append(annualSalary)
} // end handleForm fn



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
