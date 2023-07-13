$(document).ready(function () {
  $.ajax({
    type: "GET",
    url: `http://127.0.0.1:8080/api/coupon/mine`,
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

couponInput.addEventListener("click", (event) => {
  $.ajax({
    type: "POST",
    url: `http://127.0.0.1:8080/api/coupon/register/{customerId}/{couponId}`,
    contentType: "application/json",
    headers: {
      Authorization: grantType + " " + accessToken,
      Refresh: refreshToken,
    },
    success: function (response) {
      console.log(response);
    },
    error: function () {
      alert("쿠폰 선택에 실패했습니다.");
    },
  });
});
