let today_date=document.querySelector("#tdbin");
let dob=document.querySelector("#dobin");
let btn=document.querySelector(".btn");
let dob_val="";
let td_val;
const date=new Date();

let td=date.getDate();
let tm=date.getMonth()+1;
let ty=date.getFullYear();

td_val=`${td}-${tm}-${ty}`;
today_date.innerText=td_val;

let dobd_val;
let tdd_val;
let disd=0;
let dism=0;
let disy=0;

const calculate=(dob_val)=>{
    dobd_val=((Number(dob_val[0])-1)*365)+((Number(dob_val[1])-1)*30.5)+(Number(dob_val[2]));
    tdd_val=((ty-1)*365)+((tm-1)*30.5)+(td);
    disy=Math.floor((tdd_val-dobd_val)/365);
    dism=Math.floor(((tdd_val-dobd_val)%365)/30);
    disd=Math.floor(((tdd_val-dobd_val)%365)%30);
}

const displayer=()=>{
    p1.innerText=disy;
    p2.innerText=dism;
    p3.innerText=disd;
};

dob.onkeydown = function(event){
    if(event.key=='Enter' && dob_val!==""){
        displayer();
    }
}

dob.addEventListener("change",()=>{
    dob_val=dob.value.split('-');
    calculate(dob_val);
});

btn.addEventListener("click",displayer)