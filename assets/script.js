function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  // Aqui inserimos o URL do Apps Script
  var url = 'https://script.google.com/macros/s/AKfycbzYXLHJjn_sfMT_GcXvzAa7PgAgTcRTTbTTKQU_y2akQ4S1GnOGZNNzATd8fmsg-Ixh/exec';
  google.script.run.withSuccessHandler(function() {
      alert('Formulário enviado com sucesso!');
  }).withFailureHandler(function(error) {
      alert('Erro ao enviar formulário: ' + error.message);
  }).processForm(name, email, url);

  document.getElementById("myForm").reset();
}