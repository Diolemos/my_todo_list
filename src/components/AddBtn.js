import AddTodoModal from "../AddTodoModal";


export const CreateAddTodoBtn = () => {
    const addTodoBtn = document.createElement("button");
  addTodoBtn.textContent = "+ ";
  addTodoBtn.classList.add("addTodo");
  const modal = document.querySelector(".modal");
  addTodoBtn.addEventListener("click", () => {
    AddTodoModal.show(modal);
  });
  return addTodoBtn;
}