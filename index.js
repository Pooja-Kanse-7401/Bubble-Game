var hitrn = 0;

function makeBubbols(){
    var boba = "";

for(i=1; i<=168; i++ ){
    var rn = Math.floor(Math.random()*10)
    boba +=`<div class="bubble">${rn}</div>`;       //+= saves all bubbole
}

document.querySelector("#pbtm").innerHTML = boba;
}

var timer = 60;
function runTimer(){
    var timerIntVal = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        else{
            clearInterval(timerIntVal);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over<h1>`+`<button id="start"> START AGAIN </button>`;
            const start = document.querySelector("#start");
            start.addEventListener("click",()=>{
                window.location.reload();
            });
        }
    },1000);
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitrn;
}

var score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click",
function(details){
    var clickedNum = Number(details.target.textContent);
    if(clickedNum === hitrn){
        increaseScore();
        makeBubbols();
        getNewHit();
    }
});

// increaseScore();
getNewHit();
runTimer();
makeBubbols();