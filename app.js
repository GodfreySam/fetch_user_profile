// get individual element 
let userImage = document.querySelector("#user-image");
let userName = document.querySelector("#name");
let userAge = document.querySelector("#age");
let userAddress = document.querySelector("#address");
let userEmail = document.querySelector("#email");
let userPhone = document.querySelector("#phone");
let nextBtn = document.querySelector("#next");

// fetch API data to a variable
const proxy = `https://cors-anywhere.herokuapp.com/`;

const api = `${proxy}https://randomuser.me/api/?results`;

// Events for button click listeners
nextBtn.addEventListener('click', getUsers);


function getUsers() {
  fetch(api)
    .then((resp) => resp.json())
    .then((data) => {
      let users = data.results;
      users.forEach(user => {
        document.querySelector('#user-profile').innerHTML = `
      <div class="image-area">
        <img src="${user.picture.large}" alt="User-image" id="user-image">
      </div>
      <ul class="user-data">
        <li><span class="profile-data">Name:</span><span id="name"> ${user.name.title} ${user.name.first} ${user.name.last}</span></li>
        <li><span class="profile-data">Age:</span><span id="age"> ${user.dob.age}</span></li>
        <li><span class="profile-data">Address:</span><span id="address"> ${user.location.city},  ${user.location.state}</span></li>
        <li><span class="profile-data">Email:</span><span id="email"> ${user.email}</span></li>
        <li><span class="profile-data">Phone:</span><span id="phone"> ${user.phone},  ${user.cell}</span></li>
      </ul>
      `;  
      })
  })
  .catch((err) => console.log(err))
}

document.querySelector("#previous").addEventListener('click', ()=>{
  getUsers() - 1;
});