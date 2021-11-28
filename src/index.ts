var app = document.getElementById('app');

const displayTodos = (todo: Todo) => {
  
  // create a HTML "div" Element and add Card class to it
  var card = document.createElement('div');
  card.classList.add('card');
  
  // Create h2 tag and set it's text content to the todo's title
  var title = document.createElement('h2');
  title.textContent = todo.title.substring(0, 70).concat('...');
  
  // create p tag and marked it's text content to the todo's done/not_done values
  var completed = document.createElement('p');
  completed.textContent = todo.completed;
  if (completed.textContent === 'true') {
    completed.classList.toggle('green');
  }
  
  // append the title and condition todo's to card
  card.append(title);
  card.append(completed);
  
  // Display the card by appending it to our app element
  app.append(card);
  
}

// Our function use generic parameter T for the type of the response body
async function http<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request)
  return await response.json()
}

//describe type our todo
type Todo = {
  userId: number
  id: number
  title: string
  completed: string
}

//todos is strongly typed as Todo[]
export const todos = await http<Todo[]>("https://jsonplaceholder.typicode.com/todos")

// Add total count on page
var count = document.getElementsByClassName('count');
count[0].textContent = 'total count: ' + todos.length

//Output in console true/false counts
var result = {};
todos.forEach(todo => {
  result[todo.completed] = result[todo.completed] + 1 || 1
})

for (var key in result)
console.log('значение ' + key + ' == ' + result[key] + ' раз(а) ');
  
  
// Itterate through first 9 posts 
todos.forEach(function(todo , i){
  if(i<9)
  displayTodos(todo);  // display the post
}); 





























//import { renderUserBlock } from './user.js'

  //window.addEventListener('DOMContentLoaded', () => {
  //  renderUserBlock('Alfred Hitchcock', 'avatar2', 0) 
    //localStorage.setItem('name','Alfred Hitchcock')
    //localStorage.setItem('avatar','avatar2')
    //getUserData ('Alfred Hitchcock', 'avatar2') 
    //getFavoritesAmount (0)
    //    
    //renderSearchFormBlock( '', '','')
    //search ('','','')
    ////search ('','','', delayedFunc(callback))
    //renderSearchResultsBlock()
    //initFavs()
    //renderToast(
    //  {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
    //  {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
    //)
 // });


