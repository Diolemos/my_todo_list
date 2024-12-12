const storageManager = (() => {
    const TODOS_KEY = 'todos';
    const PROJECTS_KEY = 'projectNames';
  
    const getTodos = () => JSON.parse(localStorage.getItem(TODOS_KEY)) || [];
    const saveTodos = (todos) => localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  
    const getProjectNames = () => JSON.parse(localStorage.getItem(PROJECTS_KEY)) || [];
    const saveProjectNames = (projectNames) => localStorage.setItem(PROJECTS_KEY, JSON.stringify(projectNames));
  
    return {
      getTodos,
      saveTodos,
      getProjectNames,
      saveProjectNames,
    };
  })();
  export default storageManager;