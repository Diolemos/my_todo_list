export function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    return main;
  }
  
  export function updateMain(main, content) {
    main.innerHTML = ""; // Clear previous content
    main.appendChild(content);
  }