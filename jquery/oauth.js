$(function(){

$('#facebooklogin').click(function(){
    $.get('/auth/facebook',function(){
        done()
       })
})

})