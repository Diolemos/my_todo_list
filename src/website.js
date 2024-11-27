
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
    //Now each button should be created individually, starting from the default btn
    const defaultButton = document.createElement("button");
    defaultButton.classList.add("button-nav");
    defaultButton.textContent = "Default";
  
    //Event listener... If user is not on the clicked option, take him there!
    defaultButton.addEventListener("click", (e) => {
      if (e.target.classList.contains("active")) return;
      //setActiveButton(this);
      //run the upcoming function 'setActiveBtn()'
      //for now, there will only be one button
      //Load Project()
    });
    nav.appendChild(defaultButton);
    return(nav)
}
  
   //Navigation Items/btns will be dynamically created/deleted 
  
    
  

function initializeWebsite(){
    const body = document.body;
    body.appendChild(createHeader());
    body.appendChild(createSideBar());
    body.appendChild(createMain());
   
}










export default initializeWebsite;