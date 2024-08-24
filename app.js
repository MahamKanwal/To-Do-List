var list= document.getElementById("list")
var input= document.getElementById("userInput")
function add() {
    if (input.value.trim() === "") {
    Swal.fire({
        icon: "warning",
        text: "Please right a task!",
  confirmButtonColor: "#3085d6"
    });
}
else{
   var data = document.getElementById("userInput")
   var li=document.createElement("li");
   li.innerHTML=data.value
  list.appendChild(li)
 
  li.setAttribute("class", "color");
  var taskContent = document.createElement("div");
  taskContent.className = "task-content";
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.setAttribute("onClick","line(this)")
  li.appendChild(document.createTextNode(" "));

  data.value=" "
  var dltbtn=document.createElement("button")
dltbtn.innerHTML="🗑"
dltbtn.setAttribute("onclick","removelist(event)")
    dltbtn.setAttribute("type","button")
    dltbtn.className = "delete-btn";
    var editBtn = document.createElement("button")
    editBtn.setAttribute("type","button")
    editBtn.setAttribute("onclick","edit(event)")
    editBtn.innerHTML = "✍️"
    editBtn.className = "edit-btn";

    li.appendChild(dltbtn)
    li.appendChild(editBtn)
    list.appendChild(list)
li.appendChild(checkbox);
  
 
  
}
}
function line(checkbox){
  var li = checkbox.parentElement; 
 if(checkbox.checked){
  li.style.textDecoration="line-through";
 }else{
   li.style.textDecoration="none";
 }
}
function dlt(){
  list.innerHTML=" "
}



    
function removelist(event){
  event.target.parentNode.remove()
  

}

function edit(event){
  var updated = prompt("updated task",event.target.parentNode.firstChild.nodeValue)

  event.target.parentNode.firstChild.nodeValue = updated
}



  
