const base_url="https://latest.currency-api.pages.dev/v1/currencies";
const dropdowns=document.querySelectorAll(".dropdown select");
const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");

const btn=document.querySelector("#btn");

for(let select of dropdowns){
    for(currCode in countryList){
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;

        if(select.name==="from" && currCode==="USD"){
            newOption.selected="selected";
        }
        else if(select.name==="to" && currCode==="INR"){
            newOption.selected="selected";
        }

        select.append(newOption);

        select.addEventListener("change",(evt)=>{
            updateFlag(evt.target);
        })
    }
}

const updateFlag=(element)=>{
    let currCode=element.value;
    console.log(element);
    let newCode=countryList[currCode];
    let newLink=`https://flagsapi.com/${newCode}/shiny/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newLink;
}

const updateExchange=async ()=>{
    let amount=document.querySelector(".input-box input");
    let amtVal=amount.value;
    if(amtVal==="" || amtVal<1){
        amtVal=1;
        amount.value=1;
    }

    const url=`${base_url}/${fromCurr.value.toLowerCase()}.json`;
    let promise=await fetch(url);
    let data=await promise.json();
    let rate=data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];

    let finalval=amtVal*rate;
    msg.innerText=`${amtVal} ${fromCurr.value} = ${finalval} ${toCurr.value}`;
}

btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    updateExchange();
});

window.addEventListener("load",updateExchange);