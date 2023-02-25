// TODO: Write code to define and export the Employee class
// class declaration 

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;

//& Classes are a template for creating objects
//& Classes in JS are built on prototypes 
//& Classes are "special functions"
//& Two types of Classes - class expression or class declaration 

//& class declaration is used here which creates a new class with a given name using proptype inheritance

