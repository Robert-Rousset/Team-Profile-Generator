const Manager = require("../lib/Manager");

describe('Manager', () => {
    // ERROR FOR NO GITHUB PROVIDED
    it("throws an Error if no github name is passed", () => {
        expect(() => {
            new Manager("Rob", 10, "email@email.com", "twenty");
        }).toThrow(console.error('Please enter a valid office number'))
    })
    it("returns the 'Manager' role when getRole() is called", () =>{
        const manager = new Manager("Rob", 10, "email@email.com", 11)
        expect(manager.getRole()).toEqual("Manager")
    })
})