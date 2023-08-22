window.addEventListener("DOMContentLoaded", function () {
  const savedNameElement = document.getElementById("savedName");
  const nameInput = document.getElementById("nomeInput");
  const saveButton = document.getElementById("save");
  const clearButton = document.getElementById("cancel");

  const savedName = localStorage.getItem("savedName");
  if (savedName) {
    savedNameElement.textContent = `Nome precedentemente salvato: ${savedName}`;
  }

  saveButton.addEventListener("click", function () {
    const newName = nameInput.value;
    localStorage.setItem("savedName", newName);
    savedNameElement.textContent = `Nome precedentemente salvato: ${newName}`;
  });

  clearButton.addEventListener("click", function () {
    localStorage.removeItem("savedName");
    savedNameElement.textContent = "Nome precedentemente salvato:";
    nameInput.value = "";
  });
});

///////////////////////////////////////////////////////////////////////////////////////////////////

function updateCounter() {
  const counterElement = document.getElementById("counter");

  let seconds = 0;
  const interval = setInterval(function () {
    seconds++;
    counterElement.textContent = `${seconds} secondo${seconds !== 1 ? "i" : ""}`;
  }, 1000);

  sessionStorage.setItem("counterInterval", JSON.stringify(interval));
}

const storedInterval = JSON.parse(sessionStorage.getItem("counterInterval"));
if (storedInterval) {
  clearInterval(storedInterval);
}

updateCounter();

window.addEventListener("beforeunload", function () {
  const storedInterval = JSON.parse(sessionStorage.getItem("counterInterval"));
  if (storedInterval) {
    clearInterval(storedInterval);
  }
});
