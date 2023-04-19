let submitBtn = document.getElementById("submit");
let check_Existed_List_User = localStorage.getItem("listUser");
if (check_Existed_List_User == null) {
  localStorage.setItem("listUser", JSON.stringify([]));
}
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let user = {
    uname: username,
    upass: password,
  };
  let checkUsername = true;
  let getListUserLS = JSON.parse(localStorage.getItem("listUser"));
  for (let i = 0; i < getListUserLS.length; i++) {
    if (getListUserLS[i].uname == user.uname) {
      checkUsername = false; 
    }
  }

  if (checkUsername == true) {
    addUser(user);
    alert("Create successful");
  } else {
    alert("Username existed");
  }
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
});
// function check(user) {
//   let check1 = true;
//   for (let i =0; i < getListUserLS.length; i++) {
//     if ()
    
//   }
// }
function addUser(user) {
  let getListUserLS = JSON.parse(localStorage.getItem("listUser"));
  getListUserLS.push(user);
  localStorage.setItem("listUser", JSON.stringify(getListUserLS));
};


