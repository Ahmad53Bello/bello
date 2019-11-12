const clear = document.querySelector('.clear');
const dateElement = document.getElementById('date');
const list = document.getElementById('list');
const input = document.getElementById('input');

const check ='fa-check-circle';
const uncheck = 'fa-circle-thin';
const lineThrough = 'lineThrough';


const option = {
  weekday:'long', month:'short', day:'numeric'    
};
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString('en-us', option);

function addToDo( toDo, id, finish, trash){
  if(trash){
    return '';
  }

  const completeToDo = finish ? check: uncheck;
  const  toDoLine = finish? lineThrough: '' ;

  const item = `
          <li class="item">
          <i class="fa ${completeToDo} co" job= "complete" id="${id}"></i>
          <p class="text" ${toDoLine}>${toDo}</p>
          <i class="fa fa-trash-o de" job="delete" id="${id}"></i>  
          </li>
  `

  const position = 'beforeend';
list.insertAdjacentHTML(position, item );

}

document.addEventListener('keyup', function(x){
  const toDoInput = input.value;   
  
  if (x.keyCode==13){
       addToDo (toDoInput);
       input.value = "";
     }
    

});

addToDo('coffee', 1 , true, false);
addToDo('drink',2, true, false)