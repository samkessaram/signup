$(function(){

  // To ensure submit is called only once is two listeners are fired together
  var timestamp; 

  document.getElementById('sign_up_email').addEventListener('keydown', function(e) {
    timestamp = new Date()
    e = e || event
    if ( e.key === 'Tab' || e.key === 'Enter' ){
      e.preventDefault()
      if ( $('#sign_up_email').val().match(/\w+@\w+/) !== null ){

        // Hacky way of preventing focus shifting, thus scrolling the div
        $('#sign_up_email').focus();
        window.setTimeout(function(){
          $('#sign_up_email').blur();
        },0)

        submitForm();
      } else {
        $('#email-warning').show();
      }
    } 
  })


  // Subsequent submit attempts
  document.getElementById('sign_up_email').addEventListener('focusout', function(e) {
    var firedAt = new Date()
    if ( $('#form-container').css('height') === '693px' && timestamp.getTime() !== firedAt.getTime() ){
      if ( $('#sign_up_email').val().match(/\w+@\w+/) !== null ){
        submitForm();
      } else {
        $('#email-warning').show();
      }
    }
  })
})

function submitForm() {
  $('#new_sign_up').submit();
  $('#email-warning').hide();

  var children = $('#hidden-form').find('input');

  for ( var i = 0; i < children.length; i++ ){
    $(children[i]).attr('disabled',true);
  }
}