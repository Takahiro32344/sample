/*         イベント処理           */

// マウスオーバー時
function mouse_over_tab1() {
    if (flag != 0)
        document.getElementById('tab_1').style = "transition: .5s; color: white; background-color:" + color[0] + ";";
}

function mouse_over_tab2() {
    if (flag != 1)
        document.getElementById('tab_2').style = "transition: .5s; color: white; background-color:" + color[0] + ";";
}

function mouse_over_tab3() {
    if (flag != 2)
        document.getElementById('tab_3').style = "transition: .5s; color: white; background-color:" + color[0] + ";";
}
// マウスアウト時
function mouse_out_tab1() {
    if (flag != 0)
        document.getElementById('tab_1').style = "transition: .5s; color: black; background-color:" + color[1] + ";";
}

function mouse_out_tab2() {
    if (flag != 1)
        document.getElementById('tab_2').style = "transition: .5s; color: black; background-color:" + color[1] + ";";
}

function mouse_out_tab3() {
    if (flag != 2)
        document.getElementById('tab_3').style = "transition: .5s; color: black; background-color:" + color[1] + ";";
}

// タブの切り替え
// 誕生日占い
function tab1() {
    flag = 0;
    document.getElementById('tab_1').style = "color: white; background-color:" + color[0] + ";";
    document.getElementById('tab_2').style = "color: black; background-color:" + color[1] +";";
    document.getElementById('tab_3').style = "color: black; background-color:" + color[1] + ";";
    document.getElementById('appraisal_birthday').style = "display: block;";
    document.getElementById('appraisal_constellation').style = "display: none;";
    document.getElementById('appraisal_name').style = "display: none;";
    document.getElementById('last_name').value = null;
    document.getElementById('last_name').style = "color: black;";
    document.getElementById('first_name').value = null;
    document.getElementById('first_name').style = "color: black;";
}

// 星座占い
function tab2() {
    flag = 1;
    document.getElementById('tab_1').style = "color: black; background-color:" + color[1] + ";";
    document.getElementById('tab_2').style = "color: white; background-color:" + color[0] + ";";
    document.getElementById('tab_3').style = "color: black; background-color:" + color[1] + ";";
    document.getElementById('appraisal_birthday').style = "display: none;";
    document.getElementById('appraisal_constellation').style = "display: block;";
    document.getElementById('appraisal_name').style = "display: none;";
    document.getElementById('last_name').value = null;
    document.getElementById('last_name').style = "color: black;";
    document.getElementById('first_name').value = null;
    document.getElementById('first_name').style = "color: black;";
}

// 名前占い
function tab3() {
    flag = 2;
    document.getElementById('tab_1').style = "color: black; background-color:" + color[1] + ";";
    document.getElementById('tab_2').style = "color: black; background-color:" + color[1] + ";";
    document.getElementById('tab_3').style = "color: white; background-color:" + color[0] + ";";
    document.getElementById('appraisal_birthday').style = "display: none;";
    document.getElementById('appraisal_constellation').style = "display: none;";
    document.getElementById("appraisal_name").style = "display: block;";
}

// 鑑定ボタンクリック
function click_button() {
    if (flag != 2) {
        if (flag == 0)
            result_birthday();        // 誕生日占い
        else
            result_constellation();   // 星座占い
        view = 2;
    } else {
        if (validation() == 1) {
            result_name();            // 名前占い
            view = 2;
        }
    }
}

// 戻るボタンクリック
function click_return() {
    counter_4 = 5;
    counter_5 = 0;
    motion = 0;
    view = 1;
}
