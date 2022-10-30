var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');
var APIKey = "bf7b44b0999819873a0d8c5e9db1d207";
var city; 
var lat;
var lon;

// Weather for city
function getApi() {
  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=city&appid=bf7b44b0999819873a0d8c5e9db1d207';

// Browser Fetch Method
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // Loop through the data and generate your HTML
         // My code and data is the response 
      for (var i=0; i< data.length;i++) {
        var userNaameContainer=document.createElement("h3");
        userNaameContainer.innerText=data[i].login;
        userContainer.appendChild(userNaameContainer);
        var issueUrl=document.createElement("a");
        issueUrl.innerText=data[i].html_url;
        userContainer.appendChild(issueUrl);
      }
    });
}
fetchButton.addEventListener('click', getApi);


// Forecast for city
function getApi() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=bf7b44b0999819873a0d8c5e9db1d207';
  
//  Browser Fetch Method
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
       // Use the console to examine the response
        console.log(data);
       // Loop through the data and generate your HTML
          //   My code and data is the response 
        for (var i=0; i< data.length;i++) {
          var userNaameContainer=document.createElement("h3");
          userNaameContainer.innerText=data[i].login;
          userContainer.appendChild(userNaameContainer);
          var issueUrl=document.createElement("a");
          issueUrl.innerText=data[i].html_url;
          userContainer.appendChild(issueUrl);
        }
      });
  }
  fetchButton.addEventListener('click', getApi);


