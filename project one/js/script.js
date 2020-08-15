
// Object Literal for the Salon
const salon={
    name:"Fauna Fashionista",
    phone: "555-555-5555",
    email: "faunafashion@gmail.com",
    address:{
        city: "Lake Havasu City",
        country: "USA", 
        number: "125-K"
    },
    pets: [],
    petId: 0
}
// console.log(salon);
let {name, phone, email, address:{city, country, number}}=salon;
// console.log(city);

document.getElementById("info").innerHTML=`<p><b>${city}</b><br>
    ${country} ${number} <br>
    ${phone} <br>
    ${email}
</p>`;


// Object constructor for the pets

class Pet{
    constructor(name, age, type, breed, gender, service, owner, contact, good){
        this.name = name;
        this.age = age;
        this.type = type;
        this.breed = breed;
        this.gender = gender;
        this.service = service;
        this.owner = owner;
        this.contact = contact;
        this.good = good;
    }
}

const scooby = new Pet("Scooby", 4, "Dog", "Dane", "Male", "Full", "Shaggy", "444-444-4444", "is a very good");
const sif = new Pet("Sif", 78, "Wolf", "Wolf", "Female", "Full", "Artorius", "333-333-3333", "is a very good");
const henry = new Pet("Henry", 1, "Dog", "Labrador", "Male", "Nails Cut", "Gabe", "222-222-2222", "is a very good");
const trevor = new Pet("Trevor", 3, "Cat", "Calico", "Male", "Bath", "Leanna", "111-111-1111", "is a very good");

salon.pets.push(scooby);
salon.pets.push(sif);
salon.pets.push(henry);
salon.pets.push(trevor);

console.log(salon.pets.length);

for(i=0;i<salon.pets.length;i++){
    console.log(salon.pets[i].name);
};

// get info from the inputs

// register function

function register(){
    // get values from txt element
    var petName = document.getElementById("petName");
    var petAge = document.getElementById("petAge");
    var petType = document.getElementById("petType");
    var petBreed = document.getElementById("petBreed");
    var petGender = document.getElementById("petGender");
    var petService = document.getElementById("petService");
    var ownerName = document.getElementById("ownerName");
    var ownerContact = document.getElementById("ownerContact");
    var isGood = document.getElementById("isGood");

    //create the pet object with input info
    var thePet = new Pet(petName.value, petAge.value, petType.value, petBreed.value, petGender.value, petService.value, ownerName.value, ownerContact.value, isGood.value);

    // push pet into array
    salon.pets.push(thePet);
    for(i=0;i<salon.pets.length;i++){
        console.log(salon.pets[i].name);
    };
    display();
    clear();
    
}

function clear(){
    petName.value="";
    petAge.value="";
    petType.value="";
    petBreed.value="";
    petGender.value="";
    petService.value="";
    ownerName.value="";
    ownerContact.value="";
    isGood.value="";
}
var ageComp = 0;
for(j=0;j<salon.pets.length;j++){
    if(salon.pets[j].age>ageComp){
        ageComp=salon.pets[j].age;
    }
}
for(k=0;k<salon.pets.length;k++){
    if(salon.pets[k].age==ageComp){
        console.log(salon.pets[k].name + " is the oldest pet.");
    }
}
for(x=0;x<salon.pets.length;x++){
    if(salon.pets[x].age<ageComp){
        ageComp=salon.pets[x].age;
    }
}
for(y=0;y<salon.pets.length;y++){
    if(salon.pets[y].age==ageComp){
        console.log(salon.pets[y].name + " is the youngest pet.");
    }
}

function displayTable(aPet){
    if(aPet.gender=="Male"){
        var pro = "He";
        var noun = "boy"
    }else if(aPet.gender=="Female"){
        var pro = "She";
        var noun = "girl";
    }
    var tbody = document.getElementById('rowPet');
    var row = `<tr>
                <td>${aPet.name}</td>
                <td>${aPet.age}</td>
                <td>${aPet.type}</td>
                <td>${aPet.gender}</td>
                <td>${aPet.breed}</td>
                <td>${aPet.service}</td>
                <td>${aPet.owner}</td>
                <td>${aPet.contact}</td>
                <td>${pro} ${aPet.good} ${noun}!</td>
            </tr>`;
    tbody.innerHTML+=row;
}

displayTable(scooby);
displayTable(sif);
displayTable(henry);
displayTable(trevor);