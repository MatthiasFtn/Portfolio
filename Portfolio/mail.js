$(document).ready(function(){
  $('.sumbit').click(function (event){

    var name = $('.name').val()
    var email = $('.email').val()
    var subject = $('.subject').val()
    var message = $('.message').val()
    var statusElm = $('.status')

    statusElm.empty()


    if(name.length >=5){
      status.append('Correct')
    }else{
      event.preventDefault()
      status.append('Incorrect')
    }

    if(email.length > 5 && email.include('@') && email.include(';')){
      status.append('Correct')
    }else{
      event.preventDefault()
      status.append('Incorrect')
    }

    if(subject.length >=2){
      status.append('Correct')
    }else{
      event.preventDefault()
      status.append('Incorrect')
    }

    if(message.length >= 10){
      status.append('Correct')
    }else{
      event.preventDefault()
      status.append('Incorrect')
    }
  })
})
