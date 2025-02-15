let searchbox=document.querySelector(".Searchbox");
const btn=document.querySelector(".Searchbtn");
let tsk_con=document.querySelector(".task-container");
let cnt=0;

const valueadd=()=>{
    return searchbox.value;
};

searchbox.onkeydown = function(event){
    if(event.key === 'Enter') {
        task_adder();        
    }
}

const task_maker = (task_val) => {
    cnt = cnt + 1;
    let task = document.createElement("div");
    task.classList.add("tasks");
    task.setAttribute("id", `task${cnt}`);
    task.innerHTML = `<input type='checkbox' name='Example' class='task'>
                      <p class='task-text'>${task_val}</p>
                      <button class="cross" id='${cnt}'>X</button>`;
    tsk_con.append(task);

    // Select the newly created cross button
    let cross_btn = task.querySelector(".cross");

    // Add event listener to remove the task when clicked
    cross_btn.addEventListener("click", () => {
        task.remove();
    });
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