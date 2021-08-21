function diceeRun(){
    return Math.floor(Math.random() * 6)+1;
}

function selector(a, b){
    document.querySelector(a).setAttribute("src", "images/dice" + b + ".png");
}

function results(result){
    document.querySelector("h1").innerHTML = result;
}

/////// Start Play Game//////
////Player1/////
let dice1 = diceeRun();
selector(".img1",dice1);

////Player2/////
let dice2 = diceeRun();
selector(".img2",dice2);


///////Game results//////

if(dice1 > dice2){
    results("Player1 Wins") 
}else if(dice1 < dice2){
    results("Player2 Wins")
}else{
    results("Drow")
}