let prin;
let rate;
let year;
let month;

let op1=document.querySelector("#op1");
let tvp=document.querySelector("#tvp");
let ip=document.querySelector("#ip");
let btn=document.querySelector(".btn");

let n=0.0;
let interest=0;
let amount=0.00;

const displayer=()=>{
    tvp.innerText=Number(amount).toLocaleString();
    ip.innerText=Number(interest).toLocaleString();
}

const calculate=()=>{
    prin=Number(document.querySelector("#prinin").value);
    rate=Number(document.querySelector("#ratein").value)/100;
    year=Number(document.querySelector("#yearin").value);
    month=Number(document.querySelector("#monthin").value);

    if(month!==0){
        n=year+(month/12);
    }
    else{
        n=year;
    }

    if(op1.checked){
        amount=(prin*(Math.pow((1+rate),n))).toFixed(2);
        interest=(amount-prin).toFixed(2);
        displayer();
    }
    else{
        amount= (prin * ((Math.pow(1+(rate/12),(n*12)) - 1) / (rate/12)) * (1 + (rate/12))).toFixed(2);
        interest=(amount-(prin*n*12)).toFixed(2);
        displayer();
    }
}

btn.addEventListener("click",calculate);