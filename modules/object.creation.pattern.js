console.log('Factory Pattern');
console.log('**********************************');
var PersonFactory = function(name, age, state){
    var temp = {};
    temp.age = age;
    temp.name = name;
    temp.state = state;
    temp.printPerson = function(){
        console.log(this.name + ' ' + this.age + ' ' + this.state);
    };
    return temp;
};
var person1 = PersonFactory('Rajesh', 36, 'TN');
person1.printPerson();
console.log('**********************************');

console.log('**********************************');
console.log('Constructor Pattern');
console.log('**********************************');
var PersonConstructor = function(name, age, state){
    this.name = name;
    this.age = age;
    this.state = state;

    this.printPerson = function(){
        console.log(this.name + ' ' + this.age + ' ' + this.state);
    };
};
var person2 = new PersonConstructor('Rajesh', 36, 'TN');
person2.printPerson();
console.log('**********************************');

console.log('**********************************');
console.log('Prototype Pattern');
console.log('**********************************');
var PersonProto = function(){};
PersonProto.prototype.age = 0;
PersonProto.prototype.name = '';
PersonProto.prototype.state = '';
PersonProto.prototype.printPerson = function(){
    console.log(this.name + ' ' + this.age + ' ' + this.state);
};
var person3 = new PersonProto();
person3.age = 36;
person3.name = 'Rajesh';
person3.state = 'TN';
person3.printPerson();