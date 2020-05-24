const Employee = require('../lib/Employee.js');

test('create an employee object', () => {
    const employee = new Employee('Lisa', 24, 'lisa@example.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('get the employee name value', () => {
    const employee = new Employee('Aiden', 12, 'aiden@example.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test('return employee id number', () => {
    const employee = new Employee('Theresa', 10, 'theresa@example.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('return employee email address', () => {
    const employee = new Employee('Hannah', 13, 'hannah@example.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('return employee role', () => {
    const employee = new Employee('Seamus', 33, 'seamus@example.com');

    expect(employee.getRole()).toBe('Employee');
});