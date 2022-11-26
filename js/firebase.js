import {
  getDatabase,
  ref,
  get,
  set,
  update,
  remove,
  child,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";

var nameV, telV, messageV;
const db = getDatabase();
var buttonBox = document.getElementById("sumbit-button");
buttonBox.addEventListener("click", insertData);

function insertData(event) {
  event.preventDefault();
  console.log("btn clicked");
  readFormData();
  set(ref(db, "data/" + telV), {
    name: nameV,
    phoneNo: telV,
    Massege: messageV,
  })
    .then(() => {
      console.log("Data Stored Successfully");
    })
    .catch((error) => {
      alert("unsuccessfull", error);
    });
  clearData();
}

function readFormData() {
  nameV = document.getElementById("nameBox").value;
  telV = document.getElementById("telBox").value;
  messageV = document.getElementById("message").value;
  console.log(nameV, telV, messageV);
}

function clearData() {
  nameV.value = " ";
  telV.value = " ";
  messageV.value = " ";
}
