const jokecontainer=document.getElementById("jokecontainer");
const button=document.getElementById("button");
const url="https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,explicit&type=single";
let getjoke = ()=>{
    fetch(url).then
    (response=>response.json()).then(data=>
        {
            jokecontainer.textContent=`${data.joke}`
        });
       

        
}
button.addEventListener("click",getjoke());
getjoke();


   