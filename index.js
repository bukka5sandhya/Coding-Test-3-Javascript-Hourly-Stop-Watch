let minutesEle = document.getElementById("minutes"); 
let secondsEle =document.getElementById("seconds"); 
let startBtnEle = document.getElementById("startBtn"); 
let stopBtnEle = document.getElementById("stopBtn"); 

let statC =0;
let minC=0; 
let secC=0; 

startBtnEle.onclick = function(){
    statC = setInterval(function(){
        secC += 1;
        if(secC  < 10){
            secondsEle.textContent ="0"+secC;
        } else{
            secondsEle.textContent =secC;
        } 
        if(secC === 60){
            secC =0; 
            minC +=1 ; 
            minutesEle.textContent = minC;
        }
    },1000);
};

stopBtnEle.onclick = function(){
    clearInterval(statC);
};