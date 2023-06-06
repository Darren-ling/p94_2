function addUser(){
    userName = document.getElementById("username").value;
    localStorage.setItem("userName",userName);
    window.location = "Kwitter_room.html"
}