const AddTodoModal = (() => {
    const createElement = () => {
      const addTodoModal = document.createElement("div");
      addTodoModal.classList.add("modal");
  
      // Modal Title
      const modalTitle = document.createElement("h2");
      modalTitle.textContent = "Add Todo";
      addTodoModal.appendChild(modalTitle);
  
      // Form Element
      const form = document.createElement("form");
      form.classList.add("todo-form");
  
      // Title Input (mandatory)
      const titleLabel = document.createElement("label");
      titleLabel.setAttribute("for", "todo-title");
      titleLabel.textContent = "Title :";
  
      const titleInput = document.createElement("input");
      titleInput.setAttribute("id", "todo-title");
      titleInput.setAttribute("name", "title");
      titleInput.setAttribute("type", "text");
      titleInput.setAttribute("required", "true");
  
      form.appendChild(titleLabel);
      form.appendChild(titleInput);
  
      // Description Input
      const descLabel = document.createElement("label");
      descLabel.setAttribute("for", "todo-description");
      descLabel.textContent = "Description:";
  
      const descInput = document.createElement("textarea");
      descInput.setAttribute("id", "todo-description");
      descInput.setAttribute("name", "description");
  
      form.appendChild(descLabel);
      form.appendChild(descInput);
  
      // Due Date Input
      const dateLabel = document.createElement("label");
      dateLabel.setAttribute("for", "todo-dueDate");
      dateLabel.textContent = "Due Date:";
  
      const dateInput = document.createElement("input");
      dateInput.setAttribute("id", "todo-dueDate");
      dateInput.setAttribute("name", "dueDate");
      dateInput.setAttribute("type", "datetime-local");
  
      form.appendChild(dateLabel);
      form.appendChild(dateInput);
  
      // Priority Selector
      const priorityLabel = document.createElement("label");
      priorityLabel.setAttribute("for", "todo-priority");
      priorityLabel.textContent = "Priority:";
  
      const prioritySelect = document.createElement("select");
      prioritySelect.setAttribute("id", "todo-priority");
      prioritySelect.setAttribute("name", "priority");
  
      const priorities = ["normal", "high"];
      priorities.forEach(priority => {
        const option = document.createElement("option");
        option.value = priority;
        option.textContent = priority.charAt(0).toUpperCase() + priority.slice(1);
        prioritySelect.appendChild(option);
      });
  
      form.appendChild(priorityLabel);
      form.appendChild(prioritySelect);
  

  
     
  
      // Submit Button
      const submitButton = document.createElement("button");
      submitButton.setAttribute("type", "submit");
      submitButton.textContent = "Add Todo";
  
      form.appendChild(submitButton);
  
      
      addTodoModal.appendChild(form);
  
      return addTodoModal;
    };
  
    const show = (modal) => modal.classList.add("show");
    const hide = (modal) => modal.classList.remove("show");
  
    return {
      createElement,
      show,
      hide,
    };
  })();
  
  export default AddTodoModal;
  