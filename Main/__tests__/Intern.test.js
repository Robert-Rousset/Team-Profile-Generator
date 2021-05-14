const Intern = require("../lib/Intern");

describe('Engineer', () => {
    // ERROR FOR NO GITHUB PROVIDED
    it("throws an Error if no github name is passed", () => {
        expect(() => {
            new Intern("Rob", 10, "email@email.com", 1);
        }).toThrow(console.error('Please enter a valid GitHub name'))
    })
    it("returns the GitHub name when getGithub() is called", () => {
        const intern = new Intern("Rob", 10, "email@email.com", "Aquinas")
        expect(intern.getSchool()).toEqual("Aquinas")
    })
    it("returns the 'Engineer' role when getRole() is called", () =>{
        const intern = new Intern("Rob", 10, "email@email.com", "Aquinas")
        expect(intern.getRole()).toEqual("Intern")
    })
})