


const person= {
    name: "Patches",
    age: 44,
    student: true,
    birthday:function(){
        return new Date().getFullYear()-this.age;
    }
}

console.log(person.birthday());

class Task{
    constructor(name, priority){
        this.name=name;
        this.priority=priority;
    }
}

const task1 = new Task("Homework", "High");
const task2 = new Task("Play Dark Souls", "High");
const task3 = new Task("Excersise", "Medium");

console.log(task1);
console.log(task2);
console.log(task3);

const client = {
    name: "Gabe",
    type: "Premium",
    data:{
        address:{
            city:"Lake Havasy City",
            country:"USA"
        },
        account:{
            user:"cgseabaugh@gmail.com",
            password:"eveLYN9972!"
        }
    }
}

console.log(client);

const userName=client.data.account.user;

console.log(userName);


let {name, type}= client;
let {data:{address:{city,country}}}=client;
let {data:{account:{user,password}}}=client;
let {}

const student= [
    {name:"John", age=30},
    {name:"Paul", age=26},
    {name:"Andrew", age=34},
    {name:"Andrea", age=39},
    {name:"Travor", age=21},
    {name:"Juliet", age:19}
];

// get age greater than 25
const older = students.filter(s=>s.age>25);
console.log(older);



var lion = {
    name: "Simba",
    foodType: "Carnivore",
    kingOfTheJungle: true
}

var monkey = {
    name: "Rafiki",
    foodType: "Omnivore",
    kingOfTheJungle: false
}

class Animal {
    constructor(animal, foodType, kingOfTheJungle) {
        this.name = name;
        this.foodType = foodType;
        this.kingOfTheJungle = kingOfTheJungle
    }
}



