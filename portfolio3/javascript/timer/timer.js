/*       タイマー処理          */

var counter_1 = 100;
var counter_2 = 80;
var image_num = 1;
var bg_num = 0;
var top = 70;
var left = new Array(3);
var set_flag = new Array(3);

var counter_3 = 30;
var counter_4 = 5;
var counter_5 = 0;
var motion = 0;
for (var i = 0; i < 3; i++) {
    left[i] = 0;
    set_flag[i] = 0;
}

var obj_left = 0;

var offset = new Array(3);
offset[0] = 900;
offset[1] = 77;
offset[2] = 75;

setInterval(function () {
    var date = new Date();
    // 表示モード切り替え 1:鑑定トップ 2:鑑定結果
    switch (view) {
        case 1:
            document.getElementById('appraisal_select').style = "display: flex;";
            document.getElementById('result_wrapper').style = "display: none;";
            document.getElementById('result_animation').style = "display: block;";
            document.getElementById('result_view').style = "display: none;";
            // 背景アニメーション
            background_set();
            // カルーセルアニメーション
            carousel_animation();

            // 画面サイズ（端末）ごとのスタイル変更
            if (window.outerWidth > 1101) {
                // カルーセル画像処理
                document.getElementById('image_1').style = "transition: .5s; left:" + left[0] + "px;";
                document.getElementById('image_2').style = "transition: .5s; left:" + (left[0] + offset[0]) + "px;";
                document.getElementById('image_3').style = "transition: .5s; left:" + (left[0] + offset[0] * 2) + "px;";
                // 春
                fall_petal_1_PC();
                // 梅雨
                fall_rain_PC();
                // 秋
                fall_petal_2_PC();
                // 冬
                fall_snow_PC();
            } else if (window.outerWidth > 768 && window.outerWidth <= 1101) {
                // カルーセル画像処理
                document.getElementById('image_1').style = "transition: .5s; left:" + left[1] + "vw;";
                document.getElementById('image_2').style = "transition: .5s; left:" + (left[1] + offset[1]) + "vw;";
                document.getElementById('image_3').style = "transition: .5s; left:" + (left[1] + offset[1] * 2) + "vw;";
                // 春
                fall_petal_1_tablet();
                // 梅雨
                fall_rain_tablet();
                // 秋
                fall_petal_2_tablet();
                // 冬
                fall_snow_tablet();
            } else {
                // カルーセル画像
                document.getElementById('image_1').style = "transition: .5s; left:" + left[2] + "vw;";
                document.getElementById('image_2').style = "transition: .5s; left:" + (left[2] + offset[2]) + "vw;";
                document.getElementById('image_3').style = "transition: .5s; left:" + (left[2] + offset[2] * 2) + "vw;";
                // 春
                fall_petal_1_phone();
                // 梅雨
                fall_rain_phone();
                // 秋
                fall_petal_2_phone();
                // 冬
                fall_snow_phone();
            }
            break;
        case 2:
            document.getElementById('appraisal_select').style = "display: none;";
            document.getElementById('result_wrapper').style = "display: flex;";
            result_animation();
            break;
    }
}, 100);


