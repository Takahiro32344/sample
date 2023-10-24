/*    背景画像セット    */

function background_set() {
    // 春
    if (date.getMonth() + 1 >= 3 && date.getMonth() + 1 <= 5) {
        // 時間帯（朝・昼）
        if (date.getHours() >= 6 && date.getHours() <= 17) {
            document.getElementById('background_1').src = "./image/bg_spring/day_1.jpg";
            document.getElementById('background_2').src = "./image/bg_spring/day_2.jpg";
            document.getElementById('background_3').src = "./image/bg_spring/day_3.jpg";
            document.getElementById('background_4').src = "./image/bg_spring/day_4.jpg";
        // 時間帯（夜）
        } else {
            document.getElementById('background_1').src = "./image/bg_spring/night_1.jpg";
            document.getElementById('background_2').src = "./image/bg_spring/night_2.jpg";
            document.getElementById('background_3').src = "./image/bg_spring/night_3.jpg";
            document.getElementById('background_4').src = "./image/bg_spring/night_4.jpg";
        }
    // 梅雨
    } else if (date.getMonth() + 1 == 6) {
        if (date.getHours() >= 6 && date.getHours() <= 17) {
            document.getElementById('background_1').src = "./image/bg_rs/day_1.jpg";
            document.getElementById('background_2').src = "./image/bg_rs/day_2.jpg";
            document.getElementById('background_3').src = "./image/bg_rs/day_3.jpg";
            document.getElementById('background_4').src = "./image/bg_rs/day_4.jpg";
        } else {
            document.getElementById('background_1').src = "./image/bg_rs/night_1.jpg";
            document.getElementById('background_2').src = "./image/bg_rs/night_2.jpg";
            document.getElementById('background_3').src = "./image/bg_rs/night_3.jpg";
            document.getElementById('background_4').src = "./image/bg_rs/night_4.jpg";
        }
    // 夏
    } else if (date.getMonth() + 1 == 7 || date.getMonth() + 1 == 8) {
        if (date.getHours() >= 6 && date.getHours() <= 17) {
            document.getElementById('background_1').src = "./image/bg_summer/day_1.jpg";
            document.getElementById('background_2').src = "./image/bg_summer/day_2.jpg";
            document.getElementById('background_3').src = "./image/bg_summer/day_3.jpg";
            document.getElementById('background_4').src = "./image/bg_summer/day_4.jpg";
        } else {
            document.getElementById('background_1').src = "./image/bg_summer/night_1.jpg";
            document.getElementById('background_2').src = "./image/bg_summer/night_2.jpg";
            document.getElementById('background_3').src = "./image/bg_summer/night_3.jpg";
            document.getElementById('background_4').src = "./image/bg_summer/night_4.jpg";
        }
    // 秋
    } else if (date.getMonth() + 1 >= 9 && date.getMonth() + 1 <= 11) {
        if (date.getHours() >= 6 && date.getHours() <= 17) {
            document.getElementById('background_1').src = "./image/bg_autumn/day_1.jpg";
            document.getElementById('background_2').src = "./image/bg_autumn/day_2.jpg";
            document.getElementById('background_3').src = "./image/bg_autumn/day_3.jpg";
            document.getElementById('background_4').src = "./image/bg_autumn/day_4.jpg";
        } else {
            document.getElementById('background_1').src = "./image/bg_autumn/night_1.jpg";
            document.getElementById('background_2').src = "./image/bg_autumn/night_2.jpg";
            document.getElementById('background_3').src = "./image/bg_autumn/night_3.jpg";
            document.getElementById('background_4').src = "./image/bg_autumn/night_4.jpg";
        }
    // 冬
    } else {
        if (date.getHours() >= 6 && date.getHours() <= 17) {
            document.getElementById('background_1').src = "./image/bg_winter/day_1.jpg";
            document.getElementById('background_2').src = "./image/bg_winter/day_2.jpg";
            document.getElementById('background_3').src = "./image/bg_winter/day_3.jpg";
            document.getElementById('background_4').src = "./image/bg_winter/day_4.jpg";
        } else {
            document.getElementById('background_1').src = "./image/bg_winter/night_1.jpg";
            document.getElementById('background_2').src = "./image/bg_winter/night_2.jpg";
            document.getElementById('background_3').src = "./image/bg_winter/night_3.jpg";
            document.getElementById('background_4').src = "./image/bg_winter/night_4.jpg";
        }
    }

    if (counter_1 > 0)
        counter_1--;
    else {
        counter_1 = 100;
        if (bg_num < 4)
            bg_num++;
        else
            bg_num = 1;

        switch (bg_num) {
            case 1:
                document.getElementById('background_1').style = "transition: 4s; opacity: 0;";
                document.getElementById('background_2').style = "transition: 4s; opacity: 1;";
                break;
            case 2:
                document.getElementById('background_2').style = "transition: 4s; opacity: 0;";
                document.getElementById('background_3').style = "transition: 4s; opacity: 1;";
                break;
            case 3:
                document.getElementById('background_3').style = "transition: 4s; opacity: 0;";
                document.getElementById('background_4').style = "transition: 4s; opacity: 1;";
                break;
            case 4:
                document.getElementById('background_4').style = "transition: 4s; opacity: 0;";
                document.getElementById('background_1').style = "transition: 4s; opacity: 1;";
                break;
        }
    }
}