import todos from './/todos.json' ;


function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    return main;
  }
  

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
  
    const appHeader = document.createElement("h1");
    appHeader.classList.add("appHeader");
    appHeader.textContent = "My Todo-list";
  
    header.appendChild(appHeader);
    //header.appendChild(createNav());
  
    return header;
  }
  function createSideBar(){
    const sideBar = document.createElement("div");
    sideBar.classList.add("sideBar");
    const sideBarTitle = document.createElement("h3");
    sideBarTitle.classList.add("sideBarTitle");
    sideBarTitle.textContent = "Projects";
    sideBar.appendChild(sideBarTitle);
    sideBar.appendChild(createNav())
    return sideBar;
  }
  
  function createNav() {
    const nav = document.createElement("nav");
    return(nav)
}
  
   //Navigation Items/btns will be dynamically created/deleted 
  
    function createNavBtn(btnName){
    const button = document.createElement("button");
    button.classList.add("button-nav", `button-${btnName.toLowerCase()}` );
    button.textContent = btnName;
    
  
    
    button.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) return;
      //setActiveButton(e.target); //
      //TODO run the upcoming function 'setActiveBtn()'
      //for now, there will only be one button
      //TODO LoadProject()
    });
    return button;
    }

    function loadTodos(todos, project) {

       const filteredTodos = todos.filter(todo=>{
        if(!todo.title) return false;
        return todo.project===project})

        const todosListEl = document.createElement("ul");
        todosListEl.classList.add("todos-list");
        



        filteredTodos.forEach((todo) => {
            // Skip todos without a title
            if (!todo.title) return;
    
            // Create a list item for the todo
            const todoItemEl = document.createElement("li");
            todoItemEl.classList.add("card");
    
            // Create and append the title element
            const titleEl = document.createElement("h3");
            titleEl.textContent = todo.title;
            todoItemEl.appendChild(titleEl);
    
            // Create and append the description element
            const descriptionEl = document.createElement("div");
            descriptionEl.classList.add("description");
            descriptionEl.textContent = todo.description || ""; // Default to empty string
            todoItemEl.appendChild(descriptionEl);
    
            // Create and append the due date element
            const dueDateEl = document.createElement("div");
            dueDateEl.classList.add("due-date");
            dueDateEl.textContent = todo.dueDate || ""; // Default to empty string
            todoItemEl.appendChild(dueDateEl);
    
            // Set default values for `done` and `priority` if not present
            const isDone = todo.done ?? false;
            const priority = todo.priority || "normal";
    
            // Create and append a checkbox for the `done` status
            const doneCheckboxEl = document.createElement("input");
            doneCheckboxEl.type = "checkbox";
            doneCheckboxEl.checked = isDone; // Default to false
            doneCheckboxEl.classList.add("done-checkbox");
            todoItemEl.appendChild(doneCheckboxEl);
    
            // Create and append a priority indicator
            const priorityEl = document.createElement("div");
            priorityEl.classList.add("priority", `priority-${priority.toLowerCase()}`);
            priorityEl.textContent = `Priority: ${priority}`;
            todoItemEl.appendChild(priorityEl);
    
            // Append the todo item to the list
            todosListEl.appendChild(todoItemEl);
        });
    
        return todosListEl; // Return the list so it can be appended to the DOM
    }
  

function initializeWebsite(){
    const body = document.body;
    body.appendChild(createHeader());
    body.appendChild(createSideBar());
    const nav = document.querySelector("nav");
    nav.appendChild(createNavBtn("Default"));
    body.appendChild(createMain().appendChild(loadTodos(todos,"default")));

   
}










export default initializeWebsite;