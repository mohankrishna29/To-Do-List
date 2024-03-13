let listObject = []
render()

function render(){
    let ToDoHtml = ''
    for(let i=0;i<listObject.length;i++){
        ToDoHtml += `
        <div>${listObject[i]['name']}</div>
        <div>${listObject[i]['date']}</div>
        <button onclick = "
        listObject.splice(${i},1);
        render()" class = "js-del"
        >Delete</button>
        `
    }
    document.querySelector('.ToDo-List').innerHTML = ToDoHtml
    console.log(ToDoHtml)
}


function ToDo(){
    let obj = {}
    let activity =  document.querySelector('.task-input').value
    let date =  document.querySelector('.date-input').value
    obj.name = activity
    obj.date = date
    listObject.push(obj)
    document.querySelector('.task-input').value = ''
    console.log(listObject)
    render()
}