const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const generatePage = require('./generate-site.js');

const inquirer = require('inquirer');

function Roster() {
    //initialize employee roster array
    this.employees =[];
}

Roster.prototype.initializeTeam = function() {
        //add manager data before starting team
        console.log(`
        ======================
        Please build your team
        ======================
        `);
    
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'manager',
                message: "Enter Team Manager's name:",
                validate: managerInput => {
                    if (managerInput) {
                        return true;
                    } else {
                        console.log('Please enter a name for your team manager.');
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'id',
                message: "Enter the manager's employee ID:",
                validate: idInput => {
                    if (idInput) {
                        return true;
                    } else {
                        console.log('You must enter an employee ID number.');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter the manager's email address:",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter an email address.');
                        return false;
                    }
                }
            },
            {
                type: 'number',
                name: 'office',
                message: "Enter the manager's office number:",
                validate: officeInput => {
                    if (officeInput) {
                        return true;
                    } else {
                        console.log('You must enter an office number.');
                        return false;
                    }
                }
            }
        ]).then(answers => {
            //destructure elements from object
            let {manager, id, email, office} = answers;

            //add manager to employee array
            this.employees.push(new Manager(manager, id, email, office));

            //go to team creation selection
            this.teamComplete();
        });
};

Roster.prototype.teamComplete = function() {
    //Check to see if manager would like to add new employee or generate site.
    inquirer.prompt({
        type: 'list',
        name: 'confirm',
        message: 'What would you like to do?',
        choices: ['Add an Engineer', 'Add an Intern', 'Finish Building Team'],
        Default: 2
    }).then(({confirm}) => {
        if (confirm === 'Add an Engineer') {
            //add engineer to employee array
            this.addEngineer();
        } 
        else if (confirm === 'Add an Intern') {
            //add intern to employee array
            this.addIntern();
        } else {
            //stop building team and create page
            generatePage(this.employees);
        }
    });
};

Roster.prototype.addEngineer = function() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter Engineer's Name: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You must enter a name.');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: "Please enter Engineer's Employee ID: ",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('You must enter an employee id.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter Engineer's email address: ",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('You must enter an email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter Engineer's GitHub username: ",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('You must enter a username.');
                    return false;
                }
            }
        }
    ]).then(answers => {
        //desctructure object into variables
        let {name, id, email, github} = answers;

        //load destructured variables into class
        this.employees.push(new Engineer(name, id, email, github));
        
        //go back to team creation selection
        this.teamComplete();
    })
}

Roster.prototype.addIntern = function() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter Intern's Name: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('You must enter a name.');
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: "Please enter Intern's Employee ID: ",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('You must enter an employee id.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter Intern's email address: ",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('You must enter an email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter Intern's school: ",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('You must enter a school.');
                    return false;
                }
            }
        }
    ]).then(answers => {
        //destructure elements from object
        let {name, id, email, school} = answers;

        //create intern using destructured elements
        this.employees.push(new Intern(name, id, email, school));

        //return to team creation selection
        this.teamComplete();
    })
}

module.exports = Roster;