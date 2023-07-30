//your code here
document.addEventListener("DOMContentLoaded", () => {
  const divs = document.querySelectorAll(".image");
  let dragSrcEl = null;

  function handleDragStart(e) {
    this.style.opacity = "0.4";
    dragSrcEl = this;
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", this.innerHTML);
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = "move";
    return false;
  }

  function handleDragEnter(e) {
    this.classList.add("over");
  }

  function handleDragLeave(e) {
    this.classList.remove("over");
  }

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    if (dragSrcEl !== this) {
      dragSrcEl.innerHTML = this.innerHTML;
      this.innerHTML = e.dataTransfer.getData("text/html");
    }
    return false;
  }

  function handleDragEnd(e) {
    this.style.opacity = "1";
    divs.forEach((div) => div.classList.remove("over"));
  }

  divs.forEach((div) => {
    div.addEventListener("dragstart", handleDragStart, false);
    div.addEventListener("dragenter", handleDragEnter, false);
    div.addEventListener("dragover", handleDragOver, false);
    div.addEventListener("dragleave", handleDragLeave, false);
    div.addEventListener("drop", handleDrop, false);
    div.addEventListener("dragend", handleDragEnd, false);
  });
});
