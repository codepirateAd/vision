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
if(document.getElementsByClassName('sidebar')[0].style.display == '' || document.getElementsByClassName('sidebar')[0].style.display == 'none'){
    document.getElementsByClassName('sidebar')[0].style.display ="block";
    document.getElementsByClassName('home-section')[0].style.position ="relative";
    console.log("if...");
    sidebar.classList.toggle("close");


  }
  else{
    console.log("else...");
    document.getElementsByClassName('sidebar')[0].style.display = 'none';
    document.getElementsByClassName('home-section')[0].style.position ="initial";
    document.getElementsByClassName('home-section')[0].style.width="100%";
    sidebar.classList.toggle("close");
  }
});


