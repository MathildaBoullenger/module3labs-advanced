function Person(name, age, gender) {
this.name = name;
this.age = age;
this.gender = gender;
}

const person1 = new Person('James Brown', 73, 'male')
console.log('person1: '+ person1) //prints person1: [object Object]

//a.

Person.prototype.toString = function() {
    return `${this.name}, ${this.age}, ${this.gender}`;
  };

//console.log('person1: '+ Person.toString());
console.log('person1: '+ person1.toString());

//b.
const person2 = new Person('Amanda Smith', 35, 'female')
const person3 = new Person('Chloe Anderson', 50, 'female')
console.log('person2: '+ person2.toString());
console.log('person3: '+ person3.toString());

//c.
function Student(name, age, gender, cohort) {
    Person.call(this, name, age, gender);
    this.cohort = cohort;
  }

//d.

Student.prototype.toString = function() {
    return `${this.name}, ${this.age}, ${this.gender}, ${this.cohort}`;
  };

  const student1 = new Student('Oliver Wilson', 20, 'male', 'May 2023');
  const student2 = new Student('Emily Davis', 19, 'female', 'Feb 2023');

  console.log('student1: ' + student1.toString());
  console.log('student2: ' + student2.toString());