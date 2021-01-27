// Soal 6
var listRegistration = []
var clear = ''

function submitButton() {
  var name = document.getElementById('username').value;
  var pass = document.getElementById('password').value;

  if(name == '' && pass == '') {
    alert('You need input the data first')
  } else if(name.length < 6) {
    alert('You must input more than 6 characters')
  } else if(pass.length < 8) {
    alert('You must input more than 8 characters')
  } else {
    listRegistration.push(name, pass)
  }

  var kosong = ''

  for(i = 0; i < listRegistration.length; i++) {
    kosong = kosong + listRegistration[i] + "<br/>"
  }
  
  document.getElementById('list-registration').innerHTML = kosong
  document.getElementById('username').value = clear
  document.getElementById('password').value = clear

}
