let task = document.querySelector('#task')
let itemParent = document.querySelector('#itemParent')
task.addEventListener('keypress',function(event) {
    let x = event.keyCode;
    if (x == 13) { 
        
        testTask()
    }
  })

  function testTask(){
    let data = task.value
    
    let item = document.createElement('div')
    item.className = "item"
    itemParent.appendChild(item)

    let checkbox = document.createElement('input')
    checkbox.className ="checkbox"
    checkbox.type = "checkbox"
    item.appendChild(checkbox)

    let text = document.createElement('div')
    text.className = "text"
    text.innerHTML = data
    item.appendChild(text)

    let remove = document.createElement('button')
    remove.className = "remove"
    remove.innerHTML = 'x'
    item.appendChild(remove)
    
    remove.onclick = function() {
      itemParent.removeChild(item)
      return
    }

    checkbox.onclick = function(){
      if(checkbox.checked === true){
         text.style.textDecoration = 'line-through'
      }
      else if(checkbox.checked === false){
        text.style.textDecoration = 'none'
      }
      
    }

    task.value = ''
  }

