var userContainer = document.getElementById('users');
var fetchButton = document.getElementById('fetch-button');
var APIKey = "bf7b44b0999819873a0d8c5e9db1d207";
// var city = Miami; 
var lat;
var lon;

// Weather for city
function getCurrentWeatherApi(city) {
  var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=bf7b44b0999819873a0d8c5e9db1d207&units=imperial';

// Browser Fetch Method
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Use the console to examine the response
      console.log(data);
      // My code and data is the response 
      var userNaameContainer=document.createElement("h3");
      userNaameContainer.innerText=data.main.temp;
      userContainer.appendChild(userNaameContainer);
      var issueUrl=document.createElement("a"); 
      issueUrl.innerText=data.wind.speed;
      userContainer.appendChild(issueUrl);

    });
}


// Forecast for city
function getForecastApi(lat, lon) {                                     
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&appid=bf7b44b0999819873a0d8c5e9db1d207&units=imperial';
  
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
        for (var i=0; i< data.list.length;i++) {
          var userNaameContainer=document.createElement("h3");
          userNaameContainer.innerText=data[i].login;
          userContainer.appendChild(userNaameContainer);
          var issueUrl=document.createElement("a");
          issueUrl.innerText=data[i].html_url;
          userContainer.appendChild(issueUrl);
        }
      });
  }

// API for city name
function getApi() {
    var city = document.querySelector('#dates-input').value;
    var requestUrl = 'https://api.openweathermap.org/geo/1.0/direct?q='+city+'&limit=5&appid=bf7b44b0999819873a0d8c5e9db1d207&units=imperial';

    //  Browser Fetch Method
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
       // Use the console to examine the response
        console.log(data);
        console.log(data[0].lat,data[0].lon);
    //  Loop through the data and generate your HTML
            // My code and data is the response 
    getForecastApi(data[0].lat,data[0].lon);
    getCurrentWeatherApi(data[0].name);
      });
  }
  fetchButton.addEventListener('click', getApi);