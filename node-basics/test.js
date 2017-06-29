function Person(name, country) {
    this.name = name;
    this.country = country;

    this.showDetails = function() {
        console.log('He is an awesome person');
    }
}

function Salary(empId, salId, fromDate, toDate) {
    this.empId = empId;
    this.salId = salId;
    this.fromDate = fromDate;
    this.toDate = toDate;
}

let person = new Person('LP Shivan', 'India');

console.log(typeof person);
person.showDetails();