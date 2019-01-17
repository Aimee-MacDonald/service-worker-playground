window.addEventListener("load", () => {
  if(navigator.serviceWorker){
    console.log("Index: Service Worker Supported");

    navigator.serviceWorker.register("/serviceWorker.js")
  } else {
    console.log("Index: Service Worker NOT Supported");
  }
});
