/*  アカウント登録バリデーション  */

// 画面サイズチェック
if (window.matchMedia('(min-width: 1100px)').matches) {
    var font_size = "20px";
    var margin_top = "10px";
} else if (window.matchMedia('(min-width: 769px)').matches) {
    var font_size = "2vw";
    var margin_top = "1.5vw";
} else {
    var font_size = "5vw";
    var margin_top = "2.5vw";
}

let regist = false;
let none_select_year = 0;
let none_select_month = 0;
let none_select_day = 0;
let empty_name = 0;
let empty_mail = 0;
let empty_password = 0;
let empty_password_retype = 0;

let check_counter = new Array(3);
for (var i = 0; i < 3; i++)
    check_counter[i] = 0;

let check_select_Phone = new Array(3);
for (var i = 0; i < 3; i++)
    check_select_Phone[i] = false;

let check_select_PC = new Array(3);
for (var i = 0; i < 3; i++)
    check_select_PC[i] = false;

let check = new Array(6);
for (var i = 0; i < 6; i++)
    check[i] = false;

let input_flg = 0;

let check_id = 0;
let check_mail = 0;

let click = 0;

let registed_id_name = 0;
let registed_mail = 0;

$('.btn-regist').on('click', function () {
    if (regist == true) {
        regist = false;
        input_flg = 0;
        if ($(window).width() >= 768) {
            birth_year = '.birth-year-PC';
            birth_month = '.birth-month-PC';
            birth_day = '.birth-day-PC';
        } else {
            birth_year = '.birth-year-Phone';
            birth_month = '.birth-month-Phone';
            birth_day = '.birth-day-Phone';
        }
        if (click == 0) {
            click = 1;
            $.post('../check_id_name_regist.php', {id_name: $('.id-name').val()}).done(function(res) {
                if (res.registed_id_name != 1) {
                    registed_id_name = 0;
                    check_id = 1;
                } else {
                    registed_id_name = 1;
                    check_id = 0;
                    check_mail = 0;
                    $('.alert-id').text("登録されている為使用できません").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
                }
                $.post('../check_email_regist.php', {mail: $('.mail').val()}).done(function(res) {
                    if (res.registed_mail != 1) {
                        registed_mail = 0;
                        check_mail = 1;
                    } else {
                        registed_mail = 1;
                        check_id = 0;
                        check_mail = 0;
                        $('.alert-mail').text("登録されている為使用できません").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
                    }
                    if (check_id == 1 && check_mail == 1) {
                        check_id = 0;
                        check_mail = 0;
                        $.post('../regist_account.php', {regist:1, birth_year: $(birth_year).val(), birth_month: $(birth_month).val(), birth_day: $(birth_day).val(), gender: $('.gender').val(), id_name: $('.id-name').val(), name: $('.name').val(), mail: $('.mail').val(), password: $('.password').val()}).done(function() {
                            location.href = "../login.php";
                        });
                    } else {
                        check_id = 0;
                        check_mail = 0;
                    }
                });
                click = 0;
            });
        }
    } else {
        /* スマホ 誕生日 */
        if ($('.birth-year-Phone').val() == "未選択") {
            $('.birth-year-Phone').css({'color':'red', 'font-size': font_size});
        } else {
            $('.birth-year-Phone').css({'color':'black', 'font-size': font_size});
        }

        if ($('.birth-month-Phone').val() == "未選択") {
            $('.birth-month-Phone').css({'color':'red', 'font-size': font_size});
        } else {
            $('.birth-month-Phone').css({'color':'black', 'font-size': font_size});
        }

        if ($('.birth-day-Phone').val() == "未選択") {
            $('.birth-day-Phone').css({'color':'red', 'font-size': font_size});
        } else {
            $('.birth-day-Phone').css({'color':'black', 'font-size': font_size});
        }

        /* PC 誕生日 */
        if ($('.birth-year-PC').val() == "未選択") {
            $('.birth-year-PC').css({'color':'red', 'font-size': font_size});
        } else {
            $('.birth-year-PC').css({'color':'black', 'font-size': font_size});
        }

        if ($('.birth-month-PC').val() == "未選択") {
            $('.birth-month-PC').css({'color':'red', 'font-size': font_size});
        } else {
            $('.birth-month-PC').css({'color':'black', 'font-size': font_size});
        }

        if ($('.birth-day-PC').val() == "未選択") {
            $('.birth-day-PC').css({'color':'red', 'font-size': font_size});
        } else {
            $('.birth-day-PC').css({'color':'black', 'font-size': font_size});
        }

        /*  性別  */
        if ($('.gender').val() == "未選択") {
            $('.gender').css({'color':'red', 'font-size': font_size});
        } else {
            $('.gender').css({'color':'black', 'font-size': font_size});
        }
        /*  氏名  */
        if ($('.name').val().length == 0) {
            $('.alert-name').text("未入力").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
        } else if ($('.name').val().length > 15) {
            $('.alert-name').text("制限字数を超えております").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
        } else {
            $('.alert-name').text("").css("margin-top", margin_top);
        }

        /*  ID名  */
        if ($('.id-name').val().length == 0) {
            $('.alert-id').text("未入力").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
        } else if (!$('.id-name').val().match(/^[a-zA-Z0-9\d!?_+*'"`#$%&\-^\\@;:,./=~|[\](){}<>]+$/)) {
            if ($('.id-name').val().length > 50) {
                $('.alert-id').text("制限字数を超えております").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
            } else {
                $('.alert-id').text("無効の文字が含まれております").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
            }
        } else {
            if ($('.id-name').val().length > 50) {
                $('.alert-id').text("制限字数を超えております").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
            } else if (registed_id_name == 1) {
                $('.alert-id').text("登録されている為使用できません").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
            } else {
                $('.alert-id').text("").css("margin-top", margin_top);
            }
        }

        /*  メールアドレス  */
        if ($('.mail').val().length == 0) {
            $('.alert-mail').text("未入力").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
        } else if (!($('.mail').val().match(/^[A-Za-z0-9.]+[\w-]+@[\w\.-]+\.\w{2,}$/))) {
            if ($('.mail').val().length > 50) {
                $('.alert-mail').text("制限字数を超えております").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
            } else {
                $('.alert-mail').text("入力形式が正しくありません").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
            }
        } else {
            if ($('.mail').val().length > 50) {
                $('.alert-mail').text("制限字数を超えております").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
            } else if (registed_mail == 1) {
                $('.alert-mail').text("登録されている為使用できません").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
            } else {
                $('.alert-mail').text("").css("margin-top", margin_top);
            }
        }

        /*  パスワード  */
        if ($('.password').val().length == 0) {
            $('.alert-password').text("未入力").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
            check[4] = false;
        } else if (!$('.password').val().match(/^[a-zA-Z0-9\d!?_+*'"`#$%&\-^\\@;:,./=~|[\](){}<>]+$/)) {
            if (!($('.password').val().length >= 8 && $('.password').val().length <= 30)) {
                $('.alert-password').text("字数が制限範囲外です").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
            } else {
                $('.alert-password').text("無効の文字が含まれております").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
            }
        } else {
            if (!($('.password').val().length >= 8 && $('.password').val().length <= 30)) {
                $('.alert-password').text("字数が制限範囲外です").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
            } else if ($('.password').val() != $('.password-retype').val()) {
                $('.alert-password').text("確認用と一致しておりません").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
            } else {
                $('.alert-password').text("").css("margin-top", margin_top);
            }
        }

        /*  パスワード(確認用) */
        if ($('.password-retype').val().length == 0) {
            $('.alert-password-retype').text("未入力").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
        } else if (!$('.password-retype').val().match(/^[a-zA-Z0-9\d!?_+*'"`#$%&\-^\\@;:,./=~|[\](){}<>]+$/)) {
            if (!($('.password-retype').val().length >= 8 && $('.password-retype').val().length <= 30)) {
                $('.alert-password-retype').text("字数が制限範囲外です").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
            } else {
                $('.alert-password-retype').text("無効の文字が含まれております").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
            }
        } else {
            if (!($('.password-retype').val().length >= 8 && $('.password-retype').val().length <= 30)) {
                $('.alert-password-retype').text("字数が制限範囲外です").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
            } else {
                $('.alert-password-retype').text("").css("margin-top", margin_top);
            }
        }
    }
});

$('select').on('focusin', function() {
    input_flg = 1;
}).on('focusout', function() {
    input_flg = 0;
});

$('input').on('focusin', function() {
    input_flg = 1;
}).on('focusout', function() {
    input_flg = 0;
});

setInterval(function () {
    // 画面サイズチェック
    if (window.matchMedia('(min-width: 1100px)').matches) {
        var font_size = "20px";
        var margin_top = "10px";
        $('p').css('font-size', font_size);
        $('select').css('font-size', font_size);
    } else if (window.matchMedia('(min-width: 769px)').matches) {
        var font_size = "2vw";
        var margin_top = "1.5vw";
        $('p').css('font-size', font_size);
        $('select').css('font-size', font_size);
    } else {
        var font_size = "5vw";
        var margin_top = "2.5vw";
        $('p').css('font-size', font_size);
        $('select').css('font-size', font_size);
    }

    if (input_flg == 1) {
        /* スマホ 誕生日 */
        if ($('.birth-year-Phone').val() == "未選択") {
            $('.birth-year-Phone').css({'color':'red', 'font-size': font_size});
            check_select_Phone[0] = false;
        } else {
            $('.birth-year-Phone').css({'color':'black', 'font-size': font_size});
            check_select_Phone[0] = true;
        }

        if ($('.birth-month-Phone').val() == "未選択") {
            $('.birth-month-Phone').css({'color':'red', 'font-size': font_size});
            check_select_Phone[1] = false;
        } else {
            $('.birth-month-Phone').css({'color':'black', 'font-size': font_size});
            check_select_Phone[1] = true;
        }

        if ($('.birth-day-Phone').val() == "未選択") {
            $('.birth-day-Phone').css({'color':'red', 'font-size': font_size});
            check_select_Phone[2] = false;
        } else {
            $('.birth-day-Phone').css({'color':'black', 'font-size': font_size});
            check_select_Phone[2] = true;
        }

        /* PC 誕生日 */
        if ($('.birth-year-PC').val() == "未選択") {
            $('.birth-year-PC').css({'color':'red', 'font-size': font_size});
            check_select_PC[0] = false;
        } else {
            $('.birth-year-PC').css({'color':'black', 'font-size': font_size});
            check_select_PC[0] = true;
        }

        if ($('.birth-month-PC').val() == "未選択") {
            $('.birth-month-PC').css({'color':'red', 'font-size': font_size});
            check_select_PC[1] = false;
        } else {
            $('.birth-month-PC').css({'color':'black', 'font-size': font_size});
            check_select_PC[1] = true;
        }

        if ($('.birth-day-PC').val() == "未選択") {
            $('.birth-day-PC').css({'color':'red', 'font-size': font_size});
            check_select_PC[2] = false;
        } else {
            $('.birth-day-PC').css({'color':'black', 'font-size': font_size});
            check_select_PC[2] = true;
        }

        /*  性別  */
        if ($('.gender').val() == "未選択") {
            $('.gender').css({'color':'red', 'font-size': font_size});
            check[0] = false;
        } else {
            $('.gender').css({'color':'black', 'font-size': font_size});
            check[0] = true;
        }
        /*  氏名  */
        if ($('.name').val().length == 0) {
            $('.alert-name').text("未入力").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
            check[1] = false;
        } else if ($('.name').val().length > 15) {
            $('.alert-name').text("制限字数を超えております").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
            check[1] = false;
        } else {
            $('.alert-name').text("").css("margin-top", margin_top);
            check[1] = true;
        }

        /*  ID名  */
        if ($('.id-name').val().length == 0) {
            $('.alert-id').text("未入力").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
            check[2] = false;
        } else if (!$('.id-name').val().match(/^[a-zA-Z0-9\d!?_+*'"`#$%&\-^\\@;:,./=~|[\](){}<>]+$/)) {
            if ($('.id-name').val().length > 50) {
                $('.alert-id').text("制限字数を超えております").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
                check[2] = false;
            } else {
                $('.alert-id').text("無効の文字が含まれております").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
                check[2] = false;
            }
        } else {
            if ($('.id-name').val().length > 50) {
                $('.alert-id').text("制限字数を超えております").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
                check[2] = false;
            } else {
                $('.alert-id').text("").css("margin-top", margin_top);
                check[2] = true;
            }
        }

        /*  メールアドレス  */
        if ($('.mail').val().length == 0) {
            $('.alert-mail').text("未入力").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
            check[3] = false;
        } else if (!($('.mail').val().match(/^[A-Za-z0-9.]+[\w-]+@[\w\.-]+\.\w{2,}$/))) {
            if ($('.mail').val().length > 50) {
                $('.alert-mail').text("制限字数を超えております").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
                check[3] = false;
            } else {
                $('.alert-mail').text("入力形式が正しくありません").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
                check[3] = false;
            }
        } else {
            if ($('.mail').val().length > 50) {
                $('.alert-mail').text("制限字数を超えております").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
                check[3] = false;
            } else {
                $('.alert-mail').text("").css("margin-top", margin_top);
                check[3] = true;
            }
        }

        /*  パスワード  */
        if ($('.password').val().length == 0) {
            $('.alert-password').text("未入力").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
            check[4] = false;
        } else if (!$('.password').val().match(/^[a-zA-Z0-9\d!?_+*'"`#$%&\-^\\@;:,./=~|[\](){}<>]+$/)) {
            if (!($('.password').val().length >= 8 && $('.password').val().length <= 30)) {
                $('.alert-password').text("字数が制限範囲外です").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
                check[4] = false;
            } else {
                $('.alert-password').text("無効の文字が含まれております").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
                check[4] = false;
            }
        } else {
            if (!($('.password').val().length >= 8 && $('.password').val().length <= 30)) {
                $('.alert-password').text("字数が制限範囲外です").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
                check[4] = false;
            } else if ($('.password').val() != $('.password-retype').val()) {
                $('.alert-password').text("確認用と一致しておりません").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
                check[4] = false;
            } else {
                $('.alert-password').text("").css("margin-top", margin_top);
                check[4] = true;
            }
        }

        /*  パスワード(確認用) */
        if ($('.password-retype').val().length == 0) {
            $('.alert-password-retype').text("未入力").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
            check[5] = false;
        } else if (!$('.password-retype').val().match(/^[a-zA-Z0-9\d!?_+*'"`#$%&\-^\\@;:,./=~|[\](){}<>]+$/)) {
            if (!($('.password-retype').val().length >= 8 && $('.password-retype').val().length <= 30)) {
                $('.alert-password-retype').text("字数が制限範囲外です").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
                check[5] = false;
            } else {
                $('.alert-password-retype').text("無効の文字が含まれております").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
                check[5] = false;
            }
        } else {
            if (!($('.password-retype').val().length >= 8 && $('.password-retype').val().length <= 30)) {
                $('.alert-password-retype').text("字数が制限範囲外です").css({'color':'red', 'font-size': font_size , 'margin-top':'0', 'margin-bottom':'0'});
                check[5] = false;
            } else {
                $('.alert-password-retype').text("").css("margin-top", margin_top);
                check[5] = true;
            }
        }

        if (window.matchMedia('(min-width: 769px)').matches) {
            if (check_select_PC[0] == true && check_select_PC[1] == true && check_select_PC[2] == true &&
                check[0] == true && check[1] == true && check[2] == true && check[3] == true && check[4] == true && check[5] == true)
                regist = true;
            else
                regist = false;
        } else {
            if (check_select_Phone[0] == true && check_select_Phone[1] == true && check_select_Phone[2] == true &&
                check[0] == true && check[1] == true && check[2] == true && check[3] == true && check[4] == true && check[5] == true)
                regist = true;
            else
                regist = false;
        }
    }
}, 2);
