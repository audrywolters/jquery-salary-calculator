$( document ).ready( onReady );

let employees = [];
let totalSalaries = 0;

function onReady() {
    // tell DOM about button
    $( '#inputSubmit' ).on( 'click', processEmployee );

    // button doesn't exist until submit click
    // so start out by grabbing the existing table in DOM
    // then DOM can know about the button
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
    totalSalaries += employee.salary
    
    // update monthly cost
    tallyMonthlyCost();
}

function putEmployeeIntoTable( employee ) {
    // squish into the DOM
    $( 'table' ).append(
        `<tr>
            <td>${ employee.firstName }</td>
            <td>${ employee.lastName }</td>
            <td>${ employee.empID }</td>
            <td>${ employee.title }</td>
            <td class="salary">${ employee.salary }</td>
            <td><button class="deleteButton">Delete</button></td>
         </tr>`
        );
} 

function clickDeleteEmployee () {
    // travel up to the button's row
    // and delete it
    let row = $( this ).closest( 'tr' );
    row.remove();

    // update the data for monthly cost
    removeEmployeeSalary( row );

    event.preventDefault();
}

function removeEmployeeSalary ( row ) {
    //var deltedEmpID = row.find('td.empID').text();
    let deletedSalary     = row.find('td.salary').text();

    let deletedEmployee = null;
    for ( let employee of employees ) {

        if ( employee.salary === Number(deletedSalary) ) {
            // update monies
            totalSalaries -= employee.salary;

            // prepare to clean up data
            deletedEmployee = employee;
            break;
        }
    }

    // clean data
    employees.pop(deletedEmployee);

    // update monthly cost
    tallyMonthlyCost();
}

function tallyMonthlyCost() {

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
