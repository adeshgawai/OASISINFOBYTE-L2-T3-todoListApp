const task=[]
const input = document.querySelector('#task-input');
const list_element = document.querySelector('.task');

// console.log(form)

input.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
        if (!input.value) {
            alert('Enter the task first.')
        } else {

            // addTodo(input.value);
            task.push(input.value)
            addTodo(input.value);
            input.value = '';
            console.log(task[0]);
        }

    }

})

const addTodo = (item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
     
    <div class="task-list display">
      <div class='first-element display'>
       
      <div class="item">
      <p>${item}</p>
       
      </div>
      <div class='action-button'>
        <i class="fa fa-edit" id='edit' style="font-size:24px"></i>

        <button class="complete button">Complete</button>
      </div>
      </div>
      
      <div class="delete-button">
      <i class="fa fa-trash-o delete" style="font-size:24px"></i>
      </div>
      
    </div>
    <div class="bottom-line"></div>
        `
    listItem.querySelector('.delete-button').addEventListener(
        'click',
        () => {
            listItem.remove();
        }
    )
    listItem.querySelector('#edit').addEventListener(
        'click',
        () => {
            input.value += item;
            listItem.remove();
        }
    )
    listItem.querySelector('.complete').addEventListener(
        'click',
        () => {
            
            listItem.classList.toggle('done');
        }
    )
    list_element.appendChild(listItem);
}

