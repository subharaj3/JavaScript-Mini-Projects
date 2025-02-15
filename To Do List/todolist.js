let searchbox=document.querySelector(".Searchbox");
const btn=document.querySelector(".Searchbtn");
let tsk_con=document.querySelector(".task-container");
let cnt=0;
//let arr=[];

const valueadd=()=>{
    return searchbox.value;
};

searchbox.onkeydown = function(event){
    if(event.key === 'Enter') {
        task_adder();        
    }
}

const task_maker=(task_val)=>{
    cnt=cnt+1;
    let task=document.createElement("div");
    task.classList.add("tasks");
    task.setAttribute("id",`task${cnt}`);
    task.innerHTML=`<input type='checkbox' name='Example' class='task'><p class='task-text'>${task_val}</p><button class="cross" id='${cnt}'>X</button>`;
    tsk_con.append(task);
    //arr.push(document.getElementById(cnt));
};

const task_adder=()=>{
    let example=document.getElementById("task0");
    if(example){
        example.classList.add("hide");
    }
    let tsk_val=valueadd();
    if(tsk_val!=""){
        task_maker(tsk_val);
        searchbox.value="";
        searchbox.setAttribute("placeholder","");
    }
};

btn.addEventListener("click",task_adder);

/*let cross_items=document.querySelectorAll(".cross");  //mistake1 dynamically added elements will not get in cross_items as it is calculated when js file gets complied
cross_items.forEach((element)=>{
    element.addEventListener("click",()=>{
        let task_id="task"+element.getAttribute("id");
        let rev_child=document.getElementById(task_id);
        rev_child.parentNode.removeChild(rev_child);
    });
});*/                                                   //solution is below

tsk_con.addEventListener("click", (event) => {
    if (event.target.classList.contains("cross")) {
        let task_id = "task" + event.target.getAttribute("id");
        let rev_child = document.getElementById(task_id);
        if (rev_child) {
            rev_child.parentNode.removeChild(rev_child);
        }
    }
});

/*arr.forEach((element)=>{                               //mistake 2 arr will not contain any elements as this line is executed before addition of tasks
    element.addEventListener("click",()=>{
        let task_id="task"+element.getAttribute("id");
        let rev_child=document.getElementById(task_id);
        rev_child.parentNode.removeChild(rev_child);
    });
});*/                                                   //Solution is todolist2.js file which is a better solution than the one in this file