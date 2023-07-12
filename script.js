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
