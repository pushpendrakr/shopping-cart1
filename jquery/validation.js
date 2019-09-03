$(function(){
let form=$('#form')
let submitbtn=$('#submitbtn')
let firstname=('#firstname')
let lastname=('#lastname')
let username=('#username')
let password=('#password')

submitbtn.click(function(e){
  form.validate({
    rules:{
      username:'required',
     firstname:'required',
     lastname:'required',
     password:{
       required:true,
       minlength:8,}
    },
    messages:{
     
      password:{
        minlength:'password must be 8 characters long'
      }
    },
    submitHandler:function(form){form.submit()}
  });
})

})