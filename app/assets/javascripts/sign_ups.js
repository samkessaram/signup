$(function(){

  var email;
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
      if ( $('#sign_up_email').val() !== '' ){
        $('#email-warning').show();
      }
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

  $('#sign_up_email').focus(function(){ $(this).select()})

})

