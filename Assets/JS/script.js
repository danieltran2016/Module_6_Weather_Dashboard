var API_Key = "923a17bd8e04070a7361ee88ec3d1f23"
var temp_list = document.querySelector('tem');

function getWeather(){
  var search = document.getElementById("cityInput");
  console.log(search.value);

fetch("https://api.openweathermap.org/data/2.5/forecast?q="+search.value+"&appid="+API_Key)
.then(response => response.json())
.then(data => {console.log(data)})
}

function displayWeather(data){
var {name} = data.city;
var {temp, humidity,} = data.main;
var{speed} = data.wind 
console.log(name , temp, humidity, speed)
}
displayWeather();