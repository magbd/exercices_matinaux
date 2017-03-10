var name = document.getElementById('name').value;
var password = document.getElementById('password').value;
// var button = document.getElementById('button');



// Le navigateur supporte le localStorage
// STOCKAGE
// function stock(){
//   console.log(localStorage['name']);
//   console.log(localStorage['password']);
//   console.log("name" +name);
//   if ((localStorage['name'] != null) && (localStorage['password'] != null)) {
//       alert('déjà stocké dans storage');
//     console.log("|" + localStorage['name'] + "test");
//     console.log(localStorage['password']);
//     //localStorage.setItem("name", name);
//     //localStorage.setItem("password", password);
//   }
//   else {
//     localStorage['name'] = name.toString();
//     localStorage['password'] = password.toString();
//     console.log(localStorage['name'] , "name");
//     console.log(localStorage['password'] , "psw");
//   }
// }
// button.onclick = stock;


//STOCKAGE
localStorage.setItem('name', name);
localStorage.setItem('password', password);

console.log(localStorage.name);
console.log(localStorage.password);
