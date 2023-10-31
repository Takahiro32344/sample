/*  メールアドレス入力欄バリデーション */

var input_flg = 0;
var send = 0;
let click = 0;

$('.mail').on('focusin', function() {
    input_flg = 1;
}).on('focusout', function() {
    input_flg = 0;
});

$('.btn-send').on('click', function() {
    if (send == 1) {
        $('.copy-mail').val($('.mail').val());
        if (click == 0) {
            $('.send-mail-form').submit();
            click = 1;
        }
    } else {
        if ($('.mail').val().length == 0)
            $('p').text("未入力");
    }
});

var type_miss = 0;
setInterval(function() {
    if (input_flg == 1) {
        if ($('.mail').val().length == 0) {
            type_miss = 1;
            $('p').text("");
        } else if (!$('.mail').val().match(/^[A-Za-z0-9.]+[\w-]+@[\w\.-]+\.\w{2,}$/)) {
            type_miss = 1;
            $('p').text("入力形式が正しくありません");
        } else {
            type_miss = 0;
            $('p').text("");
        }

        if (type_miss == 0)
            send = 1;
        else
            send = 0;
    }
}, 2);