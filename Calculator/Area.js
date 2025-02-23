let clr=document.querySelector("#clear");
let conv=document.querySelector("#convert");

let to_s=document.querySelector("#to-scale");
let to_d=document.querySelector(".to-display");
let from_s=document.querySelector("#from-scale");
let from_d=document.querySelector(".from-display");

let cont=document.querySelector(".container");

const convert=(val)=>{
    if(from_s.value==="m2" && to_s.value==="ft2"){
        return val*10.763;
    }
    else if(from_s.value==="m2" && to_s.value==="mi2"){
        return val*0.0000003861;
    }
    else if(from_s.value==="ft2" && to_s.value==="m2"){
        return val*0.0929;
    }
    else if(from_s.value==="ft2" && to_s.value==="mi2"){
        return val*0.00000003587;
    }
    else if(from_s.value==="mi2" && to_s.value==="ft2"){
        return val*27878400;
    }
    else if(from_s.value==="mi2" && to_s.value==="m2"){
        return val*2589988;
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