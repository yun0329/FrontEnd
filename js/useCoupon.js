var grantType = localStorage.getItem("grantType");
var accessToken = localStorage.getItem("accessToken");
var refreshToken = localStorage.getItem("refreshToken");

$.ajax({
  type: "GET",
  url: `${서버주소}/api/coupon`,
  contentType: "application/json",
  headers: {
    Authorization: grantType + " " + accessToken,
    Refresh: refreshToken,
  },

  success: function (data) {},
  error: function () {},
});
