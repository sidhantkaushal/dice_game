//Creating a random number
var randomNumber1=Math.floor(Math.random()*6)+1;
var n=randomNumber1;

// manipulating the img src attribute;

document.querySelector(".img1").setAttribute("src","images/dice"+n+".png");


//Creating a random number
var randomNumber2=Math.floor(Math.random()*6)+1;
var  m=randomNumber2;

// manipulating the img src attribute;

document.querySelector(".img2").setAttribute("src","images/dice"+m+".png");

var result;
if(n==m){
result="Draw";
}
else if(n>m){
    result="🚩Player 1 Wins";
}
else{
    result="Player 2 Wins🚩";
}

document.querySelector("h1").innerHTML=result;