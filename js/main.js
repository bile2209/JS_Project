function upDate(previewPic) {
  const display = document.getElementById('image');
  display.innerHTML = previewPic.alt;
  display.style.backgroundImage = "url('" + previewPic.src + "')";
}
function undo() {
  const display = document.getElementById('image');
  display.style.backgroundImage = "url('')";
  display.innerHTML = "Hover over an image below to display here.";
}