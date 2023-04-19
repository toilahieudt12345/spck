let submitBtn = document.getElementsByClassName("btn-login");
let check_Existed_List_User = localStorage.getItem("listUser");
if (check_Existed_List_User == null) {
  localStorage.setItem("listUser", JSON.stringify([]));
};
submitBtn[0].addEventListener("click", function (e) {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let user = {
    uname: username,
    upass: password,
  };
  if (user.uname == "") {
    alert("enter your username")
  } else {
    let checkUsername = false;
  let getListUserLS = JSON.parse(localStorage.getItem("listUser"));
  for (let i = 0; i < getListUserLS.length; i++) {
    if (getListUserLS[i].uname == user.uname) {
      if (getListUserLS[i].upass == user.upass) {
        checkUsername = true; 
      }
    }
  };
  if (checkUsername == true) {
    alert("login successful");
  } else {
    alert("fall");
  };
  };
  if (user.upass=="" &&  user.uname) {
    alert("enter your password")
  } else {
    let checkUsername = false;
  let getListUserLS = JSON.parse(localStorage.getItem("listUser"));
  for (let i = 0; i < getListUserLS.length; i++) {
    if (getListUserLS[i].uname == user.uname) {
      if (getListUserLS[i].upass == user.upass) {
        checkUsername = true; 
      }
      
    }
  };

  if (checkUsername == true) {
    alert("login successful");
  } else {
    alert("fall");
  };
  }
  
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
});



