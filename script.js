let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log("sidebarBtn");
sidebarBtn.addEventListener("click", ()=>{
// if(document.getElementsByClassName('sidebar')[0].style.display == null);{
//     document.getElementsByClassName('sidebar')[0].style.display ="block";
//     document.getElementsByClassName('home-section')[0].style.position ="relative";
//     document.getElementsByClassName('home-section')[0].style.width ="calc(100%);";
//     document.getElementsByClassName('home-section')[0].style.width ="calc(100%);";
//   }
  sidebar.classList.toggle("close");
});


