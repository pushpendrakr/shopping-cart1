$(function(){
    let btn     =$('#submitbtn')
    let username=$('#username')
    let password=$('#password')

    btn.click(function(){
        $.ajax({
            url:'/api/users/login',
            type:"post",
            data:{username:username.val(),
            password:password.val()},
            success:function(){
                window.location.replace("localhost:/api/users/login");
}
        })
    })
})
