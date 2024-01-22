//wait for page load before starting game
//Get button eleemnts and add event listeners to them
document.addEventListener("DOMContentLoaded",function(){
    let buttons = document.getElementsByTagName("button");;

    for (let button of buttons){
        button.addEventListener ("click", function(){
            if (this.getAttribute("data-type")==="submit"){
                alert("You Clicked Submit");
            } else {
                let gameType= this.getAttribute("data-type");
                alert (`Yuo clicked ${gameType}`);
            }
        })
    }
})

/**
 * The main game loop, called when script is first loaded
 * and after users answer has been processed
 */
function runGame(){
    //create 2 random numbers 1>25
    let num1 =Math.floor(Math.random()*25)+1
    let num2 = Math.floor(Math.random()*25)+1
}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}
function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractionnQuestion(){
    
}

function displayMultiplyQuestion(){
    
}

function displayDivideQuestion(){
    
}