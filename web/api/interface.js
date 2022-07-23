var trigger,closer,modal,close;

trigger = document.getElementById("trigger");
closer = document.getElementById("closer");
close_btn = document.getElementById("close");
modal= document.getElementById("modal");

trigger.onclick =()=>{
    modal.style.display = "flex";
}

closer.onclick =()=>{
    modal.style.display = "none";
}




var loginUI = '<i id="close">&times;</i><h4>Log in </h4><form class="flex-col"><input type="text" placeholder="Name"><input type="password" placeholder ="Password"><button type="submit">lets go !</button><p>Not on board ? <a href="#" id="join" class="join">Join</a>  </p></form>';

var signupUI = '<i id="closer">&times;</i><h4>Sign Up </h4><form class="flex-col"><input type="text" placeholder="Name"><input type="email" placeholder="Email"> <input type="password" placeholder ="Password"><button type="submit">lets go !</button><p>Already on board ? <a href="#" id="login">Login</a>  </p>';

document.getElementById("login").onclick=()=>{
    document.querySelector(".modal-content").innerHTML = loginUI;
}

document.getElementById("join").onclick=()=>{
    document.querySelector(".modal-content").innerHTML = signupUI;
}



