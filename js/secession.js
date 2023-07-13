$(document).ready(function() {
    var reviewCount = 100;

    if(reviewCount >= 100){
        window.location.href = "secession.html";
    }

    $("#secessionButton").click(function(){
        $.ajax({
            type: "Post",
            url:"탈퇴URL",
            success: function(response){
                console.log("탈퇴처리가 완료되었습니다.")
            },
            error: function() {
                console.log("탈퇴 처리 중 오류가 발생하였다 이자시가")
            }
        })
    })
})