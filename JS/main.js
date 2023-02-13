// Here we get task from input
function getTodos() {
    // This creates array of input task
    var todos = new Array;
    // We pull tasks from memory
    var todosStr = localStorage.getItem("todo");
    // If the input is not empty, parse will make it into object
    if(todosStr !== null) {
        todos = JSON.parse(todosStr);
    }
    return todos;
}

// This fuction adds input function into getTodos array
function add() {
    // I place input value into variable
    var task = document.getElementById("task").value;
    // I get the array of tasks here
    var todos = getTodos();
    // Here current input gets pushed into the array
    todos.push(task);
    //We store the input as JSON String
    localStorage.setItem("todo", JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

// This function keeps Tasks displayed
function show() {
    var todos = getTodos();

    // Here I add items in storage to the displayed list and add X button
    var html = "<ul>";
    for(var i = 0; i < todos.length; i++) {
        html += "<li>" + todos[i] + "<button class='remove' id='" + i + "'>X</button></li>";
    };
    html += "</ul>";
    //Here we display finished list
    document.getElementById("todos").innerHTML = html;
}

// This calls ADD after we click the button
document.getElementById("add").addEventListener("click", add);
show();
// For troubleshooting
console.log(html)