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
                runGame(gameType);
            }
        })
    }
    runGame ("addition");
})

/**
 * The main game loop, called when script is first loaded
 * and after users answer has been processed
 */
function runGame(gameType){
    //create 2 random numbers 1>25
    let num1 =Math.floor(Math.random()*25)+1
    let num2 = Math.floor(Math.random()*25)+1
    if(gameType==="addition"){
        displayAdditionQuestion(num1,num2);

    } else{alert(`Unknown Gametype ${gameType}`);
    throw `Unknown Game Type ${gameType}. Aborting!`
}
}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}
function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(operand1,operand2){
    document.getElementById('operand1').textContent=operand1;
    document.getElementById('operand2').textContent=operand2;
    document.getElementById('operator').textContent="+";

}

function displaySubtractionnQuestion(){
    
}

function displayMultiplyQuestion(){
    
}

function displayDivideQuestion(){
    
}