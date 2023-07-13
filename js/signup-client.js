
function signup(){
    var grantType = localStorage.getItem('grantType');
    var accessToken = localStorage.getItem('accessToken');
    var refreshToken = localStorage.getItem('refreshToken');

    $.ajax({
        type: 'POST',
        url: '/api/signup/client',
        contentType : 'application/json',
        headers: {
            'Authorization': grantType + ' ' + accessToken,
            'Refresh': refreshToken
        },
        data: JSON.stringify({
            'userId' : id,
            'userPw' : pw,
            'name' : name,
            'storeName' : store_name,
            'storeAddr' : store_addr,
            'regNum' : '0123456789'
        }),
        success : function(data){
          alert('Success');
        },
        error: function(request, status, error){
          alert('Error');
        }
    })
}