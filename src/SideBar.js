export default function createSideBar(createNav){
    const sideBar = document.createElement("div");
    sideBar.classList.add("sideBar");
    const sideBarTitle = document.createElement("h3");
    sideBarTitle.classList.add("sideBarTitle");
    sideBarTitle.textContent = "Projects";
    sideBar.appendChild(sideBarTitle);
    sideBar.appendChild(createNav())
    return sideBar;
  }

