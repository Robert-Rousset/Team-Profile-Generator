const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        if (typeof officeNumber !== "number" || officeNumber === undefined || officeNumber<0) {
        throw Error("Please enter a valid office number");
        }
        this.school = officeNumber;
    }
    getRole() {
        return "Manager";
    }
}
module.exports = Manager