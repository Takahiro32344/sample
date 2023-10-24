/*     雨（PC）     */

function fall_rain_PC() {
    if (date.getMonth() + 1 == 6) {
        set_flag[1] = 0;
        set_flag[2] = 0;
        if (set_flag[0] == 0) {
            id = 1;
            obj_left = 1;
            delay = 0.0;
            for (var i = 0; i < 5; i++) {
                for (var j = 0; j < 48; j++) {
                    document.getElementById('rain_' + id++).style = "position: absolute; top: -15px; left:" + obj_left + "%; width: 1.5px; height: 15px; background-color: rgba(200,200,200,0.3); animation-name: fall_rain; animation-delay:" + delay + "s; animation-duration: 1s; animation-timing-function:ease-out; animation-direction:normal; animation-iteration-count: infinite;";
                    obj_left += 2.08;
                }
                delay += 0.2;
                obj_left = 1;
            }
            obj_left = 2.08;
            delay = 0.1;
            for (var i = 0; i < 5; i++) {
                for (var j = 0; j < 47; j++) {
                    document.getElementById('rain_' + id++).style = "position: absolute; top: -15px; left:" + obj_left + "%; width: 1.5px; height: 15px; background-color: rgba(200,200,200,0.3); animation-name: fall_rain; animation-delay:" + delay + "s; animation-duration: 1s; animation-timing-function:ease-out; animation-direction:normal; animation-iteration-count: infinite;";
                    obj_left += 2.08;
                }
                delay += 0.2;
                obj_left = 2.08;
            }
            set_flag[0] = 1;
        }
    }
}