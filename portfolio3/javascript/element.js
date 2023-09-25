/*      エレメント生成        */

// 背景
for (var i = 1; i <= 4; i++) {
    var new_image = document.createElement('img');
    new_image.setAttribute('id', 'background_' + i);
    new_image.innerHTML = '<img id="background_' + i + '">';
    if (i != 1)
        new_image.style = "opacity: 0;";
    parent_image.appendChild(new_image);
}

// 桜・もみじ
var id = 1;
if (date.getMonth() + 1 == 4 || (date.getMonth() + 1 >= 9 && date.getMonth() + 1 <= 11)) {
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 16; j++) {
            var new_div = document.createElement('div');
            new_div.setAttribute('id', 'petal_' + id++);
            parent_image.appendChild(new_div);
        }
    }
}

// 雨
id = 1;
if (date.getMonth() + 1 == 6) {
    for (var i = 0; i < 5 * 2; i++) {
        for (var j = 0; j < 48 + 47; j++) {
            var new_div = document.createElement('div');
            new_div.setAttribute('id', 'rain_' + id++);
            parent_image.appendChild(new_div);
        }
    }
}

// 雪
id = 1;
if (date.getMonth() + 1 == 12 || date.getMonth() + 1 == 1 || date.getMonth() + 1 == 2) {
    for (var i = 0; i < 10 * 2; i++) {
        for (var j = 0; j < 48 + 47; j++) {
            var new_div = document.createElement('div');
            new_div.setAttribute('id', 'snow_' + id++);
            parent_image.appendChild(new_div);
        }
    }
}

// 誕生日占い
// 年
for (var i = 1960; i <= date.getFullYear(); i++) {
    var new_option = document.createElement('option');
    new_option.innerHTML = '<option value="' + i + '">' + i + '</option>';
    parent_option[0].appendChild(new_option);
}
// 月
for (var i = 1; i <= 12; i++) {
    var new_option = document.createElement('option');
    new_option.innerHTML = '<option value="' + i + '">' + i + '</option>';
    parent_option[1].appendChild(new_option);
}
// 日
for (var i = 1; i <= 31; i++) {
    var new_option = document.createElement('option');
    new_option.innerHTML = '<option value="' + i + '">' + i + '</option>';
    parent_option[2].appendChild(new_option);
}

