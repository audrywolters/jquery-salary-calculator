$( document ).ready( onReady );

let employees = [];

function onReady() {
    // tell DOM about button
    $( '#inputSubmit' ).on( 'click', processEmployee );

    // button doesn't exist until submit click
    // so start out by grabbing the existing table in DOM
    $( 'table' ).on( 'click', '.deleteButton', clickDeleteEmployee );
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

    // Mary or Dev: should I keep preventDefault after the jQuery stuff
    // or should I put it at the end of the function?
    event.preventDefault();

    // display employee
    putEmployeeIntoTable( employee );

    // save employee for later
    employees.push( employee );
    
    // update monthly cost
    tallyMonthlyCost();
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
    // travel up to the button's row
    // and delete it
    $( this ).closest( 'tr' ).remove();

    event.preventDefault();
}

function tallyMonthlyCost() {

    let totalSalaries = 0;
    
    for ( let employee of employees ) {
        totalSalaries += employee.salary;
    }

    // divide by 12 (months)
    let monthlyCost = ( totalSalaries / 12 ).toFixed( 2 );

    // warn user if it's getting too expensive
    if ( monthlyCost > 20000 ) {
        // AUDRY - will need to css this p
        $( '#monthlyCost' ).css( 'background-color', 'pink' );
    } else {
        $( '#monthlyCost' ).css( 'background-color', 'white' );
    }

    // display
    $( '#monthlyCost' ).text( 'Monthly Cost: $' + monthlyCost );
}


// remove Employee's salary from the reported total.
