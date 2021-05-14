const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github){
    super(id, name, email)
    this.github = github;
    }
    
}