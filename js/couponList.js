function toggleUserPanel() {
  var userPanel = document.getElementById("userPanel");
  if (userPanel.style.display === "none") {
    userPanel.style.display = "block";
  } else {
    userPanel.style.display = "none";
  }
}

var grantType = localStorage.getItem("grantType");
var accessToken = localStorage.getItem("accessToken");
var refreshToken = localStorage.getItem("refreshToken");

$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: `${서버주소}/api/mine`,
    contentType: "application/json",
    headers: {
      Authorization: grantType + " " + accessToken,
      Refresh: refreshToken,
    },

    success: function (data) {
      var responseList = data.responList;
      var length = responseList.length;

      for (var i = 0; i < length; i++) {
        var couponWrap = responseList[0];
        var couponBox = document.getElementsByClassName(
          "wrap_chooseCoupon_container"
        );

        var coupon = document.createElement("div");
        coupon.className = "chooseCoupon_container3";

        var couponContent = document.createElement("div");
        var couponName = document.createElement("p");
        couponName.innerText = couponWrap.content;

        var couponInput = document.createElement("input");
        couponInput.type = "button";
        couponInput.id = "couponWrap.couponId";
        couponInput.value = "선택하기";

        couponContent.appendChild(couponName);

        coupon.appendChild(couponContent);
        coupon.appendChild(couponInput);

        couponBox.appendChild(coupon);
      }
    },
    error: function () {
      console.log("쿠폰 검색에 실패했습니다.");
    },
  });
});
