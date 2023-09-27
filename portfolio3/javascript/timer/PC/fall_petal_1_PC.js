/*     桜落下（PC）     */

function fall_petal_1_PC() {
    if (date.getMonth() + 1 == 4 ) {
        set_flag[1] = 0;
        set_flag[2] = 0;
        if (set_flag[0] == 0) {
            id = 1;
            obj_left = 0;
            for (var i = 0; i < 5; i++) {
                for (var j = 0; j < 16; j++) {
                    var rand = Math.floor(Math.random() * 10);
                    switch (rand) {
                        case 0:
                            delay = 0.0;
                            anim_name = "fall_petal1";
                            break;
                        case 1:
                            delay = 2.0;
                            anim_name = "fall_petal2";
                            break;
                        case 2:
                            delay = 4.0;
                            anim_name = "fall_petal3";
                            break;
                        case 3:
                            delay = 6.0;
                            anim_name = "fall_petal4";
                            break;
                        case 4:
                            delay = 8.0;
                            anim_name = "fall_petal5";
                            break;
                        case 5:
                            delay = 10.0;
                            anim_name = "fall_petal6";
                            break;
                        case 6:
                            delay = 12.0;
                            anim_name = "fall_petal7";
                            break;
                        case 7:
                            delay = 14.0;
                            anim_name = "fall_petal8";
                            break;
                        case 8:
                            delay = 16.0;
                            anim_name = "fall_petal9";
                            break;
                        case 9:
                            delay = 18.0;
                            anim_name = "fall_petal10";
                            break;
                    }
                    do {
                        rand = Math.floor(Math.random() * 12);
                    } while (rand < 7);
                    document.getElementById('petal_' + id++).style = "background-image: url('./image/sakura.png'); background-size: 100% 100%; position: absolute; top: -5vw; left:" + obj_left + "%; width: 5vw; height: 5vw; animation-name:" + anim_name + "; animation-delay:" + delay + "s; animation-duration:" + rand + "s; animation-timing-function:ease-out; animation-direction:normal; animation-iteration-count: infinite;";
                    obj_left += 6.3;
                }
                obj_left = 0;
            }
            set_flag[0] = 1;
        }
    }
}
