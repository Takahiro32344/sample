/*      雪（PC）    */

function fall_snow_PC() {
    if (date.getMonth() + 1 == 12 || date.getMonth() + 1 == 1 || date.getMonth() + 1 == 2) {
        set_flag[1] = 0;
        set_flag[2] = 0;
        if (set_flag[0] == 0) {
            id = 1;
            obj_left = 0.5;
            delay = 0.0;
            for (var i = 0; i < 10 * 2; i++) {
                for (var j = 0; j < 48 + 47; j++) {
                    var rand = Math.floor(Math.random() * 20);
                    switch (rand) {
                        case 0:
                            delay = 0.0;
                            break;
                        case 1:
                            delay = 0.5;
                            break;
                        case 2:
                            delay = 1.0;
                            break;
                        case 3:
                            delay = 1.5;
                            break;
                        case 4:
                            delay = 2.0;
                            break;
                        case 5:
                            delay = 2.5;
                            break;
                        case 6:
                            delay = 3.0;
                            break;
                        case 7:
                            delay = 3.5;
                            break;
                        case 8:
                            delay = 4.0;
                            break;
                        case 9:
                            delay = 4.5;
                            break;
                        case 10:
                            delay = 5.0;
                            break;
                        case 11:
                            delay = 5.5;
                            break;
                        case 12:
                            delay = 6.0;
                            break;
                        case 13:
                            delay = 6.5;
                            break;
                        case 14:
                            delay = 7.0;
                            break;
                        case 15:
                            delay = 7.5;
                            break;
                        case 16:
                            delay = 8.0;
                            break;
                        case 17:
                            delay = 8.5;
                            break;
                        case 18:
                            delay = 9.0;
                            break;
                        case 19:
                            delay = 9.5;
                            break;
                    }
                    do {
                        rand = Math.floor(Math.random() * 20);
                    } while(rand < 8);
                    document.getElementById('snow_' + id++).style = "position: absolute; top: -10px; left:" + obj_left +"%; border-radius: 50%; width: 5px; height: 5px; background-color: rgba(255,255,255,0.5); animation-name: fall_snow; animation-delay:" + delay + "s; animation-duration:" + rand +"s; animation-timing-function:ease-out; animation-direction:normal; animation-iteration-count: infinite;";
                    obj_left += 1.045;
                }
                obj_left = 0.5;
            }
            set_flag[0] = 1;
        }
    }
}