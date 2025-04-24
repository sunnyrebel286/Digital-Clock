const hourEl = document.getElementById("hour-val");
const minuteEl = document.getElementById("minutes-val");
const secondEl = document.getElementById("seconds-val");
const ampmEl = document.getElementById("ampm");
const toggleBtn = document.getElementById("toggleFormat");

let is24Hour = localStorage.getItem("is24Hour") === "true";

function updateClock() {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  let s = now.getSeconds();

  let ampm = "AM";

  if (!is24Hour) {
    if (h >= 12) {
      ampm = "PM";
      if (h > 12) h -= 12;
    }
    if (h === 0) h = 12;
  }

  hourEl.innerText = h < 10 ? "0" + h : h;
  minuteEl.innerText = m < 10 ? "0" + m : m;
  secondEl.innerText = s < 10 ? "0" + s : s;
  ampmEl.innerText = is24Hour ? "" : ampm;
  ampmEl.style.display = is24Hour ? "none" : "flex";

  setTimeout(updateClock, 1000);
}

// Set button text and toggle format
toggleBtn.innerText = is24Hour ? "Switch to 12-Hour" : "Switch to 24-Hour";
toggleBtn.addEventListener("click", () => {
  is24Hour = !is24Hour;
  localStorage.setItem("is24Hour", is24Hour);
  toggleBtn.innerText = is24Hour ? "Switch to 12-Hour" : "Switch to 24-Hour";
});

updateClock();
