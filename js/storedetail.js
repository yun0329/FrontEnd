//
// var data = {
//     "id": 2,
//     "storeName": "store_name",
//     "storeAddr": "store_addr",
//     "regNum": "2208162517",
//     "storeIntro": "store_intro",
//     "storeImg": "store_img_link",
//     "certificationNum": 1234,
//     "coupons":[
//         {
//             "couponId": 3,
//             "content": "content",
//             "couponNum": "couponNum",
//             "storeId": 'storeId'
//         },
//         {
//             "couponId": 2,
//             "content": "content1",
//             "couponNum": "couponNu1m",
//             "storeId": 'storeId'
//         }
//     ]
// }
$(document).ready(function(){
    var storeId = localStorage.getItem('storeId');
    $.ajax({
        url: '/detail/' + storeId,
        type: 'GET',
        contentType: "application/json",
        headers: {
            Authorization: grantType + " " + accessToken,
            Refresh: refreshToken,
        },
        success: function (data) {
            var storeName = document.getElementById('storeName');
            storeName.innerHTML = '<h2>' + data.storeName + '</h2>';

            var storeAddr = document.getElementById('storeLocation');
            storeAddr.innerHTML = '<p>' + data.storeAddr + '</p>';

            var storeDetail = document.getElementById('storeDetail');
            storeDetail.innerHTML = '<p>' + data.storeIntro + '</p>';
        }
    })
})