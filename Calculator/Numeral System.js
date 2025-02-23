let clr=document.querySelector("#clear");
let conv=document.querySelector("#convert");

let to_s=document.querySelector("#to-scale");
let to_d=document.querySelector(".to-display");
let from_s=document.querySelector("#from-scale");
let from_d=document.querySelector(".from-display");

let cont=document.querySelector(".container");
const fig1={
    '0':'0000',
    '1':'0001',
    '2':'0010',
    '3':'0011',
    '4':'0100',
    '5':'0101',
    '6':'0110',
    '7':'0111',
    '8':'1000',
    '9':'1001',
    'A':'1010',
    'B':'1011',
    'C':'1100',
    'D':'1101',
    'E':'1110',
    'F':'1111',
};

const fig2={
    '0000':'0',
    '0001':'1',
    '0010':'2',
    '0011':'3',
    '0100':'4',
    '0101':'5',
    '0110':'6',
    '0111':'7',
    '1000':'8',
    '1001':'9',
    '1010':'A',
    '1011':'B',
    '1100':'C',
    '1101':'D',
    '1110':'E',
    '1111':'F',
};

const binconv=(val)=>{
    let value_ts="";
    let temp=Array.from(val);
    for(let c of temp){
        value_ts += fig1[c];
    }
    return value_ts;
};

const hexconv=(val)=>{
    let value_ts="";
    let temp;
    let len=val.length;
    for(let i=0;i<len;i++){
        temp="";
        let j;
        for(j=i;j<i+4;j++){
            temp+=val[j];
        }
        console.log(temp);
        i=j;
        value_ts+=val[temp];
    }
    return value_ts;
}

const convert=(val)=>{
    if(from_s.value==="Dec" && to_s.value==="Bin"){
        return binconv(val);
    }
    else if(from_s.value==="Dec" && to_s.value==="Hex"){
        return hexconv(binconv(val));
    }
    if(from_s.value==="Hex" && to_s.value==="Bin"){
        return binconv(val);
    }
    else if(from_s.value==="Hex" && to_s.value==="Dec"){
        return dec2con(val);
    }
    if(from_s.value==="Bin" && to_s.value==="Dec"){
        return dec2con(val);
    }
    else if(from_s.value==="Bin" && to_s.value==="Hex"){
        return dec2con(val);
    }
    else if(from_s.value===to_s.value){
        return from_d.value;
    }
    else{
        return "-";
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
    to_d.value=convert(from_d.value);
};

conv.addEventListener("click",converter);