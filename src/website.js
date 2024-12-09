import todos from ".//todos.json";
import projects from "./projects.json"
import createHeader from "./Header";
import createSideBar from "./SideBar";
import storageManager from "./StorageManager";
import AddTodoModal from "./AddTodoModal";

const initializeData = () => {
  if (localStorage.getItem('todos') === null) {
    storageManager.saveTodos(todos);
  }

  if (localStorage.getItem('projectNames') === null) {
    storageManager.saveProjectNames(projects);
  }
};

initializeData();
 todos = storageManager.getTodos();
 projects = storageManager.getProjectNames();



function createMain() {
  const main = document.createElement("main");
  main.classList.add("main");
  main.setAttribute("id", "main");
  return main;
}

function createNav() {
  const nav = document.createElement("nav");
  return nav;
}

//Navigation Items/btns will be dynamically created/deleted

function createNavBtn(btnName) {
  const button = document.createElement("button");
  button.classList.add("button-nav", `button-${btnName.toLowerCase()}`);
  button.textContent = btnName;

  function setActiveBtn(button) {
    const buttons = document.querySelectorAll(".button-nav");

    buttons.forEach((button) => {
      if (button !== this) {
        button.classList.remove("active");
      }
    });

    button.classList.add("active");
  }

  button.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;

    //setActiveButton(e.target); //
    setActiveBtn(button);
    const main = document.querySelector("main");
    main.innerHTML = "";
    main.appendChild(loadTodos(todos, e.target.textContent));
  });
  return button;
}

function loadTodos(todos, project) {
  const filteredTodos = todos.filter((todo) => {
    if (!todo.title) return false;
    return todo.project === project;
  });

  const todosListEl = document.createElement("ul");
  todosListEl.classList.add("todos-list");

  console.log(filteredTodos);

  filteredTodos.forEach((todo) => {
    // Skip todos without a title
    if (!todo.title) return;

    const todoItemEl = document.createElement("li");
    todoItemEl.classList.add("card");

    const titleEl = document.createElement("h3");
    titleEl.textContent = todo.title;
    todoItemEl.appendChild(titleEl);

    const descriptionEl = document.createElement("div");
    descriptionEl.classList.add("description");
    descriptionEl.textContent = todo.description || ""; // Default to empty string
    todoItemEl.appendChild(descriptionEl);

    // Create and append the due date element
    const dueDateEl = document.createElement("div");
    dueDateEl.classList.add("due-date");
    dueDateEl.textContent = todo.dueDate || ""; // Default to empty string
    todoItemEl.appendChild(dueDateEl);

    // Set default values for `completed` and `priority` if not present
    //TODO: do something if overdue ? add class priority_high ?
    const isCompleted = todo.checked ?? false;
    const priority = todo.priority || "normal";

    // switch completed status on doubleClick
    todoItemEl.addEventListener("click", (e) => {
      console.log("toggle checked");
      if (todoItemEl.classList.contains("checked")) {
        todoItemEl.classList.remove("checked");
        // TODO: change the object on local storage/database
      } else {
        todoItemEl.classList.add("checked");
        // TODO: change the object on local storage/database
      }
    });

    // Create and append a priority indicator
    //TODO: HIDE PRIORITY INFORMATION BUT ADD CLASS FOR STYLING
    const priorityEl = document.createElement("div");
    priorityEl.classList.add("priority", `priority-${priority.toLowerCase()}`);
    priorityEl.textContent = `Priority: ${priority}`;
    todoItemEl.appendChild(priorityEl);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      if (confirm("Are you sure?")) {
        console.log(todoItemEl)
        todoItemEl.remove();
        const todoTitle = todoItemEl.querySelector("h3").textContent;

        // Retrieve todos from localStorage
        let todos = storageManager.getTodos();
    
        // Filter out the todo to be deleted
        todos = todos.filter((todo) => todo.title !== todoTitle);
    
        // Update localStorage
        storageManager.saveTodos(todos);
    
        console.log(`Todo "${todoTitle}" deleted successfully`);
      }
    });
    todoItemEl.appendChild(deleteBtn);
    // Append the todo item to the list
    todosListEl.appendChild(todoItemEl);
  });

  return todosListEl; // Return the list so it can be appended to the DOM
}







function initializeWebsite(projectName) {

  

  const body = document.body;
  body.appendChild(createHeader());
  body.appendChild(createSideBar(createNav));
  const nav = document.querySelector("nav");


  projects.forEach((project) => {
    nav.appendChild(createNavBtn(project));
  });
  body.appendChild(AddTodoModal.createElement());
  const main = createMain();

  main.appendChild(loadTodos(todos, projectName));
  const addTodoBtn = document.createElement("button");
  addTodoBtn.textContent = "+ ";
  addTodoBtn.classList.add("addTodo");
  addTodoBtn.addEventListener("click",()=>{
    const modal = document.querySelector('.modal');
    AddTodoModal.show(modal);
  })
  main.appendChild(addTodoBtn);
  body.appendChild(main);
}
export default initializeWebsite;
