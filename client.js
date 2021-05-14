$(document).ready(readyNow);

function readyNow(){
    $('#submitButton').on('click', handleForm)
} // end readyNow fn

function handleForm(){
    let employeeStuff = $('.input').val();

    $('#employeeData').append(`
    <td>
      ${employeeStuff};
    </td>
    `);
} // end handleForm fn