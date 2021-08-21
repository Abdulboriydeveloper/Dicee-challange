let randomNumber = Math.floor(Math.random() *6) +1;

let randomDiceeImage = "dice" + randomNumber + ".png";

let randomImageSource = "images/" + randomDiceeImage;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


let randomNumber2 = Math.floor(Math.random() *6) +1;

let randomDiceeImage2 = "dice" + randomNumber2 + ".png";

let randomImageSource2 = "images/" + randomDiceeImage2;

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);



function results(result){
    document.querySelector("h1").innerHTML = result;
}

if(randomDiceeImage > randomDiceeImage2){
    results("Player1 Wins") 
}else if(randomDiceeImage < randomDiceeImage2){
    results("Player2 Wins")
}else{
    results("Drow")
}