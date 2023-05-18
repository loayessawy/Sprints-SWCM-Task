let btnSelect= document.getElementById("showBtn")
let listShow= document.getElementById("listContainer")

btnSelect.addEventListener("click", function(){
    listShow.style.display="flex";
    btnSelect.style.display="none";
})