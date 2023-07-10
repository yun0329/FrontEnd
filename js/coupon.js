function toggleUserPanel() {
  var userPanel = document.getElementById("userPanel");
  if (userPanel.style.display === "none") {
    userPanel.style.display = "block";
  } else {
    userPanel.style.display = "none";
  }
}

function toggleCouponPanel(panelId) {
  var couponPanel = document.getElementById(panelId);
  if (couponPanel.style.display === "none") {
    couponPanel.style.display = "block";
  } else {
    couponPanel.style.display = "none";
  }
}

function editCoupon() {
  // Add your code here to handle the edit functionality
}

function deleteCoupon() {
  // Add your code here to handle the delete functionality
}

function checkUsageHistory() {
  // Add your code here to handle checking the usage history
}

document
  .getElementById("input_image")
  .addEventListener("change", function (event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      const imgSrc = event.target.result;
      document.getElementById("image_preview").src = imgSrc;
      document.getElementById("image_preview").style.display = "block";
    };

    reader.readAsDataURL(file);
  });
