const suid = sessionStorage.getItem("uid");

if (suid) {
  const lastsession = JSON.parse(localStorage.getItem(suid));
  const options = { year: "numeric", month: "short", day: "numeric" };
  let today = new Date().toLocaleDateString(undefined, options);
  const clockout = document.querySelector("#clockOut");
  const clockin = document.querySelector("#clockIn");
  const message = document.querySelector("#message");

  if (!lastsession || lastsession.clockin !== today) {
    clockin.classList.toggle("invisible");
  } else if (lastsession.clockout !== today) {
    message.textContent = "You have started Enjoy your work! Have nice day";
    clockout.classList.toggle("invisible");
  } else {
    message.textContent = "Already finished you work have wonderful day!";
  }
}
