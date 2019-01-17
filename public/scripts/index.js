window.addEventListener("load", () => {
  if(navigator.serviceWorker){
    console.log("Index: Service Worker Supported");

    navigator.serviceWorker.register("/serviceWorker.js")
  } else {
    console.log("Index: Service Worker NOT Supported");
  }
});

function postNote(){
  var msg = document.getElementById("note").value;

  fetch("/postNote", {
    method: "post",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({'note': msg})
  })
  return false;
}
