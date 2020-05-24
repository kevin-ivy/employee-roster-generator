const fs = require('fs');

// function to write Index file
function writeFile(pageSource) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', pageSource, err => {
            if (err) {
                reject(err);
                return;
            }
    
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};


function generateCards(employee) {
    const employeeList = employee.map(eachEmployee => {
        currentEmployee = `
        <div class="col-md-3 col-sm-8 p-1 m-1">
            <div class="card shadow rounded border border-dark">
                <div class="card-header text-white bg-primary">
                    <h4 class="text-center">${eachEmployee.name}</h4>
                    <h5 class="text-center">${eachEmployee.getRole()}</h5>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">Employee ID: ${eachEmployee.getId()}</li>
                        <li class="list-group-item">Email Address: <a href="mailto:${eachEmployee.getEmail()}">${eachEmployee.getEmail()}</a></li>
    `
    if (eachEmployee.getRole() === 'Manager') {
        currentEmployee += `
                        <li class="list-group-item">Office Number: ${eachEmployee.office}</li>
                    </ul>
                </div>
            </div>
        </div>
        `
    }

    else if (eachEmployee.getRole() === 'Engineer'){
        currentEmployee += `
                        <li class="list-group-item">GitHub: <a href="https://github.com/${eachEmployee.github}" target="_blank">${eachEmployee.github}</a></li>
                    </ul>
                </div>
            </div>
        </div>
        `

    } else {
        currentEmployee += `
                        <li class="list-group-item">School: ${eachEmployee.school}</li>
                    </ul>
                </div>
            </div>
        </div>
        `
    }

    return currentEmployee;
    }).join('');

    return employeeList;
};

function generatePage(pageDetails) {
    let sortedDetails = pageDetails.sort(function(a,b) {
       return a.id - b.id
    });

    const pageSource = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee Roster</title>
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" />
    </head>
    <body>
        <header class='bg-danger p-4 m-4'>
            <h2 class='text-light text-center'>My Team</h2>
        </header>
        <main>
            <div class='container'>
                <div class="row justify-content-md-center">
                ${generateCards(sortedDetails)}
                </div>
            </div>
        </main>
    </body>
    </html>
    `;

    writeFile(pageSource)
        .then(writeFileResponse => {
            console.log(writeFileResponse);
        })
        .catch(err => {
            console.log(err);
        });
};

module.exports = generatePage;