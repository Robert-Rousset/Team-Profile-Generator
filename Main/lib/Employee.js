class Employee {
    constructor(name, id, email){
        if(name===undefined && id===undefined && email===undefined){
            throw Error('Please enter a valid name, id and email')
        }
        if(typeof name!=="string"){
            throw Error("Please enter a valid name")
        }
        if(typeof id!=='number'){
            throw Error("Please enter a valid id")
        }
        if(typeof email!=="string"){
            throw Error("Please enter a valid email")
        }
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee"
    }
}
module.exports = Employee;