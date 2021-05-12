class Employee {
    constructor(name, id, email){
        if(name===undefined && id===undefined && email===undefined){
            console.error('Please enter a valid name, id and email')
        }
        if(typeof name!=="string"){
            console.error("Please enter a valid name")
        }
        if(typeof id!=='number'){
            console.error("Please enter a valid id")
        }
        if(typeof email!=="string"){
            console.error("Please enter a valid email")
        }
        this.name = name;
        this.id = id;
        this.email = email;
    }

}

const Rob = new Employee("", -1,)

console.log(Rob)
module.exports = Employee;