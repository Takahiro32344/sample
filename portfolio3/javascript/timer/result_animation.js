/*      鑑定結果ページアニメーション       */

function result_animation() {
    // 背景
    switch (bg_num_result) {
        case 0:
            if (date.getMonth() + 1 >= 9 && date.getMonth() + 1 <= 11) {
                if (date.getHours() >= 6 && date.getHours() <= 17)
                    document.getElementById('background_result').src = "./image/bg_autumn/day_1.jpg";
                else
                    document.getElementById('background_result').src = "./image/bg_autumn/night_1.jpg";
            } else if (date.getMonth() + 1 == 12 || date.getMonth() + 1 == 1 || date.getMonth() + 1 == 2) {
                if (date.getHours() >= 6 && date.getHours() <= 17)
                    document.getElementById('background_result').src = "./image/bg_winter/day_1.jpg";
                else
                    document.getElementById('background_result').src = "./image/bg_winter/night_1.jpg";
            } else {
                if (date.getMonth() + 1 == 6) {
                    if (date.getHours() >= 6 && date.getHours() <= 17)
                        document.getElementById('background_result').src = "./image/bg_rs/day_1.jpg";
                    else
                        document.getElementById('background_result').src = "./image/bg_rs/night_1.jpg";
                } else {
                    if (date.getHours() >= 6 && date.getHours() <= 17)
                        document.getElementById('background_result').src = "./image/bg_spring/day_1.jpg";
                    else
                        document.getElementById('background_result').src = "./image/bg_spring/night_1.jpg";
                }
            }
            break;
        case 1:
            if (date.getMonth() + 1 >= 9 && date.getMonth() + 1 <= 11) {
                if (date.getHours() >= 6 && date.getHours() <= 17)
                    document.getElementById('background_result').src = "./image/bg_autumn/day_2.jpg";
                else
                    document.getElementById('background_result').src = "./image/bg_autumn/night_2.jpg";
            } else if (date.getMonth() + 1 == 12 || date.getMonth() + 1 == 1 || date.getMonth() + 1 == 2) {
                if (date.getHours() >= 6 && date.getHours() <= 17)
                    document.getElementById('background_result').src = "./image/bg_winter/day_2.jpg";
                else
                    document.getElementById('background_result').src = "./image/bg_winter/night_2.jpg";
            } else {
                if (date.getMonth() + 1 == 6) {
                    if (date.getHours() >= 6 && date.getHours() <= 17)
                        document.getElementById('background_result').src = "./image/bg_rs/day_2.jpg";
                    else
                        document.getElementById('background_result').src = "./image/bg_rs/night_2.jpg";
                } else {
                    if (date.getHours() >= 6 && date.getHours() <= 17)
                        document.getElementById('background_result').src = "./image/bg_spring/day_2.jpg";
                    else
                        document.getElementById('background_result').src = "./image/bg_spring/night_2.jpg";
                }
            }
            break;
        case 2:
            if (date.getMonth() + 1 >= 9 && date.getMonth() + 1 <= 11) {
                if (date.getHours() >= 6 && date.getHours() <= 17)
                    document.getElementById('background_result').src = "./image/bg_autumn/day_3.jpg";
                else
                    document.getElementById('background_result').src = "./image/bg_autumn/night_3.jpg";
            } else if (date.getMonth() + 1 == 12 || date.getMonth() + 1 == 1 || date.getMonth() + 1 == 2) {
                if (date.getHours() >= 6 && date.getHours() <= 17)
                    document.getElementById('background_result').src = "./image/bg_winter/day_3.jpg";
                else
                    document.getElementById('background_result').src = "./image/bg_winter/night_3.jpg";
            } else {
                if (date.getMonth() + 1 == 6) {
                    if (date.getHours() >= 6 && date.getHours() <= 17)
                        document.getElementById('background_result').src = "./image/bg_rs/day_3.jpg";
                    else
                        document.getElementById('background_result').src = "./image/bg_rs/night_3.jpg";
                } else {
                    if (date.getHours() >= 6 && date.getHours() <= 17)
                        document.getElementById('background_result').src = "./image/bg_spring/day_3.jpg";
                    else
                        document.getElementById('background_result').src = "./image/bg_spring/night_3.jpg";
                }
            }
            break;
        case 3:
            if (date.getMonth() + 1 >= 9 && date.getMonth() + 1 <= 11) {
                if (date.getHours() >= 6 && date.getHours() <= 17)
                    document.getElementById('background_result').src = "./image/bg_autumn/day_4.jpg";
                else
                    document.getElementById('background_result').src = "./image/bg_autumn/night_4.jpg";
            } else if (date.getMonth() + 1 == 12 || date.getMonth() + 1 == 1 || date.getMonth() + 1 == 2) {
                if (date.getHours() >= 6 && date.getHours() <= 17)
                    document.getElementById('background_result').src = "./image/bg_winter/day_4.jpg";
                else
                    document.getElementById('background_result').src = "./image/bg_winter/night_4.jpg";
            } else {
                if (date.getMonth() + 1 == 6) {
                    if (date.getHours() >= 6 && date.getHours() <= 17)
                        document.getElementById('background_result').src = "./image/bg_rs/day_4.jpg";
                    else
                        document.getElementById('background_result').src = "./image/bg_rs/night_4.jpg";
                } else {
                    if (date.getHours() >= 6 && date.getHours() <= 17)
                        document.getElementById('background_result').src = "./image/bg_spring/day_4.jpg";
                    else
                        document.getElementById('background_result').src = "./image/bg_spring/night_4.jpg";
                }
            }
            break;
    }
    // 結果表示前アニメーション

    if (window.outerWidth > 1101) {
        load_obj_size_1 = 20;
        load_obj_size_2 = 10;
        unit = "px";
    } else if (window.outerWidth > 768 && window.outerWidth <= 1101) {
        load_obj_size_1 = 2;
        load_obj_size_2 = 1;
        unit = "vw";

    } else {
        load_obj_size_1 = 2;
        load_obj_size_2 = 1;
        unit = "vw";
    }

    if (counter_4 > 0)
        counter_4--;
    else {
        counter_4 = 5;
        if (motion < 2)
            motion++;
        else {
            motion = 0;
            if (counter_5 < 2)
                counter_5++;
            else {
                document.getElementById('result_animation').style = "display: none;";
                document.getElementById('result_view').style = "display: block;";
                view = 3;
            }
        }

        switch (motion) {
            case 0:
                document.getElementById('load_indicator1').style = "width:"+ load_obj_size_1 + unit + "; height:" + load_obj_size_1 + unit + ";";
                document.getElementById('load_indicator2').style = "width:"+ load_obj_size_2 + unit + "; height:" + load_obj_size_2 + unit + ";";
                document.getElementById('load_indicator3').style = "width:"+ load_obj_size_2 + unit + "; height:" + load_obj_size_2 + unit + ";";
                break;
            case 1:
                document.getElementById('load_indicator1').style = "width:"+ load_obj_size_2 + unit + "; height:" + load_obj_size_2 + unit + ";";
                document.getElementById('load_indicator2').style = "width:"+ load_obj_size_1 + unit + "; height:" + load_obj_size_1 + unit + ";";
                document.getElementById('load_indicator3').style = "width:"+ load_obj_size_2 + unit + "; height:" + load_obj_size_2 + unit + ";";
                break;
            case 2:
                document.getElementById('load_indicator1').style = "width:"+ load_obj_size_2 + unit + "; height:" + load_obj_size_2 + unit + ";";
                document.getElementById('load_indicator2').style = "width:"+ load_obj_size_2 + unit + "; height:" + load_obj_size_2 + unit + ";";
                document.getElementById('load_indicator3').style = "width:"+ load_obj_size_1 + unit + "; height:" + load_obj_size_1 + unit + ";";
                break;
        }
    }
}