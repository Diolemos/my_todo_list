import { CreateAddTodoBtn } from "./AddBtn";


export function createNav() {
    const nav = document.createElement("nav");
    return nav;
  }
  
  //Navigation Items/btns will be dynamically created/deleted
  
  export function createNavBtn(btnName) {
    const button = document.createElement("button");
    button.classList.add("button-nav", `button-${btnName.toLowerCase()}`);
    button.textContent = btnName;
    button.dataset.projectName = btnName;
  
    function setActiveBtn(button) {
      const buttons = document.querySelectorAll(".button-nav");
  
      buttons.forEach((button) => {
        if (button !== this) {
          button.classList.remove("active"); //remove the active class from all btns except for the one I just clicked
        }
      });
  
      button.classList.add("active");
    }
  
    button.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) return;
  
      //setActiveButton(e.target); //
      setActiveBtn(button);
      const main = document.querySelector("main");
      main.innerHTML = ""; //clear main el
      main.appendChild(loadTodosByProject(todos, e.target.textContent));
    
    });
    return button;
  }