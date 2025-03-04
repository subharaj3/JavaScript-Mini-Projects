let clr=document.querySelector("#clear");
let conv=document.querySelector("#convert");

let to_s=document.querySelector("#to-scale");
let to_d=document.querySelector(".to-display");
let from_s=document.querySelector("#from-scale");
let from_d=document.querySelector(".from-display");

let cont=document.querySelector(".container");

const convert=(val)=>{
    if(from_s.value==="Feet" && to_s.value==="Inch"){
        return val*12;
    }
    else if(from_s.value==="Feet" && to_s.value==="Meter"){
        return val*0.3048;
    }
    else if(from_s.value==="Feet" && to_s.value==="Kilometer"){
        return val*0.000305;
    }
    else if(from_s.value==="Feet" && to_s.value==="Miles"){
        return val*0.000189;
    }
    else if(from_s.value==="Inch" && to_s.value==="Feet"){
        return val*0.0833;
    }
    else if(from_s.value==="Inch" && to_s.value==="Meter"){
        return val*0.0254;
    }
    else if(from_s.value==="Inch" && to_s.value==="Kilometer"){
        return val*0.000025;
    }
    else if(from_s.value==="Inch" && to_s.value==="Miles"){
        return val*0.000016;
    }
    else if(from_s.value==="Meter" && to_s.value==="Feet"){
        return val*3.280;
    }
    else if(from_s.value==="Meter" && to_s.value==="Inch"){
        return val*39.3700;
    }
    else if(from_s.value==="Meter" && to_s.value==="Kilometer"){
        return val*0.001;
    }
    else if(from_s.value==="Meter" && to_s.value==="Miles"){
        return val*0.000621;
    }
    else if(from_s.value==="Kilometer" && to_s.value==="Feet"){
        return val*0.0833;
    }
    else if(from_s.value==="Kilometer" && to_s.value==="Meter"){
        return val*1000;
    }
    else if(from_s.value==="Kilometer" && to_s.value==="Inch"){
        return val*39370.08;
    }
    else if(from_s.value==="Kilometer" && to_s.value==="Miles"){
        return val*0.6213;
    }
    else if(from_s.value==="Miles" && to_s.value==="Feet"){
        return val*5280;
    }
    else if(from_s.value==="Miles" && to_s.value==="Meter"){
        return val*1609.344;
    }
    else if(from_s.value==="Miles" && to_s.value==="Inch"){
        return val*63360;
    }
    else if(from_s.value==="Miles" && to_s.value==="Kilometer"){
        return val*1.6093;
    }
    else if(from_s.value===to_s.value){
        return from_d.value;
    }
    else{
        return "-";
    }
};

const check=(val)=>{
    if(val < 0){
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