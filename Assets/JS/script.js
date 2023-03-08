var API_Key = "923a17bd8e04070a7361ee88ec3d1f23xx"

function getWeather(){
  var search = document.getElementById("cityInput");
  var cityname  = document.getElementById("time-zone");
  cityname.innerHTML = search.value;
  console.log(search.value);

fetch("https://api.openweathermap.org/data/2.5/forecast?q="+search.value+"&appid="+API_Key)
.then(response => response.json())
.then(data => {
    console.log(data) 
  })
}

