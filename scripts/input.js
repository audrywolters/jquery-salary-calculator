$( document ).ready( readyNow );

function readyNow() {
    // tell DOM about button
    $( '#inputSubmit' ).on( 'click', processEmployee );
}

function processEmployee() {
    // grab the employee from inputs
    let firstName = $( '#firstNameIn').val();
    let lastName  = $( '#lastNameIn').val();

    // consolidate
    let employee =  {
                        firstName: firstName,
                        lastName:  lastName
                    };

    // AUDRY - empty the inputs somewhere
    
    console.log( employee );

    event.preventDefault();
}

// grab input with id
//  i don't think we should mess with the 'submit' stuff
// put into an object
// console.log(employee)



// The application should have an input form that collects 
// _employee first name, 
// last name, 
// ID number, 
// job title, 
// annual salary_.

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
