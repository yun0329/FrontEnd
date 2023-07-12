//리뷰 가져오기
function getReviews() {
var storeId = localStorage.getItem('storeId');
    $.ajax({
      type: 'GET',
      url: '/api/review/' + storeId,
      success: function(data) {
        var ReviewContainer = document.getElementById('wrap_allReview_container');
        var reviews = data.reviews;
        var length = reviews.length;

        for (var i = 0; i < length; i++) {
          var review = reviews[i];

          var container = document.createElement('div');
          container.className = 'allReview_container';

          var review1 = document.createElement('p');
          review1.className = 'review1';
          review1.textContent = review.review_id;
          container.appendChild(review1);

          var verticalReview = document.createElement('div');
          verticalReview.className = 'vertical_review';

          var review2 = document.createElement('p');
          review2.className = 'review2';
          review2.textContent = '☆☆☆☆☆ ' + review.nickname;
          verticalReview.appendChild(review2);

          var review3 = document.createElement('p');
          review3.className = 'review3';
          review3.textContent = '날짜: ' + review.date;
          verticalReview.appendChild(review3);

          container.appendChild(verticalReview);

          var reviewContentBox = document.createElement('div');
          reviewContentBox.className = 'review_contentbox';

          var review4 = document.createElement('p');
          review4.className = 'review4';
          review4.textContent = review.content;
          reviewContentBox.appendChild(review4);

          container.appendChild(reviewContentBox);

          ReviewContainer.appendChild(container);
        }
      },
      error: function() {
        console.log('리뷰를 가져오는데 실패했습니다.');
      }
    });
  }

  $(document).ready(function(){
    getReviews();
  });
  
  
  //리뷰 등록
  function createReview() {
  var storeId = localStorage.getItem('storeId');
  var accessToken = localStorage.getItem('accessToken');
  var refreshToken = localStorage.getItem('refreshToken');
    $.ajax({
      type: 'POST',
      url: '/api/review/' + storeId,
      contentType: 'application/json',
      headers: {
        Authorization : accessToken,
        Refresh : refreshToken
      },
      data: JSON.stringify(reviewData),
      success: function(data) {
        console.log('리뷰가 성공적으로 등록되었습니다.');
      },
      error: function() {
        console.log('리뷰 등록에 실패했습니다.');
      }
    });
  }
  //리뷰 삭제
  function deleteReview(id) {
  console.log(id)
    $.ajax({
      type: 'DELETE',
      url: '/api/review/' + reviewId,
      headers: {
        "Authorization": "Access-Token",
        "Refresh": "Refresh-Token"
      },
      success: function(data) {
        console.log('리뷰가 성공적으로 삭제되었습니다.');
        window.location = '#';
      },
      error: function() {
        console.log('리뷰 삭제에 실패했습니다.');
      }
    });
  }
  