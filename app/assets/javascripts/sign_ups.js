$(function(){

  // To ensure submit is called only once is two listeners are fired together
  var email;
  var timestamp;
  var keyPressPause; 

  document.getElementById('sign_up_email').addEventListener('keydown', function(e) {
    $('#email-warning').hide();
    window.clearTimeout(keyPressPause)
    keyPressPause = window.setTimeout(function(){
      submitForm();
    },2000)


    e = e || event
    if ( e.key === 'Tab' || e.key === 'Enter' ){
      if ( !$('#form-container').hasClass('expanded') ){
        e.preventDefault()
      }
      

      // Hacky way of preventing focus shifting, thus scrolling the div
      // $('#sign_up_email').focus();
      // window.setTimeout(function(){
      //   $('#sign_up_email').blur();
      // },0)
      submitForm();
    } 

  })

  function submitForm() {
    window.clearTimeout(keyPressPause)

    if ( $('#sign_up_email').val().match(/\w+@\w+\.\w+/) !== null ){
      if ( email !== $('#sign_up_email').val() ){
        email = $('#sign_up_email').val();
        $('#new_sign_up').submit();
        console.log('submit')
        disableForm();
      }
      $('#email-warning').hide();
    } else {
      $('#email-warning').show();
    }
  }

  function disableForm(){
    if ( $('#form-container').hasClass('expanded')){
      var children = $('#hidden-form').find('input');

      for ( var i = 0; i < children.length; i++ ){
        $(children[i]).attr('disabled',true);
      }
    }
  }

})

