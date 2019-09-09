document.getElementById("diceVis").style.visibility = "hidden";

 

function hideBtn()
{
    document.getElementById("startBtn").style.visibility = "hidden";
    document.getElementById("h2start").style.visibility = "hidden";
    document.getElementById("diceVis").style.visibility = "visible";
}


function  startDiceGame() 
{
    
    
   
    var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
    var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
    var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource);
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
    //If player 1 wins
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    }
    else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}



// changeRandomDice1();
// changeRandomDice2();

// function changeRandomDice1() {
//     var imageArray1 = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
//     var randomImage = Math.floor(Math.random() * imageArray1.length ) ;
//     var randomnumber1 = Math.floor(Math.random() * 6) +1;

//     document.getElementById('diceee1').src = imageArray1[randomImage];
// }


// function changeRandomDice2() {
//     var imageArray2 = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
//     var randomImage = Math.floor(Math.random() * imageArray2.length );
    
//     document.getElementById('diceee2').src = imageArray2[randomImage];
//     var randomnumber2 = Math.floor(Math.random() * 6) +1 ;
// }



// if (randomnumber1 > randomnumber2)
// {
// alert("winnnnnnnnnnnnnnnn")
// }
