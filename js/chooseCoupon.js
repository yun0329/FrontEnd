$.ajax({
  type: "GET",
  url: `${서버주소}/api/coupon`,
  contentType: "application/json",
  success: function (data) {},
  error: function () {
    alert("");
  },
});

couponInput.addEventListener("click", (event) => {
  $.ajax({
    type: "POST",
    url: `${서버주소}/api/coupon`,
    contentType: "application/json",
    headers: {
      Authorization: grantType + " " + accessToken,
      Refresh: refreshToken,
    },
    success: function (response) {
      console.log(response);
      // Handle the successful response here
    },
    error: function () {
      alert("쿠폰 선택에 실패했습니다.");
    },
  });
});
