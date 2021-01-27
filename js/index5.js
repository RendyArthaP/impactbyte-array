//Soal 5
var listTweet = []
var clear = ''

function submitTweet() {
  var textTweet = document.getElementById('text-tweet').value;
  
  if(textTweet !== '') {
    listTweet.push(textTweet);
  } else;
  
  var kosong = ''

  for(i = 0; i < listTweet.length; i++) {
    kosong = kosong + listTweet[i] + "<br/>"
  }
  document.getElementById('list-tweet').innerHTML = kosong
  document.getElementById('text-tweet').value = clear
}
