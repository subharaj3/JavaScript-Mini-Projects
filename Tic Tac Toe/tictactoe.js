let btns=document.querySelectorAll(".buttons");
let msg_cont=document.querySelector(".msg-container");
let game_cont=document.querySelector(".game-container");
let msg=document.querySelector("#msg");
let reset_btn=document.querySelector("#reset-btn");
let newgame_btn=document.querySelector("#newgame-btn");

const wins=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let tie_cnt=0;
let turnX=true;

const tie_display=()=>{
    msg.innerText=`This game is a tie.\nPress New Game to play again!`;
    msg_cont.classList.remove("hide");
    game_cont.classList.add("hide");
}

const newgame_maker=()=>{
    msg_cont.classList.add("hide");
    game_cont.classList.remove("hide");
    turnX=true;
    for(let btn of btns){
        btn.disabled=false;
        btn.innerText="";
        tie_cnt=0;
    }
}

const resetter=()=>{
    turnX=true;
    for(let btn of btns){
        btn.disabled=false;
        btn.innerText="";
        tie_cnt=0;
    }
}

const displayWinner=(pos1)=>{
    msg.innerText=`The winner is ${pos1}.\nPress New game to play again!`;
    msg_cont.classList.remove("hide");
    game_cont.classList.add("hide");
}

btns.forEach((buttons)=>{
    buttons.addEventListener("click",()=>{
        if(turnX){
            buttons.innerText="X";
            buttons.style.color="#ef3054";
            buttons.disabled=true;
            turnX=false;
            tie_cnt++;
        }
        else{
            buttons.innerText="O";
            buttons.style.color="#14fa51";
            buttons.disabled=true;
            turnX=true;
            tie_cnt++;
        }
        if(tie_cnt===9){
            tie_display();
        }
        checkWinner();
    });
});

const checkWinner=()=>{
    for(let win of wins){
        let pos1=btns[win[0]].innerText;
        let pos2=btns[win[1]].innerText;
        let pos3=btns[win[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                displayWinner(pos1);
            }
        }
    }
}

newgame_btn.addEventListener("click",newgame_maker);
reset_btn.addEventListener("click",resetter);