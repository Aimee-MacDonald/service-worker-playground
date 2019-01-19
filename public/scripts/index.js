window.addEventListener("load", () => {
  if(navigator.serviceWorker){
    console.log("Index: Service Worker Supported");

    navigator.serviceWorker.register("/serviceWorker.js")
  } else {
    console.log("Index: Service Worker NOT Supported");
  }

  getNotes();
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

function getNotes(){
  fetch("/getList")
    .then(response => {
      if(response.status >= 200 && response.status <= 300){
        return Promise.resolve(response);
      } else {
        return Promise.reject(new Error(response.statusText));
      }
    })
    .then(response => {return response.json()})
    .then(data => {
      var el_list = document.getElementById("notes");
      data.list.forEach(note => {
        var el_note = document.createElement("li");
        el_note.innerText = note;
        el_list.append(el_note);
      })
    })
    .catch(err => console.log("Error: " + err))
}
