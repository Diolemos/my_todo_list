const AddTodoModal = (() => {
  const createElement = () => {
    const addTodoModal = document.createElement("div");
    addTodoModal.classList.add("modal");

    return addTodoModal;
  };
  const show = (modal) => modal.classList.add("show");
  const hide = (modal) => modal.classList.remove("show");

  return {
    createElement,
    show,
    hide

  };
})();
export default AddTodoModal;
