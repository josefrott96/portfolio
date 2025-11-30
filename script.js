/* Right-click/Save disabled */
document.addEventListener("contextmenu", (e) => {
  if (e.target.tagName === "IMG") {
    if (
      e.target.parentElement.tagName === "BOX1" ||
      e.target.parentElement.tagName === "BOX2" ||
      e.target.parentElement.tagName === "BOX3"
    ) {
      e.preventDefault();
    }
  }
});