var grantType = localStorage.getItem("grantType");
var accessToken = localStorage.getItem("accessToken");
var refreshToken = localStorage.getItem("refreshToken");

$.ajax({
  type: "POST",
  url: `${서버주소}/api/coupon`,
  contentType: "application/json",
  headers: {
    Authorization: grantType + " " + accessToken,
    Refresh: refreshToken,
  },
  data: JSON.stringify({
    content: "content",
    couponNum: "couponNum",
  }),
  success: function (data) {
    alert("쿠폰 등록에 성공했습니다.");
  },
  error: function () {
    alert("쿠폰 등록에 실패했습니다.");
  },
});
