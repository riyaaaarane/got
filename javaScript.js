const URL = "https://api.gameofthronesquotes.xyz/v1/random"
const factPara = document.querySelector("#fact");
const button = document.querySelector("#btn")


const getFacts = async () => {
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    factPara.innerText = data.sentence
}

button.addEventListener("click", getFacts)