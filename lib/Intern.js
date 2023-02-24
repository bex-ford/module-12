// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");
class Intern extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, officeNumber);
    }
}

module.exports = Intern;