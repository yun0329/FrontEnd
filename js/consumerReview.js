$(document).ready(function() {
    var storeId = localStorage.getItem("storeId");
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:8080/"+storeId,
        success: function(response) {
          var reviewData = response; // Ajax로 가져온 데이터를 변수에 저장
          // 가져온 데이터를 사용하여 동적으로 요소 생성
          var reviewBox = document.createElement("div");
          reviewBox.className = "review-box";

          var starLevel = document.createElement("div");
          starLevel.className = "starLevel";
          starLevel.id = "userState";
          starLevel.innerHTML = "★★★★★<span>★★★★</span>";
          reviewBox.appendChild(starLevel);

          var reviewContent = document.createElement("div");
          reviewContent.className = "review-content";
          reviewBox.appendChild(reviewContent);

          var userInfo = document.createElement("div");
          userInfo.className = "user-info";
          reviewContent.appendChild(userInfo);

          var userName = document.createElement("div");
          userName.className = "user-name";
          var userNameHeading = document.createElement("h3");
          userNameHeading.innerHTML = reviewData.user_name;
          userName.appendChild(userNameHeading);
          userInfo.appendChild(userName);

          var uploadDate = document.createElement("div");
          uploadDate.className = "upload-date";
          var uploadDateParagraph = document.createElement("p");
          uploadDateParagraph.innerHTML = reviewData.upload_date;
          uploadDate.appendChild(uploadDateParagraph);
          userInfo.appendChild(uploadDate);

          var userReview = document.createElement("div");
          userReview.className = "user-review";
          var userReviewParagraph = document.createElement("p");
          userReviewParagraph.innerHTML = reviewData.review;
          userReview.appendChild(userReviewParagraph);
          reviewContent.appendChild(userReview);

          // 동적으로 생성한 요소를 문서에 추가
          document.body.appendChild(reviewBox);
        },
        error: function() {
          // Ajax 요청 실패 시 실행되는 코드
          console.log("리뷰 불러오기에 실패했습니다.");
        }
      });
    });

