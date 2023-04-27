const btnEl = document.getElementById("btn");
const apiKey = "iznLCbipZiZeSr4v0CiNIA==WPSObh6d6fIs4NlM";
const jokeEl = document.getElementById("joke");

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke() {

  try {

    jokeEl.innerText = "Updating..."
    btnEl.disabled = true;
    btnEl.innerText = "Loading..."
    const response = await fetch(apiURL, options);
    const data = await response.json();
    jokeEl.innerText = data[0].joke;
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke"
    
  } catch (error) {
    jokeEl.innerText = "An error happened. Try again later!";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke"
    console.log(error);
  }



}


btnEl.addEventListener("click", getJoke);