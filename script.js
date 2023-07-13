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


fetch("https://api.open-meteo.com/v1/forecast?latitude=53.5501&longitude=-113.4687&hourly=temperature_2m")
.then(data=>data.json())
.then(data=>{

        const weather = data.hourly

        const temp = weather.temperature_2m

        let w = temp[0]
        console.log(w)

        const windspeed = weather.windspeed
        const weatherElement = document.getElementById("weather");
        weatherElement.innerHTML =w

})
.catch(error=>{
    console.log("Error fetching weather:", error);

}

)