export function internet() {
  var load = document.querySelector(".load")

  if (window.navigator.onLine) {
    load.style.display = 'none';
  } else {
    load.style.display = "flex";
  }
}