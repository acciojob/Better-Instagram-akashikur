document.addEventListener("DOMContentLoaded", () => {
  const divs = document.querySelectorAll(".image");
  let draggedDiv = null;

  divs.forEach((div) => {
    div.addEventListener("dragstart", handleDragStart, false);
    div.addEventListener("dragover", handleDragOver, false);
    div.addEventListener("drop", handleDrop, false);
    div.addEventListener("dragend", handleDragEnd, false);
  });

  function handleDragStart(e) {
    draggedDiv = this;
    e.dataTransfer.effectAllowed = "move";
  }

  function handleDragOver(e) {
    if (e.preventDefault) {
      e.preventDefault();
    }
    e.dataTransfer.dropEffect = "move";
    return false;
  }

  function handleDrop(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
    }
    if (draggedDiv !== this) {
      // Swap the background images of the two divs
      const tempImage = draggedDiv.style.backgroundImage;
      draggedDiv.style.backgroundImage = this.style.backgroundImage;
      this.style.backgroundImage = tempImage;
    }
    return false;
  }

  function handleDragEnd() {
    draggedDiv = null;
  }
});
