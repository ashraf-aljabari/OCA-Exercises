
function validate(savingType) {
  var key = document.getElementById("input-key").value;
  var value =  document.getElementById("input-value").value;

  if(value != null && key != null){
    if (savingType == 'session'){
      sessionStorage.setItem(key,value);
      clearInput();
    }else {
      localStorage.setItem(key,value);
      clearInput();
    }
  }
}

function clearInput(){
  document.getElementById("input-key").value = "";
  document.getElementById("input-value").value = "";
}

function clearData(){
  sessionStorage.clear();
  localStorage.clear();
}