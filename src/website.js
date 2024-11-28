
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
  

function initializeWebsite(){
    const body = document.body;
    body.appendChild(createHeader());
    body.appendChild(createSideBar());
    const nav = document.querySelector("nav");
    nav.appendChild(createNavBtn("Default"));
    body.appendChild(createMain());
   
}










export default initializeWebsite;