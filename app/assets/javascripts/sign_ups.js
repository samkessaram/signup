$(function(){

  // To ensure submit is called only once is two listeners are fired together
  var timestamp;
  var keyPressPause; 

  document.getElementById('sign_up_email').addEventListener('keydown', function(e) {
    
    window.clearTimeout(keyPressPause)
    keyPressPause = window.setTimeout(function(){
      submitForm();
    },3000)


    e = e || event
    if ( e.key === 'Tab' || e.key === 'Enter' ){
      e.preventDefault()

      // Hacky way of preventing focus shifting, thus scrolling the div
      // $('#sign_up_email').focus();
      // window.setTimeout(function(){
      //   $('#sign_up_email').blur();
      // },0)
      submitForm();
    } 

  })

  function submitForm() {
    console.log('submit')
    window.clearTimeout(keyPressPause)

    if ( $('#sign_up_email').val().match(/\w+@\w+/) !== null ){
      $('#new_sign_up').submit();
      $('#email-warning').hide();
    } else {
      $('#email-warning').show();
    }

    if ( $('#form-container').hasClass('expanded')){
      var children = $('#hidden-form').find('input');

      for ( var i = 0; i < children.length; i++ ){
        $(children[i]).attr('disabled',true);
      }
    }

  }

})

