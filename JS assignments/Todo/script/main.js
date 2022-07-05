function get_todos() {
    var todos = new Array;
    var todos_str = localStorage.getItem("todo");
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

function add() {
    if (document.getElementById("task").value != "") {
        var task = document.getElementById("task").value;
        var todos = get_todos();
        todos.push(task);
        localStorage.setItem("todo", JSON.stringify(todos));
        document.getElementById("task").value = "";
        show();
    }
    return false;
}

function remove(i) {
    const todos = JSON.parse(localStorage.getItem("todo"));
    todos.splice(i, 1);
    localStorage.setItem("todo", JSON.stringify(todos));
    show();
}

function show() {
    var todos = get_todos();
    var html = "<ul>";
    for (var i = 0; i < todos.length; i++) {
        html += "<li>" + todos[i] + "<button class='remove' onclick='remove(" + i + ")'" + ">❌</button></li>";
    };
    html += "</ul>";
    document.getElementById("todos").innerHTML = html;
};

document.getElementById("add").addEventListener("click", add);
show();