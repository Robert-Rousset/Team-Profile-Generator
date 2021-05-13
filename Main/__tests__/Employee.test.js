const Employee = require("../lib/Employee");

describe('Employee', () => {
    // ERROR FOR NO PARAMETERS
    it("throws an Error if no parameters are passed", () => {
        expect(() => {
            new Employee();
        }).toThrow(console.error('Please enter a valid name, id, and email'))
    })
    // ERROR FOR NO NAME PARAMETER
    it("throws an Error if no name is passed", () => {
        expect(() => {
            new Employee(1, 10, "email@email.com");
        }).toThrow(console.error('Please enter a valid name'))
    })
        // ERROR FOR NO ID PARAMETER
    it("throws an Error if no id is passed", () => {
        expect(() => {
            new Employee("Rob", "ten", "email@email.com");
        }).toThrow(console.error('Please enter a valid id'))
    })
        // ERROR FOR NO EMAIL PARAMETER
    it("throws an Error if no email is passed", () => {
        expect(() => {
            new Employee("Rob", 10, 1);
        }).toThrow(console.error('Please enter a valid email'))
    })

    // Now for when it does work 
    it("Creates an Employee object with a Name, ID, and Email when all parameters are correctly passed", () => {
        expect(new Employee("Rob", 10, "email@email.com").toEqual({name: "Rob", ID: 10, email: "email@email.com"}))
    })
    it("returns the correct name when getName() is called", () =>{
        const employee = new Employee("Rob", 10, "email@email.com")
        expect(employee.getName()).toEqual("Rob")
    })
    it("returns the correct ID when getId() is called", () =>{
        const employee = new Employee("Rob", 10, "email@email.com")
        expect(employee.getId()).toEqual(10)
    })
    it("returns the correct Email when getEmail() is called", () =>{
        const employee = new Employee("Rob", 10, "email@email.com")
        expect(employee.getEmail()).toEqual("email@email.com")
    })


})

