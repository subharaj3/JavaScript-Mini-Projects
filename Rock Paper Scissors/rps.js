let btns=document.querySelectorAll(".opt");
let msg=document.querySelector(".message");
let my_score=document.querySelector("#score");
let comp_score=document.querySelector("#score-computer");
let rb=document.querySelector("#reset-btn");

const values=["rock","paper","scissor"];

const computer_option=()=>{
    return values[Math.floor(Math.random()*values.length)];
}

btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        let my_option=btn.getAttribute('value');
        let comp_option=computer_option();
        if(my_option=="rock" && comp_option=="scissor"){
            my_score.innerText=Number(my_score.innerText)+1;
            msg.innerText="You Won!";
            msg.style.backgroundColor="green";
        }
        else if(my_option=="paper" && comp_option=="rock"){
            my_score.innerText=Number(my_score.innerText)+1;
            msg.innerText="You Won!";
            msg.style.backgroundColor="green";
        }
        else if(my_option=="scissor" && comp_option=="paper"){
            my_score.innerText=Number(my_score.innerText)+1;
            msg.innerText="You Won!";
            msg.style.backgroundColor="green";
        }
        else if(my_option==comp_option){
            msg.innerText="Its a Tie!";
            msg.style.backgroundColor="#26547c";
        }
        else{
            comp_score.innerText=Number(comp_score.innerText)+1;
            msg.innerText="You Lost!";
            msg.style.backgroundColor="red";
        }
    });
});

rb.addEventListener("click",()=>{
    my_score.innerText="0";
    comp_score.innerText="0";
    msg.innerText="Start the Game!";
    msg.style.backgroundColor="#26547c";
})