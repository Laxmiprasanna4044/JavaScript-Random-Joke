let joke=document.getElementById("joke");
let button=document.getElementById("btn");

let options={
    method:"GET"
};
function randomJoke(){
    let url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
    fetch(url,options).then(function(response){
        return response.json();
    }).then(function(jsonData){
        console.log(jsonData);
        let randomJoke = jsonData.joke;
        joke.textContent = randomJoke;
    })
    .catch(function(error){
        console.log("Error: " + error);
        joke.textContent = "Failed to load joke";
    });
}

button.addEventListener("click", randomJoke);