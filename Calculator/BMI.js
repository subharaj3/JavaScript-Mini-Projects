let ins=document.querySelector(".container-ins");
let weight=Number(document.querySelector("#dobin").value);
let height=Number(document.querySelector("#tdbin").value);
let message=document.querySelector(".message");
let ptr=document.querySelector(".ptr");
let bmi;
let btn=document.querySelector(".btn");

const displayer=(bmi)=>{
    document.querySelector("#p1").innerText=bmi;

    if(bmi<18.5){
        message.innerText="Underweight";
        ptr.style.left="0.5vw";
        ptr.style.borderTop="1rem solid royalblue";
        message.style.color="royalblue";
    }
    else if(bmi>=18.5 && bmi<=24.9){
        message.innerText="Normal";
        ptr.style.left="4vw";
        ptr.style.borderTop="1rem solid lightgreen";
        message.style.color="lightgreen";
    }
    else if(bmi>=25 && bmi<=29.9){
        message.innerText="Overweight";
        ptr.style.left="8vw";
        ptr.style.borderTop="1rem solid #b0b06d";
        message.style.color="#b0b06d";
    }
    else if(bmi>=30 && bmi<=34.9){
        message.innerText="Obese Class 1";
        ptr.style.left="12vw";
        ptr.style.borderTop="1rem solid #b99d62";
        message.style.color="#b99d62";
    }
    else if(bmi>=35 && bmi<=39.9){
        message.innerText="Obese Class 2";
        ptr.style.left="16vw";
        ptr.style.borderTop="1rem solid #e54a34";
        message.style.color="#e54a34";
    }
    else if(bmi>=40){
        message.innerText="Severely Obese";
        ptr.style.left="19vw";
        ptr.style.borderTop="1rem solid rgb(255, 23, 23)";
        message.style.color="rgb(255, 23, 23)";
    }
}

const clickFunc=()=>{
    weight=Number(document.querySelector("#dobin").value);
    height=Number(document.querySelector("#tdbin").value)/100;
    bmi=(weight/(height*height)).toFixed(2);
    ptr.style.borderTop="1rem solid black";
    ptr.style.borderBottom="none";
    displayer(bmi);
}

ins.onkeydown = function(event){
    if(event.key == 'Enter'){
        clickFunc();
    }
}

btn.addEventListener("click",clickFunc);

