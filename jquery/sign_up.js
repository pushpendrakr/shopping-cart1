$(function(){
       let username=$('#username')
       let password=$('#password')
       let firstname=$('#firstname')
       let lastname=$('#lastname')  
    $('#submitbtn').click(function(){
        $.ajax({
            url:'/api/users/',
            type:"post",
            data:{
                username:username.val(),
                password:password.val(),
                firstname:firstname.val(),
                lastname:lastname.val()
                },
            success:function(){
                window.alert("hello")
            }
        })})
    })
