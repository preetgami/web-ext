fetch("https://api.quotable.io/random")
.then(data=>data.json())

.then(quote=>{
    const quoteText = quote.content;
    const quoteauthor = quote.author;

    const quoteElemet=document.getElementById("quoteelement");
    const quoteauth=document.getElementById("auth");
    quoteauth.innerHTML = quoteauthor;
    quoteElemet.innerHTML = quoteText;
})
.catch(error=>{
    console.log("Error fetching quote:", error);
})

function fetchWeather(long,lat){
fetch(`https://api.open-meteo.com/v1/forecast?latitude=${long}&longitude=${lat}&hourly=temperature_2m`)
.then(data=>data.json())
.then(data=>{
        console.log(data,"waether")

        const weather = data.hourly

        const temp = weather.temperature_2m

        let w = temp[0]

        const weatherElement = document.getElementById("weather");
        weatherElement.innerHTML =w
        var result = document.getElementById('result');

        result.textContent = ""

})
.catch(error=>{
    
    console.log("Error fetching weather:", error);

}

)
}
function getCity() {
    var cityField = document.getElementById('cityfield').value;
    var result = document.getElementById('location');
    if (cityField.length<5){
        result.textContent = ""

        var result = document.getElementById('result');

        result.textContent="city must contain more than 5 letters"
    }
    else{
        cityField = cityField.toUpperCase()

        result.textContent = cityField;
        getLat(cityField)

    }

    
}
var subButton = document.getElementById('subButton');
subButton.addEventListener('click', getCity); 

function getLat(city){

    fetch(`https://nominatim.openstreetmap.org/search.php?q=${city}&format=jsonv2`)
    .then(data=>data.json())
    .then(data=>{
        const location=data[0]
        const long = location.boundingbox[0]
        const lat = location.boundingbox[2]
        console.log(long,lat)
        fetchWeather(long,lat)

    }
    )
    .catch(error=>{
        const weatherElement = document.getElementById("weather");
        weatherElement.innerHTML = "We cant find that city"
        var result = document.getElementById('location');
        result.textContent=""
    })
}

