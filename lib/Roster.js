const Employee = require('./Employee');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const generatePage = require('./generate-site');

const inquirer = require('inquirer');


function Roster() {
    this.employees =[];

}

Roster.prototype.initializeTeam = function() {
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
            let {manager, id, email, office} = answers;
            this.employees.push(new Manager(manager, id, email, office));

            this.teamComplete();
        });
};

Roster.prototype.teamComplete = function() {
    inquirer.prompt({
        type: 'list',
        name: 'confirm',
        message: 'What would you like to do?',
        choices: ['Add an Engineer', 'Add an Intern', 'Finish Building Team'],
        Default: 2
    }).then(({confirm}) => {
        if (confirm === 'Add an Engineer') {
            this.addEngineer();
        } 
        else if (confirm === 'Add an Intern') {
            this.addIntern();
        } else {
            this.generatePage();
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
        let {name, id, email, github} = answers;
        this.employees.push(new Engineer(name, id, email, github));
        console.log(this.employees);
        
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
        let {name, id, email, school} = answers;
        this.employees.push(new Intern(name, id, email, school));
        console.log(this.employees);

        this.teamComplete();
    })
}

Roster.prototype.generatePage = function() {
    console.log(this.employees[0].getRole());
    console.log(this.employees[3].getSchool());
}

module.exports = Roster;