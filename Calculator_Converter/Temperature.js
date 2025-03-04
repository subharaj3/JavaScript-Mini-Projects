let clr=document.querySelector("#clear");
let conv=document.querySelector("#convert");

let to_s=document.querySelector("#to-scale");
let to_d=document.querySelector(".to-display");
let from_s=document.querySelector("#from-scale");
let from_d=document.querySelector(".from-display");

let cont=document.querySelector(".container");

const convert=(val)=>{
    if(from_s.value==="Centrigrate" && to_s.value==="Fahrenheit"){
        return ((9*val)/5)+32;
    }
    else if(from_s.value==="Centrigrate" && to_s.value==="Kelvin"){
        return val+273.15;
    }
    else if(from_s.value==="Fahrenheit" && to_s.value==="Centrigrate"){
        return ((val-32)/9)*5;
    }
    else if(from_s.value==="Fahrenheit" && to_s.value==="Kelvin"){
        return (((val-32)/9)*5)+273.15;
    }
    else if(from_s.value==="Kelvin" && to_s.value==="Centrigrate"){
        return val-273.15;
    }
    else if(from_s.value==="Kelvin" && to_s.value==="Fahrenheit"){
        return ((9*(val-273.15))/5)+32;
    }
    else if(from_s.value===to_s.value){
        return from_d.value;
    }
    else{
        return "-";
    }
};

const check=(val)=>{
    if(from_s.value==="Centrigrate" && val < -273.15){
        return false;
    }
    else if(from_s.value==="Fahrenheit" && val < -459.67){
        return false;
    }
    else if(from_s.value==="Kelvin" && val < 0){
        return false;
    }
    else{
        return true;
    }
};

clr.addEventListener("click",()=>{
    from_d.value="";
    to_d.value="-";
    from_s.value="None";
    to_s.value="None";
});

cont.onkeydown = function(event){
    if(event.key === 'Enter') {
        converter();        
    }
}

const converter=()=>{
    if(!check(Number(from_d.value))){
        to_d.value="ERROR";
    }
    else{
        to_d.value=convert(Number(from_d.value));
    }
};

conv.addEventListener("click",converter);