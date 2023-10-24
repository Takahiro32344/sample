var font_size = "";

var validate = new Array(2);
let setting = 0;

for (i = 0; i < 2; i++)
    validate[i] = 0;

var input_password_flg = 0;

const param = new URLSearchParams(location.search);

$('.password').on('focusin', function() {
    input_password_flg = 1;
}).on('focusout', function() {
    input_password_flg = 0;
});

$('.password-retype').on('focusin', function() {
    input_password_flg = 1;
}).on('focusout', function() {
    input_password_flg = 0;
});

let click = 0;
$('.btn-setting').on('click', function() {
    if (setting == 1) {
        setting = 0;
        input_password_flg = 0;
        if (click == 0) {
            click = 1;
            $.post('../update_password.php', {login_user_id_name: param.get('id_name'), new_password: $('.password').val()}).done(function(res) {
                $('.alert-password').text("パスワードを設定しました");
                $('input').val("");
                click = 0;
            });
        }
    } else {
        if ($('.password').val().length == 0) {
            $('.alert-password').text("未入力").css({'margin-bottom':'0', 'font-size': font_size});
        } else if (!($('.password').val().length >= 8 && $('.password').val().length <= 30)) {
            $('.alert-password').text("制限字数範囲外です").css({'margin-bottom':'0', 'font-size': font_size});
        } else if (!$('.password').val().match(/^[a-zA-Z0-9\d!?_+*'"`#$%&\-^\\@;:,./=~|[\](){}<>]+$/)) {
            $('.alert-password').text("無効の文字が含まれております").css({'margin-bottom':'0', 'font-size': font_size});
        }

        if ($('.password-retype').val().length == 0) {
            $('.alert-password-retype').text("未入力").css({'margin-bottom':'0', 'font-size': font_size});
        } else if (!($('.password-retype').val().length >= 8 && $('.password-retype').val().length <= 30)) {
            $('.alert-password-retype').text("制限字数範囲外です").css({'margin-bottom':'0', 'font-size': font_size});
        } else if (!$('.password-retype').val().match(/^[a-zA-Z0-9\d!?_+*'"`#$%&\-^\\@;:,./=~|[\](){}<>]+$/)) {
            $('.alert-password-retype').text("無効の文字が含まれております").css({'margin-bottom':'0', 'font-size': font_size});
        }
    }
});

setInterval(function() {
    if (window.matchMedia('(min-width: 1100px)').matches) {
        font_size = "20px";
        $('p').css('font-size', font_size);
    } else if (window.matchMedia('(min-width: 769px)').matches) {
        font_size = "3vw";
        $('p').css('font-size', font_size);
    } else {
        font_size = "3vw";
        $('p').css('font-size', font_size);
    }

    if (input_password_flg == 1) {
        if ($('.password').val().length == 0) {
            validate[0] = 0;
            $('.alert-password').text("");
        } else if (!($('.password').val().length >= 8 && $('.password').val().length <= 30)) {
            validate[0] = 0;
            $('.alert-password').text("制限字数範囲外です").css({'margin-bottom':'0', 'font-size': font_size});
        } else {
            if (!$('.password').val().match(/^[a-zA-Z0-9\d!?_+*'"`#$%&\-^\\@;:,./=~|[\](){}<>]+$/)) {
                validate[0] = 0;
                $('.alert-password').text("無効の文字が含まれております").css({'margin-bottom':'0', 'font-size': font_size});
            } else {
                validate[0] = 1;
                $('.alert-password').text("");
            }
        }

        if ($('.password-retype').val().length == 0) {
            validate[1] = 0;
            $('.alert-password-retype').text("");
        } else if (!($('.password-retype').val().length >= 8 && $('.password-retype').val().length <= 30)) {
            validate[1] = 0;
            $('.alert-password-retype').text("制限字数範囲外です").css({'margin-bottom':'0', 'font-size': font_size});
        } else {
            if (!$('.password-retype').val().match(/^[a-zA-Z0-9\d!?_+*'"`#$%&\-^\\@;:,./=~|[\](){}<>]+$/)) {
                validate[1] = 0;
                $('.alert-password-retype').text("無効の文字が含まれております").css({'margin-bottom':'0', 'font-size': font_size});
            } else {
                validate[1] = 1;
                $('.alert-password-retype').text("");
            }
        }

        if (validate[0] == 1 && validate[1] == 1) {
            if ($('.password').val() == $('.password-retype').val()) {
                setting = 1;
                $('.alert-password').text("");
            } else {
                setting = 0;
                $('.alert-password').text("確認用と不一致").css({'margin-bottom':'0', 'font-size': font_size});
            }
        } else {
            setting = 0;
            validate[0] = 0;
            validate[1] = 0;
        }
    }
}, 2);

