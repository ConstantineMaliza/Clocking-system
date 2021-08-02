let fullname = sessionStorage.getItem("fullname");
let uid = sessionStorage.getItem("uid");

auth.onAuthStateChanged((user) => {
  if (user) {
    // console.log("User Logged in ", user);
    document.getElementById("fullname").innerHTML =
      sessionStorage.getItem("fullname");
    const logout = document.querySelector("#logout");
    logout.addEventListener("click", (e) => {
      e.preventDefault();

      auth.signOut().then(() => {
        window.location.href = "../index.html";
      });
    });
    // document.getElementById("logout").style.display = "block";
  } else {
    console.log("User Logged out ");
    // document.getElementById('username').style.display='none';
    // document.getElementById('logout').style.display='none';
    window.location.href = "index.html";
  }
});

if (
  uid == null ||
  uid.length == 0 ||
  uid == "" ||
  uid == " " ||
  uid == "null" ||
  uid == "undefined"
) {
  window.location.href = "index.html";
} else {
  document.getElementById("fullname").innerHTML =
    sessionStorage.getItem("fullname");

  //logout
}
