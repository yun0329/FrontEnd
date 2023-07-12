$.ajax({
  type: "GET",
  url: `${서버주소}/api/coupon`,
  contentType: "application/json",
  success: function (data) {},
  error: function () {
    alert("");
  },
});
