const dis1=document.querySelector("h3");
const dis2=document.querySelector("p");
const allclr=document.querySelector("#allclr");
const clr=document.querySelector("#clr");
const btns=document.querySelectorAll(".btn");
let val=0.0;
let flag=false;

dis1.scrollLeft += dis1.scrollWidth;
dis2.scrollLeft += dis2.scrollWidth;

const resetdisplay=()=>{
    dis1.classList.remove("dis1x");
    dis2.classList.remove("dis2x");
    dis1.innerText="";
    dis2.innerText="0";
}

const funcCaller=(a)=>{
    if(Number.isInteger(Number(a)) || a==="."){
        dis1.innerText=dis1.innerText+a;
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
            val=new Function(`return ${dis1.innerText}`)();
            dis2.innerText=val;
        }
    }
    else if(a==="+"||a==="-"||a==="*"||a==="/"){
        val = new Function(`return ${dis1.innerText}`)();
        dis1.innerText+=a;
        dis2.innerText=val;
    }
    else{
        val = new Function(`return ${dis1.innerText}`)();
        dis2.innerText=val;
        dis2.classList.add("dis2x");
        dis1.classList.add("dis1x");
        flag=true;
    }
}

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        funcCaller(btn.innerText);
    })
})