let todoList=[
    {
        Item:'Buy Milk',
        dueDate:12/9/2004
    },
    {
        Item:'Go to College',
        duedDate:12/9/2004
    }
  ];
displayItems();

function addTodo(){
    let inputElement=document.querySelector('#input_todo');
    let dateElement=document.querySelector('#todoDate')
    let todoItem=inputElement.value;
    let todoDate=dateElement.value;
    todoList.push({Item: todoItem,
        dueDate:todoDate});
    todoItem=inputElement.value='';
    todoDate=dateElementElement.value='';


    displayItems();
}

function displayItems(){
    let containerElement=document.querySelector('.todo_container');
    let newHtml='';
    for(let i=0;i<todoList.length;i++){
    newHtml+=`
    <div>
    <span>${todoList[i]}</span>
    <button onclick="todoList.splice(${i}, 1);
    displayItems();
    ">Delete</button>
    </div>
    `;
    }
    containerElement.innerHTML=newHtml;
}