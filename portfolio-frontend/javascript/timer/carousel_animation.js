/*    カルーセルアニメーション    */

function carousel_animation() {
    if (counter_2 > 0)
        counter_2--;
    else {
        counter_2 = 80;
        if (image_num < 3) {
            left[0] -= offset[0];
            left[1] -= offset[1];
            left[2] -= offset[2];
            image_num++;
        } else {
            left[0] = 0;
            left[1] = 0;
            left[2] = 0;
            image_num = 1;
        }
    }

    switch (image_num) {
        case 1:
            document.getElementById('mark_1').style = "background-color: #ff0000;";
            document.getElementById('mark_2').style = "background-color: #500000;";
            document.getElementById('mark_3').style = "background-color: #500000;";
            break;
        case 2:
            document.getElementById('mark_1').style = "background-color: #500000;";
            document.getElementById('mark_2').style = "background-color: #ff0000;";
            document.getElementById('mark_3').style = "background-color: #500000;";
            break;
        case 3:
            document.getElementById('mark_1').style = "background-color: #500000;";
            document.getElementById('mark_2').style = "background-color: #500000;";
            document.getElementById('mark_3').style = "background-color: #ff0000;";
            break;
    }
}