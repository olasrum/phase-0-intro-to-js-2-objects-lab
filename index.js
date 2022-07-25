// Write your solution in this file!
const employee = {
    name: 'Lulu',
    streetAddress: '2 Ball Street'
}

function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    const updateEmployee = {...employee, name: 'Sam', streetAddress: '11 Broadway'};
    return updateEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

const destructEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'Sam', '12 Broadway')

function deleteFromEmployeeByKey(employee, name) {
    const deleteEmployee = {...employee}
    delete deleteEmployee.name;
    return deleteEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name;
    return employee;
}