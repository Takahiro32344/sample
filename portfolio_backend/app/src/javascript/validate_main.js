/*  メインページ用バリデーション  */

// チャット
let type_miss_chat = 0;
function type_check_chat() {
    if ($('.chat-text').val().length == 0)
        type_miss_chat = 1;
    else if ($('.chat-text').val().length > 1000) {
        $('.chat-text').css('color', 'red');
        type_miss_chat = 1;
    } else {
        $('.chat-text').css('color', 'black');
        type_miss_chat = 0;
    }

    if (type_miss_chat == 0)
        chat_send_flg = 1;
    else
        chat_send_flg = 0;
}

// 氏名変更フォーム
function type_miss_name_check_PC() {
    if ($('.change-name-PC').val().length == 0) {
        $('.alert-name-PC').text("未入力").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
    } else if ($('.change-name-PC').val().length > 15) {
        $('.alert-name-PC').text("制限字数を超えております").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
    }
}

function type_miss_name_check_Phone() {
    if ($('.change-name-Phone').val().length == 0) {
        $('.alert-name-Phone').text("未入力").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
    } else if ($('.change-name-Phone').val().length > 15) {
        $('.alert-name-Phone').text("制限字数を超えております").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
    }
}

var type_miss_name_PC = 0;
function type_name_realtime_PC() {
    if ($('.change-name-PC').val().length == 0) {
        type_miss_name_PC = 1;
        $('.alert-name-PC').text("未入力").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
    } else if ($('.change-name-PC').val().length > 15) {
        type_miss_name_PC = 1;
        $('.alert-name-PC').text("制限字数を超えております").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
    } else {
        type_miss_name_PC = 0;
        $('.alert-name-PC').text("").css({"font-size":"0"});
    }

    if (type_miss_name_PC == 0)
        new_name_update_flg_PC = 1;
    else
        new_name_update_flg_PC = 0;
}

var type_miss_name_Phone = 0;
function type_name_realtime_Phone() {
    if ($('.change-name-Phone').val().length == 0) {
        type_miss_name_Phone = 1;
        $('.alert-name-Phone').text("未入力").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
    } else if ($('.change-name-Phone').val().length > 15) {
        type_miss_name_Phone = 1;
        $('.alert-name-Phone').text("制限字数を超えております").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
    } else {
        type_miss_name_Phone = 0;
        $('.alert-name-Phone').text("").css({"font-size":"0"});
    }

    if (type_miss_name_Phone == 0)
        new_name_update_flg_Phone = 1;
    else
        new_name_update_flg_Phone = 0;
}

// メールアドレス

let registed_mail_PC = 0;
function type_miss_mail_check_PC() {
    if ($('.change-mail-PC').val().length == 0)
        $('.alert-mail-PC').text("未入力").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
    else if (!($('.change-mail-PC').val().match(/^[A-Za-z0-9.]+[\w-]+@[\w\.-]+\.\w{2,}$/))) {
        if ($('.change-mail-PC').val().length > 50)
            $('.alert-mail-PC').text("制限字数を超えております").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
        else
            $('.alert-mail-PC').text("入力形式が正しくありません").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
    } else {
        if ($('.change-mail-PC').val().length > 50)
            $('.alert-mail-PC').text("制限字数を超えております").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
        else {
            $.post('../check_email_regist.php', {mail: $('.change-mail-PC').val()}).done(function(res) {
                if (registed_mail_PC == 1)
                    $('.alert-mail-PC').text("登録されている為使用できません").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
                else
                    $('.alert-mail-PC').text("").css("font-size", "0");
            });
        }
    }
}

let registed_mail_Phone= 0;
function type_miss_mail_check_Phone() {
    if ($('.change-mail-Phone').val().length == 0)
        $('.alert-mail-Phone').text("未入力").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
    else if (!($('.change-mail-Phone').val().match(/^[A-Za-z0-9.]+[\w-]+@[\w\.-]+\.\w{2,}$/))) {
        if ($('.change-mail-Phone').val().length > 50)
            $('.alert-mail-Phone').text("制限字数を超えております").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
        else
            $('.alert-mail-Phone').text("入力形式が正しくありません").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
    } else {
        if ($('.change-mail-Phone').val().length > 50)
            $('.alert-mail-Phone').text("制限字数を超えております").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
        else {
            $.post('../check_email_regist.php', {mail: $('.change-mail-Phone').val()}).done(function(res) {
                if (registed_mail_Phone == 1)
                    $('.alert-mail-Phone').text("登録されている為使用できません").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
                else
                    $('.alert-mail-Phone').text("").css("font-size", "0");
            });
        }
    }
}

var type_miss_mail_flg_PC = 0;
function type_mail_realtime_PC() {
    // PC・タブレット
    if ($('.change-mail-PC').val().length == 0) {
        $('.alert-mail-PC').text("未入力").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
        type_miss_mail_flg_PC = 1;
    } else if (!($('.change-mail-PC').val().match(/^[A-Za-z0-9.]+[\w-]+@[\w\.-]+\.\w{2,}$/))) {
        if ($('.change-mail-PC').val().length > 50) {
            $('.alert-mail-PC').text("制限字数を超えております").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
            type_miss_mail_flg_PC = 1;
        } else {
            $('.alert-mail-PC').text("入力形式が正しくありません").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
            type_miss_mail_flg_PC = 1;
        }
    } else {
        if ($('.change-mail-PC').val().length > 50) {
            $('.alert-mail-PC').text("制限字数を超えております").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
            type_miss_mail_flg_PC = 1;
        } else {
            $('.alert-mail-PC').text("").css("font-size", "0");
            type_miss_mail_flg_PC = 0;
        }
    }

    if (type_miss_mail_flg_PC == 0)
        new_mail_update_flg_PC = 1;
    else
        new_mail_update_flg_PC = 0;
}

var type_miss_mail_flg_Phone = 0;
function type_mail_realtime_Phone() {
    // スマホ
    if ($('.change-mail-Phone').val().length == 0) {
        $('.alert-mail-Phone').text("未入力").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
        type_miss_mail_flg_Phone = 1;
    } else if (!($('.change-mail-Phone').val().match(/^[A-Za-z0-9.]+[\w-]+@[\w\.-]+\.\w{2,}$/))) {
        if ($('.change-mail-Phone').val().length > 50) {
            $('.alert-mail-Phone').text("制限字数を超えております").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
            type_miss_mail_flg_Phone = 1;
        } else {
            $('.alert-mail-Phone').text("入力形式が正しくありません").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
            type_miss_mail_flg_Phone = 1;
        }
    } else {
        if ($('.change-mail-Phone').val().length > 50) {
            $('.alert-mail-Phone').text("制限字数を超えております").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
            type_miss_mail_flg_Phone = 1;
        } else {
            $('.alert-mail-Phone').text("").css("font-size", "0");
            type_miss_mail_flg_Phone = 0;
        }
    }

    if (type_miss_mail_flg_Phone == 0)
        new_mail_update_flg_Phone = 1;
    else
        new_mail_update_flg_Phone = 0;
}

// 電話番号
function type_miss_tel_check_PC() {
    if ($('.change-tel-PC').val().length == 0)
        $('.alert-tel-PC').text("未入力").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
    else if (!($('.change-tel-PC').val().match(/^[0]+[57-9]+[0]+[0-9]{8}$/))) {
        if ($('.change-tel-PC').val().length > 11)
            $('.alert-tel-PC').text("制限字数を超えております").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
        else
            $('.alert-tel-PC').text("入力形式が正しくありません").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
    } else {
        if ($('.change-tel-PC').val().length > 11)
            $('.alert-tel-PC').text("制限字数を超えております").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
        else {
            $.post('../check_tel_regist.php', {tel: $('.change-tel-PC').val()}).done(function(res) {
                if (res.registed_tel == 1)
                    $('.alert-tel-PC').text("登録されている為使用できません").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
                else
                    $('.alert-tel-PC').text("").css("font-size", "0");
            });
        }
    }
}

function type_miss_tel_check_Phone() {
    if ($('.change-tel-Phone').val().length == 0)
        $('.alert-tel-Phone').text("未入力").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
    else if (!($('.change-tel-Phone').val().match(/^[0]+[57-9]+[0]+[0-9]{8}$/))) {
        if ($('.change-tel-Phone').val().length > 11)
            $('.alert-tel-Phone').text("制限字数を超えております").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
        else
            $('.alert-tel-Phone').text("入力形式が正しくありません").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
    } else {
        if ($('.change-tel-Phone').val().length > 11)
            $('.alert-tel-Phone').text("制限字数を超えております").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
        else {
            $.post('../check_tel_regist.php', {tel: $('.change-tel-Phone').val()}).done(function(res) {
                if (res.registed_tel == 1)
                    $('.alert-tel-Phone').text("登録されている為使用できません").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
                else
                    $('.alert-tel-Phone').text("").css("font-size", "0");
            });
        }
    }
}

var type_miss_tel_PC = 0;
function type_tel_realtime_PC() {
    // PC・タブレット
    if ($('.change-tel-PC').val().length == 0) {
        $('.alert-tel-PC').text("未入力").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
        type_miss_tel_PC = 1;
    } else if (!($('.change-tel-PC').val().match(/^[0]+[57-9]+[0]+[0-9]{8}$/))) {
        if ($('.change-tel-PC').val().length > 11) {
            $('.alert-tel-PC').text("制限字数を超えております").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
            type_miss_tel_PC = 1;
        } else {
            $('.alert-tel-PC').text("入力形式が正しくありません").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
            type_miss_tel_PC = 1;
        }
    } else {
        if ($('.change-tel-PC').val().length > 11) {
            $('.alert-tel-PC').text("制限字数を超えております").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
            type_miss_tel_PC = 1;
        } else {
            $('.alert-tel-PC').text("").css("font-size", "0");
            type_miss_tel_PC = 0;
        }
    }

    if (type_miss_tel_PC == 0)
        new_tel_update_flg_PC = 1;
    else
        new_tel_update_flg_PC = 0;
}

var type_miss_tel_Phone = 0;
function type_tel_realtime_Phone() {
    if ($('.change-tel-Phone').val().length == 0) {
        $('.alert-tel-Phone').text("未入力").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
        type_miss_tel_Phone = 1;
    } else if (!($('.change-tel-Phone').val().match(/^[0]+[57-9]+[0]+[0-9]{8}$/))) {
        if ($('.change-tel-Phone').val().length > 11) {
            $('.alert-tel-Phone').text("制限字数を超えております").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
            type_miss_tel_Phone = 1;
        } else {
            $('.alert-tel-Phone').text("入力形式が正しくありません").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
            type_miss_tel_Phone = 1;
        }
    } else {
        if ($('.change-tel-Phone').val().length > 11) {
            $('.alert-tel-Phone').text("制限字数を超えております").css({'color':'red', 'font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0'});
            type_miss_tel_Phone = 1;
        } else {
            $('.alert-tel-Phone').text("").css("font-size", "0");
            type_miss_tel_Phone = 0;
        }
    }

    if (type_miss_tel_Phone == 0)
        new_tel_update_flg_Phone = 1;
    else
        new_tel_update_flg_Phone = 0;
}
// 居住地
function type_miss_address_check_PC() {
    if ($('.change-address-2-PC').val().length > 10) {
        $('.alert-address-PC').text("制限字数を超えております").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
    }
}

function type_miss_address_check_Phone() {
    if ($('.change-address-2-Phone').val().length > 10) {
        $('.alert-address-Phone').text("制限字数を超えております").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
    }
}
var type_miss_address_PC = 0;
function type_address_realtime_PC() {
    if ($('.change-address-2-PC').val().length > 10) {
        type_miss_address_PC = 1;
        $('.alert-address-PC').text("制限字数を超えております").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
    } else {
        type_miss_address_PC = 0;
        $('.alert-address-PC').text("").css({"font-size":"0"});
    }

    if (type_miss_address_PC == 0)
        new_address_update_flg_PC = 1;
    else
        new_address_update_flg_PC = 0;
}

var type_miss_address_Phone = 0;
function type_address_realtime_Phone() {
    if ($('.change-address-2-Phone').val().length > 10) {
        type_miss_address_Phone = 1;
        $('.alert-address-Phone').text("制限字数を超えております").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
    } else {
        type_miss_address_Phone = 0;
        $('.alert-address-Phone').text("").css({"font-size":"0"});
    }

    if (type_miss_address_Phone == 0)
        new_address_update_flg_Phone = 1;
    else
        new_address_update_flg_Phone = 0;
}
// 質問の答え
function type_check_answer_PC() {
    // PC・タブレット
    if ($('.answer-PC').val().length == 0) {
        $('.alert-answer-PC').text("未入力").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
    } else if ($('.answer-PC').val().length > 30) {
        $('.alert-answer-PC').text("制限字数を超えております").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
    } else {
        $('.alert-answer-PC').text("").css({"font-size":"0"});
    }
}

function type_check_answer_Phone() {
    // スマホ
    if ($('.answer-Phone').val().length == 0) {
        $('.alert-answer-Phone').text("未入力").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
    } else if ($('.answer-Phone').val().length > 30) {
        $('.alert-answer-Phone').text("制限字数を超えております").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
    } else {
        $('.alert-answer-Phone').text("").css({"font-size":"0"});
    }
}

var type_miss_answer_PC = 0;
function type_answer_realtime_PC() {
    // PC・タブレット
    if ($('.answer-PC').val().length == 0) {
        $('.alert-answer-PC').text("未入力").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
        type_miss_answer_PC = 1;
    } else if ($('.answer-PC').val().length > 30) {
        $('.alert-answer-PC').text("制限字数を超えております").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
        type_miss_answer_PC = 1;
    } else {
        $('.alert-answer-PC').text("").css({"font-size":"0"});
        type_miss_answer_PC = 0;
    }

    if (type_miss_answer_PC == 0)
        answer_update_flg_PC = 1;
    else
        answer_update_flg_PC = 0;
}

var type_miss_answer_Phone = 0;
function type_answer_realtime_Phone() {
    if ($('.answer-Phone').val().length == 0) {
        $('.alert-answer-Phone').text("未入力").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
        type_miss_answer_Phone = 1;
    } else if ($('.answer-Phone').val().length > 30) {
        $('.alert-answer-Phone').text("制限字数を超えております").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
        type_miss_answer_Phone = 1;
    } else {
        $('.alert-answer-Phone').text("").css({"font-size":"0"});
        type_miss_answer_Phone = 0;
    }

    if (type_miss_answer_Phone == 0)
        answer_update_flg_Phone = 1;
    else
        answer_update_flg_Phone = 0;
}
// パスワード変更フォーム
var type_miss_password_1 = 0;
var type_miss_password_2 = 0;

function type_miss_password() {
    if ($('.new-password').val().length == 0) {
        $('.alert-password').text("未入力");
    } else if (!($('.new-password').val().length >= 8 && $('.new-password').val().length <= 30)) {
        $('.alert-password').text("字数が制限範囲外です");
    } else {
        $('.alert-password').text("");
    }

    if ($('.new-password-retype').val().length == 0) {
        $('.alert-password-retype').text("未入力");
    } else if (!($('.new-password-retype').val().length >= 8 && $('.new-password-retype').val().length <= 30)) {
        $('.alert-password-retype').text("字数が制限範囲外です");
    } else {
        $('.alert-password-retype').text("");
    }

    if (($('.new-password').val().length >= 8 && $('.new-password').val().length <= 30) &&
        ($('.new-password-retype').val().length >= 8 && $('.new-password-retype').val().length <= 30) &&
        ($('.new-password').val() != $('.new-password-retype').val())) {

        $('.alert-password').text("確認用と不一致です");
    }
}

function type_password_realtime() {
    if ($('.new-password').val().length == 0) {
        $('.alert-password').text("");
        type_miss_password_1 = 1;
    } else if (!($('.new-password').val().length >= 8 && $('.new-password').val().length <= 30)) {
        $('.alert-password').text("字数が制限範囲外です");
        type_miss_password_1 = 1;
    } else {
        $('.alert-password').text("");
        type_miss_password_1 = 0;
    }

    if ($('.new-password-retype').val().length == 0) {
        $('.alert-password-retype').text("");
        type_miss_password_2 = 1;
    } else if (!($('.new-password-retype').val().length >= 8 && $('.new-password-retype').val().length <= 30)) {
        $('.alert-password-retype').text("字数が制限範囲外です");
        type_miss_password_2 = 1;
    } else {
        $('.alert-password-retype').text("");
        type_miss_password_2 = 0;
    }

    if (($('.new-password').val().length >= 8 && $('.new-password').val().length <= 30) &&
        ($('.new-password-retype').val().length >= 8 && $('.new-password-retype').val().length <= 30) &&
        ($('.new-password').val() != $('.new-password-retype').val())) {

        $('.alert-password').text("確認用と不一致です");
        type_miss_password_1 = 3;
    }

    if (type_miss_password_1 == 0 && type_miss_password_2 == 0)
        new_password_update_flg = 1;
    else
        new_password_update_flg = 0;
};

// 2要素認証
function check_authentication_form_realtime_PC() {
    // PC・タブレット
    if ($('.authentication-setting-PC').val() == "質問") {
        $('.question-PC').prop('disabled', false);
        $('.answer-PC').prop('disabled', false);
    } else {
        $('.question-PC').prop('disabled', true);
        $('.answer-PC').prop('disabled', true);
    }
}

function check_authentication_form_realtime_Phone() {
    if ($('.authentication-setting-Phone').val() == "質問") {
        $('.question-Phone').prop('disabled', false);
        $('.answer-Phone').prop('disabled', false);
    } else {
        $('.question-Phone').prop('disabled', true);
        $('.answer-Phone').prop('disabled', true);
    }
}

