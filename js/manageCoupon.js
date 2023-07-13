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

function deleteCoupon() {
  $.ajax({
    type: "DELETE",
    url: `${서버주소}/api/{couponId}`,
    contentType: "application/json",
    headers: {
      Authorization: "AccessToken",
      "Refresh-Token": "RefreshToken",
    },
    success: function (data) {
      var responseList = data.responseList;
      console.log(responseList);
      var length = responseList.length;
      var couponWrap = responseList[i];
      const couponBox = document.querySelector(".wrap_manageCoupon_container3");

      for (var i = 0; i < length; i++) {
        var coupon = document.createElement("div");
        coupon.className = "manageCoupon_container3";

        var couponInput = document.createElement("button");
        couponInput.id = "couponPanel_button1";
        couponInput.onclick = function (event) {
          toggleCouponPanel("couponPanel1");
        };
        couponInput.innerHTML = "⦁⦁⦁";

        var couponContent = document.createElement("div");
        couponContent.id = "couponPanel1";
        couponContent.className = "coupon_panel";

        var couponPanelContent = document.createElement("div");
        couponPanelContent.className = "couponPanel_content";

        var ul = document.createElement("ul");

        var li1 = document.createElement("li");
        var li2 = document.createElement("li");

        var a = document.createElement("a");
        var b = document.createElement("a");
        a.innerHTML = "수정";
        a.onclick = function (event) {
          editCoupon();
        };
        b.innerHTML = "삭제";
        b.onclick = function (event) {
          deleteCoupon();
        };

        li1.appendChild(a);
        li2.appendChild(b);

        ul.appendChild(li1);
        ul.appendChild(li2);
        couponPanelContent.appendChild(ul);
        couponContent.appendChild(couponPanelContent);
        coupon.appendChild(couponInput);
        coupon.appendChild(couponContent);
        couponBox.appendChild(coupon);
      }
    },
    error: function () {
      alert("쿠폰 삭제에 실패했습니다.");
    },
  });
}
