/*  ワンタイムパスワード  */

let login_flg = 0;
let limit = 0;

let click = 0;
$('button').on('click', function() {
    if (login_flg == 1) {
        if (click == 0) {
            click = 1;
            $.post('../limit_time_password.php', {id_name: id_name, input_code: $('input').val()}).done(function(res) {
                if (res.error == 0)
                    $('.login').submit();
                else
                    $('.alert').text("コードが正しくありません");

                click = 0;
            });
        }
    } else {
        if (limit == 0) {
            if ($('input').val().length != 8)
                $('.alert').text("8桁入力してください");
            else
                $('.alert').text("無効な文字が含まれております");
        }
    }
});

let input_flg = 0;
$('input').on('focusin', function() {
    input_flg = 1;
}).on('focusout', function() {
    input_flg = 0;
    $('.alert').text("");
});


let minutes = 5;
let second = 0;
let second_counter = 10;

setInterval(function() {
    if (limit == 0) {
        if (second_counter > 0)
            second_counter--;
        else
            second_counter = 10;

            if (minutes >= 0) {
            if (second > 0) {
                if (second_counter == 0)
                    second--;
            } else {
                second = 59;
                minutes--;
            }
        }
        if (minutes == 0 && second == 0)
            limit = 1;
        $('.timer').text(minutes + "分" + second + "秒以内にログインしてください");

        if (input_flg == 1) {
            if ($('input').val().length != 8) {
                $('.alert').text("8桁入力してください");
                login_flg = 0;
            } else if ($('input').val().match(/^[0-9]+$/) && $('input').val().length == 8) {
                $('.alert').text("");
                login_flg = 1;
            } else {
                $('.alert').text("無効な文字が含まれております");
                login_flg = 0;
            }
        }
    } else {
        login_flg = 0;
        $.post('../limit_time_password.php', {id_name: id_name, time_over: 1}).done(function() {
            $('.timer').text("制限時間が過ぎました").css('color', 'red');
        });
    }
}, 100);


