var reviewId = localStorage.getItem('reviewId');
var accessToken = localStorage.getItem('accessToken');
var refreshToken = localStorage.getItem('refreshToken');

$(document).ready(function(){
    $.ajax({
        type: 'GET',
        url: '/api/review/' + reviewId,
        contentType: 'application/json',
        success: function(data){
            $('#visitDateInput').val(data.review.visitDate);
            $('#ratingInput').append(data.review.rating);
            $('#ratingInput').append(data.review.content);
        }
    })
})

  //리뷰 수정
  function updateReview(id) {
    var formData = new FormData();
    formData.append('visitDate', $('#visitDateInput').val());
    formData.append('rating', $('#ratingInput').val());
    formData.append('content', $('#contentInput').val());
    
    
    $.ajax({
      type: 'PUT',
      url: '/api/review/' + reviewId,
      processType: false,
      contentType: false,
      headers: {
        "Authorization": "Access-Token",
        "Refresh": "Refresh-Token"
      },
      data: formData,
      success: function(data) {
        console.log('리뷰가 성공적으로 수정되었습니다.');
        window.location = '#';
      },
      error: function() {
        console.log('리뷰 수정에 실패했습니다.');
      }
    });
  }