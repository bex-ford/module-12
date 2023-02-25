// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("../lib/Employee");
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }
  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;

//& constructor is a special function that creates and intializes an object instance of a class
//& super keyword is used to access properties on an object literal or class's
//& get syntax binds an object property to a function that will be called when that property is looked up
//& this keyword refers to an object that is executing the current piece of code 
//& this keyword references the object that is executing the current function 
