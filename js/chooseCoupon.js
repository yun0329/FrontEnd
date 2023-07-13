var grantType = localStorage.getItem("grantType");
var accessToken = localStorage.getItem("accessToken");
var refreshToken = localStorage.getItem("refreshToken");

$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: `${서버주소}/api/coupon`,
    contentType: "application/json",
    success: function (data) {
      var responseList = data.responseList;
      var length = responseList.length;

      for (var i = 0; i < length; i++) {
        var couponWrap = responseList[i]; // Use the loop index `i` instead of `0`
        var couponBox = document.querySelector(".wrap_chooseCoupon_container"); // Use `querySelector` instead of `getElementsByClassName`

        var coupon = document.createElement("div");
        coupon.className = "chooseCoupon_container3";

        var couponContent = document.createElement("div");
        var couponName = document.createElement("p");
        couponName.innerText = couponWrap.content;

        var couponInput = document.createElement("input");
        couponInput.type = "button";
        couponInput.id = couponWrap.couponId; // Remove quotes around `couponWrap.couponId`
        couponInput.value = "선택하기";

        couponContent.appendChild(couponName);

        coupon.appendChild(couponContent);
        coupon.appendChild(couponInput);

        couponBox.appendChild(coupon);
      }
    },
    error: function () {
      alert("쿠폰 검색에 실패했습니다.");
    },
  });
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