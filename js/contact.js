var submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function(event) {
  event.preventDefault();
  var msg = document.getElementById('msg-textarea')
  msg.value = msg.value.toUpperCase();
}, true);
