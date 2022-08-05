console.log(data);

let image = document.getElementById("img1");
let userName = document.getElementById("user_name");
let firstName = document.getElementById("user-fname");
let lastName = document.getElementById("user_lname");
let place = document.getElementById("user_location");
let email = document.getElementById("user_email");
let cell = document.getElementById("phone");
let address1 = document.getElementById("address1");
let address2 = document.getElementById("address2");
let city = document.getElementById("city");
let country =document.getElementById("country");
let zip = document.getElementById("zip");
let button = document.getElementById("button");


function findPerson(){
    personIndex = Math.floor(Math.random()*data.length);
    person = data[personIndex];

    image.src = person.picture.large;
    userName.innerHTML = "Name: "+ person.name.first + " " + person.name.last;
    email.innerHTML = "Email: " + person.email;
    cell.innerHTML = "Phone #: " + person.cell;
    address1.innerHTML = "Address: " + person.location.street.number + " " + person.location.street.name;
    address2.innerHTML = person.location.city + ", " + person.location.country + " " + person.location.postcode;
}

button.onclick = findPerson;
