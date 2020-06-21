$( document ).ready( onReady );

function onReady() {
    // tell DOM about button
    $( '#inputSubmit' ).on( 'click', processEmployee );

    // button doesn't exist until submit click
    // so start out by grabbing the existing table in DOM
    $( 'table' ).on( 'click', '.deleteButton', clickDeleteEmployee );

    // AUDRY
    // => e.target / this <=
}

function processEmployee() {
    // grab employee from inputs
    let firstName  = $( '#firstNameIn' ).val();
    let lastName   = $( '#lastNameIn') .val();
    let employeeID = $( '#empIDIn' ).val();
    let title      = $( '#titleIn' ).val();
    let salary     = $( '#salaryIn' ).val();

    // consolidate
    let employee =  {
                        firstName: firstName,
                        lastName:  lastName,
                        empID: Number( employeeID ),
                        title: title,
                        salary: Number( salary )
                    };

    // after user submits, clear so they can start over
    $( '#firstNameIn' ).val('');
    $( '#lastNameIn') .val('');
    $( '#empIDIn' ).val('');
    $( '#titleIn' ).val('');
    $( '#salaryIn' ).val(''); 

    event.preventDefault();

    // display employee
    putEmployeeIntoTable( employee );
    
}

function putEmployeeIntoTable( employee ) {

    $( 'table' ).append(
        `<tr>
            <td>${ employee.firstName }</td>
            <td>${ employee.lastName }</td>
            <td>${ employee.empID }</td>
            <td>${ employee.title }</td>
            <td>${ employee.salary }</td>
            <td><button class="deleteButton">Delete</button></td>
         </tr>`
        );
} 

function clickDeleteEmployee () {
    console.log('hi');
    event.preventDefault();
}

// A 'Submit' button should collect the form information, 
// store the information to calculate monthly costs, 
// append information to the DOM and clear the input fields. 

// Using the stored information, 
// calculate monthly costs and append this to the to DOM. 

// If the total monthly cost exceeds $20,000, 
// add a red background color to the total monthly cost.

// Create a delete button that removes an employee from the DOM. 
// For Base mode, it does **not** need to remove 
// that Employee's salary from the reported total.
