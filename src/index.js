function consoleInput(){
    const userInput = document.querySelector("#input");
    console.log(userInput.value); 
};

const consoleButton = document.querySelector("#console");
consoleButton.addEventListener("click",consoleInput);