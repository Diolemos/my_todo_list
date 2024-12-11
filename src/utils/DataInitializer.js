export const initializeData = () => {
    if (localStorage.getItem("todos") === null) {
      storageManager.saveTodos(todos);
    }
  
    if (localStorage.getItem("projectNames") === null) {
      storageManager.saveProjectNames(projects);
    }
  };