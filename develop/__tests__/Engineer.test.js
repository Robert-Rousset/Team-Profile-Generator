const Engineer = require("../lib/Engineer");

describe('Engineer', () => {
    // ERROR FOR NO GITHUB PROVIDED
    it("throws an Error if no github name is passed", () => {
        expect(() => {
            new Engineer("Rob", 10, "email@email.com", 1);
        }).toThrow(console.error('Please enter a valid GitHub name'))
    })
    it("returns the GitHub name when getGithub() is called", () => {
        const engineer = new Engineer("Rob", 10, "email@email.com", "robert-rousset")
        expect(engineer.getGithub()).toEqual("robert-rousset")
    })
    it("returns the 'Engineer' role when getRole() is called", () =>{
        const engineer = new Engineer("Rob", 10, "email@email.com", "robert-rousset")
        expect(engineer.getRole()).toEqual("Engineer")
    })
})