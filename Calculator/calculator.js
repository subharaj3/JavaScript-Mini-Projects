const dis1=document.querySelector("h3");
const dis2=document.querySelector("p");
const allclr=document.querySelector("#allclr");
const clr=document.querySelector("#clr");
const btns=document.querySelectorAll(".btn");
let num1=0.0;
let val=0.0;
let opr="";
let cnt=true;
let flag=false;

dis1.scrollLeft += dis1.scrollWidth;
dis2.scrollLeft += dis2.scrollWidth;

const resetdisplay=()=>{
    dis1.classList.remove("dis1x");
    dis2.classList.remove("dis2x");
    dis1.innerText="";
    val=0;
    cnt=true;
    dis2.innerText="0";
}

const calVal=(num1,num2,opr)=>{
    if(opr==="+")
        return num1+num2;
    else if(opr==="-"){
        return num1-num2;
    }
    else if(opr==="*"){
        return num1*num2;
    }
    else if(opr==="/"){
        return num1/num2;
    }
}

//Without using New Function or eval. But can't calculate when a operator has been an input and then backspaced
const funcCaller=(a)=>{
    if(a==="+"||a==="-"||a==="*"||a==="/"){
        flag=false;
        if(cnt){
            val=Number(dis1.innerText);
            dis1.innerText=dis1.innerText+a;
            opr=a;
            cnt=false;
        }
        else{
            num1=Number(dis1.innerText.split(opr).pop());
            dis1.innerText=dis1.innerText+a;
            val=calVal(val,num1,opr);
            opr=a;
        }
        dis2.innerText=val;
    }
    else if(a==="AC"){
        resetdisplay();
    }
    else if(a==="CE"){
        if(flag){
            resetdisplay();
        }
        else{
            arr=Array.from(dis1.innerText);
            arr.pop();
            dis1.innerText=arr.join("");
            dis2.innerText=val;
        }
    }
    else if(Number.isInteger(Number(a)) || a==="."){
        dis1.innerText=dis1.innerText+a;
    }
    else{
        flag=true;
        num1=Number(dis1.innerText.split(opr).pop());
        val=calVal(val,num1,opr);
        dis1.classList.add("dis1x");
        dis2.innerText=String(val);
        dis2.classList.add("dis2x");
    }
}

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        funcCaller(btn.innerText);
    });
});