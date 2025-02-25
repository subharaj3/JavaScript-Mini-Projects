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

const dec2bin=(val)=>{
    let value_ts="";
    let temp=Number(val);
    let cnt=0;
    while(temp>0){
        value_ts+=(temp&1);
        temp=temp>>1;
        cnt++;
        if(cnt===4){
            value_ts+=" ";
            cnt=0;
        }
    }
    cnt=0;
    let i=value_ts.length-1;
    while(value_ts[i]!==" ")
        i--;
    cnt=(i+4)-(value_ts.length-1);
    while(cnt){
        value_ts+='0';
        cnt--;
    }
    return value_ts.split('').reverse().join('');;
};

const dec2hex=(val)=>{
    let value_ts="";
    let temp=val.split(" ");
    for(let i=0;i<temp.length;i++){
        value_ts+=fig2[temp[i]];
    }
    return value_ts;
};

const hex2bin=(val)=>{
    let temp=val.toUpperCase().split('');
    let value_ts="";
    for (let i of temp){
        value_ts+=fig1[i];
        value_ts+=" ";
    }
    return value_ts;
};

const bin2hex=(val)=>{
    let temp=val.split('').reverse();
    let val_temp="";
    let cnt=0;
    for(let i of temp){
        val_temp+=i;
        cnt++;
        if(cnt===4){
            val_temp+=" ";
            cnt=0;
        }
    }
    val_temp=val_temp.split('');
    let i=val_temp.length-1;
    while(val_temp[i]!==" ")
        i--;
    cnt=(i+4)-(val_temp.length-1);
    while(cnt){
        val_temp.push('0');
        cnt--;
    }
    return dec2hex(val_temp.reverse().join(''));
};

const bin2dec=(val)=>{
    let value_ts=0;
    let n=val.length;
    for(let i=0;i<n;i++){
        let dec=Number(val[n-i-1]);
        value_ts+=dec*Math.pow(2,i);
    }
    return String(value_ts);
}

const hex2dec=(val)=>{
    val=val.toUpperCase().split('');
    let value_ts='';
    for(let i of val){
        value_ts+=fig1[i];
    }
    return bin2dec(value_ts);
}

const convert=(val)=>{
    if(from_s.value==="Dec" && to_s.value==="Bin"){
        return dec2bin(val);
    }
    else if(from_s.value==="Dec" && to_s.value==="Hex"){
        return dec2hex(dec2bin(val));
    }
    else if(from_s.value==="Hex" && to_s.value==="Bin"){
        return hex2bin(val);
    }
    else if(from_s.value==="Hex" && to_s.value==="Dec"){
        return hex2dec(val);
    }
    else if(from_s.value==="Bin" && to_s.value==="Dec"){
        return bin2dec(val);
    }
    else if(from_s.value==="Bin" && to_s.value==="Hex"){
        return bin2hex(val);
    }
    else if(from_s.value===to_s.value && from_s.value!=="None"){
        return from_d.value;
    }
    else{
        return "-";
    }
};

clr.addEventListener("click",()=>{
    from_d.value="";
    to_d.value="-";
});

cont.onkeydown = function(event){
    if(event.key === 'Enter') {
        converter();        
    }
};

const converter=()=>{
    to_d.value=convert(from_d.value);
};

conv.addEventListener("click",converter);