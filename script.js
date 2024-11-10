// script.js
function calculateAge() {
  const birthdate = new Date(document.getElementById("birthdate").value);
  const today = new Date();

  let years = today.getFullYear() - birthdate.getFullYear();
  let months = today.getMonth() - birthdate.getMonth();
  let days = today.getDate() - birthdate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const result = document.getElementById("result");
  result.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;

  // Re-trigger the fade-in and pop-up animations
  result.classList.remove("fade-in");
  void result.offsetWidth; // Trigger reflow
  result.classList.add("fade-in");
}
