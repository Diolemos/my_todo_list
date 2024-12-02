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

  export default createHeader;