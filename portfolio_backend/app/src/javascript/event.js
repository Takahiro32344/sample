/*  イベント処理  */

// バリデーションアラートフォントサイズ
if (window.matchMedia('(min-width: 1100px)').matches)
    font_size_validate = "20px";
else if (window.matchMedia('(min-width: 769px)').matches)
    font_size_validate = "2vw";
else
    font_size_validate = "3vw";

function nl2br(str) {
    return str.replace(/[\n]/g, "<br />");
}

var side_bar = 0;
var menu_open = 0;

// サイドバーフラグ
$('.side-bar-change-button').on('click', function() {
    if (side_bar == 0) {
        $(this).text("⇨");
        side_bar = 1;
    } else {
        $(this).text("⇦");
        side_bar = 0;
    }
});

$('.menu').on('click', function() {
    if (menu_open == 0) {
        $('.menu-list').css('display','block');
        menu_open = 1;
    } else {
        $('.menu-list').css('display', 'none');
        menu_open = 0;
    }
});

/*  掲示板  */
let click = 0;
// 投稿
$('.btn-post').on('click', function() {
    if (login_user_gender == "男性")
        class_name = "btn-color-man";
    else
        class_name = "btn-color-woman";

    if ($('.board-text').val().length == 0) {
        $('.board-text').val("未入力です").css('color', 'red');
    } else if ($('.board-text').val().length > 200)
        $('.board-text').val("制限字数を超えております。").css('color', 'red');
    else if (!($('.board-text').val() == "未入力です" || $('.board-text').val() == "制限字数を超えております。")) {
        if (click == 0) {
            click = 1;
            $.post('../post_bullentin_board.php', {login_user_id:login_user_id, board_text: $('.board-text').val()}).done(function(res) {
                $('.board-text').val("");
                $('.post-now').prepend(
                    '<div class="text-id-' + res.id + ' bullentin-board-wrapper">' +
                        '<div class="flex-header">' +
                            '<p class="date">' + res.time + '</p>' +
                            '<input class="text-id" type="hidden" value='+ res.id + '></input>' +
                            '<button class="delete-text-' + res.id + ' ' + class_name + '">削除</button>' +
                        '</div>' +
                        '<div class="text-wrapper">' +
                            '<p class="text">' + nl2br(res.text) + '</p>' +
                        '</div>' +
                    '</div>'
                );
                $(`.delete-text-${res.id}`).on('click', function() {
                    $.post('../delete_bullentin_board.php', {login_user_id:login_user_id, board_text: res.id}).done(function(res){
                        $(`.text-id-${res.id}`).fadeOut(1000);
                    });
                });
                click = 0;
            });
        }
    }
});


// 削除
for (let i = 0; i < board_data_size; i++) {
    $(`.delete-text-${i}`).on('click', function() {
        if (click == 0) {
            click = 1;
            $.post('../delete_bullentin_board.php', {login_user_id:login_user_id, board_text: $(`.text-id-${i}`).val()}).done(function(res){
                $(`.text-${res.id}`).fadeOut(1000);
                click = 0;
            });
        }
    });
}
// チャットルーム生成
$('.btn-chat').on('click', function() {
    $.post('../create_chat_room.php', {btn_id: 1, login_user_id: login_user_id, list_id: $(this).val()});
});

// チャットメッセージフォーム
let input_chat_flg = 0;
let chat_send_flg = 0;

$('.chat-text').on('focusin', function() {
    input_chat_flg = 1;
}).on('focusout', function() {
    input_chat_flg = 0;
    $('.alert-chat').text("").css({'font-size': '0', 'margin-bottom': '0px'});
});

// チャット送信
$('.btn-send').on('click', function() {
    if (chat_send_flg == 1) {
        // 送信相手のチャットルーム生成
        $.post('../create_chat_room.php', {btn_id: 2, login_user_id: login_user_id, list_id: $(this).val()}).done(function(res) {
            $('.chat-text').val("");
        });
        // メッセージ登録
        if (click == 0) {
            click = 1;
            $.post('../regist_message.php', {login_user_id: login_user_id, list_id: $(this).val(), message: $('.chat-text').val()}).done(function(res){
                if (login_user_gender == "男性")
                    bg_color = "#50a0ff";
                else
                    bg_color = "palevioletred";

                if (res.open == 0)
                    read = "未読";
                else
                    read = "既読";

                $('.append-message').append(
                    "<div class='message-wrapper'>" +
                        "<div class='padding'>" +
                            "<div style='display: flex; justify-content: end;'>" +
                                "<div style='display: flex; align-items: end;'>" +
                                    "<div>" +
                                        "<p id='read-" + id_read + "' class='read'>" + read + "</p>" +
                                        "<p class='time'>" + res.time + "</p>" +
                                    "</div>" +
                                    "<p style='background-color: " + bg_color + ";' class='text-1'>" + nl2br(res.text) + "</p>" +
                                "</div>" +
                                "<img src='" + login_user_image_name + "'>" +
                            "</div>" +
                        "</div>" +
                    "</div>"
                );
                $(window).scrollTop($(window).height() * 200);
                id_read++;
                chat_send_flg = 0;
                click = 0;
            });
        }
    } else
        type_check_chat();
});


// チャットルーム内メッセージクリア
$('.btn-clear-message').on('click', function() {
    if (click == 0) {
        click = 1;
        $.post('../clear_chat.php', {login_user_id: login_user_id, list_id: $(this).val()}).done(function() {
            $('.submit').submit();
            click = 0;
        });
    }
});


// チャットルーム削除
for (let i = 1; i < id_counter; i++) {
    $('.btn-delete-chat-room-' + i).on('click', function() {
        if (click == 0) {
            click = 1;
            $.post('../delete_chat_list.php', {login_user_id: login_user_id, list_id: $(this).val()}).done(function(res) {
                $('.chat-room-wrapper-' + i).fadeOut(1000);
                if (res.size == 0) {
                    setTimeout(function(){
                        $('.search-box-form').css("display", "none");
                        $('.none-chat-room').text("履歴はありません");
                        $('.chat-history-page-btn-wrapper').css("display", "none");
                    }, 1000);
                }
                click = 0;
            });
        }
    });
}

// ユーザー検索 お気に入りに追加・削除
$('.btn-favorite').on('click', function() {
    if (click == 0) {
        click = 1;
        // 追加
        if ($('.btn-favorite').text() == "お気に入りに追加") {
            $.post('../add_favorite.php', {login_user_id: login_user_id, list_id: list_id}).done(function() {
                $('.btn-favorite').text("お気に入りから削除");
                click = 0;
            });
        // 削除
        } else {
            $.post('../delete_favorite.php', {login_user_id: login_user_id, list_id: list_id}).done(function() {
                $('.btn-favorite').text("お気に入りに追加");
                click = 0;
            });
        }
    }
});


// ユーザーリスト 削除
for (let i = 1; i < id_counter; i++) {
    $('.btn-delete-list-' + i).on('click', function() {
        if (click == 0) {
            click = 1;
            $.post('../delete_favorite.php', {login_user_id: login_user_id, list_id: $(this).val()}).done(function(res) {
                $('.list-data-wrapper-' + i).fadeOut(1000);
                if (res.size == 0) {
                    setTimeout(function() {
                        $('.search-box-form').css("display", "none");
                        $('.regist-list-none').text("現在登録されておりません");
                        $('.list-page-btn-wrapper').css("display", "none");
                    }, 1000);
                }
                click = 0;
            });
        }
    });
}


// 登録情報変更

// 登録画像
// PC
$('.btn-change-image-PC').on('click', function() {
    $('.upload-image-PC').submit();
});
// スマホ
$('.btn-change-image-Phone').on('click', function() {
    $('.upload-image-Phone').submit();
});


// 誕生日
// PC
$('.change-birth-year-PC').on('focusin', function() {
    $('.alert-birthday-PC').text("");
}).on('focusout', function() {
    $('.alert-birthday-PC').text("");
});

$('.change-birth-month-PC').on('focusin', function() {
    $('.alert-birthday-PC').text("");
}).on('focusout', function() {
    $('.alert-birthday-PC').text("");
});

$('.change-birth-day-PC').on('focusin', function() {
    $('.alert-birthday-PC').text("");
}).on('focusout', function() {
    $('.alert-birthday-PC').text("");
});

$('.btn-change-birthday-PC').on('click', function() {
    if (click == 0) {
        click = 1;
        $.post('../update_birthday.php', {login_user_id_name: login_user_id_name,new_birth_year: $('.change-birth-year-PC').val(), new_birth_month: $('.change-birth-month-PC').val(), new_birth_day: $('.change-birth-day-PC').val()}).done(function(res) {
            switch (res.error) {
                case 0:
                    $('.alert-birthday-PC').text('誕生日を変更しました。').css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
                    $('.birthday').text("誕生日：" + res.text);
                    break;
                case 1:
                    $('.change-birth-year-PC').css('color', 'red');
                    $('.change-birth-month-PC').css('color', 'red');
                    $('.change-birth-day-PC').css('color', 'red');
                    break;
                case 2:
                    $('.change-birth-year-PC').css('color', 'red');
                    $('.change-birth-month-PC').css('color', 'red');
                    $('.change-birth-day-PC').css('color', 'black');
                    break;
                case 3:
                    $('.change-birth-year-PC').css('color', 'black');
                    $('.change-birth-month-PC').css('color', 'red');
                    $('.change-birth-day-PC').css('color', 'red');
                    break;
                case 4:
                    $('.change-birth-year-PC').css('color', 'red');
                    $('.change-birth-month-PC').css('color', 'black');
                    $('.change-birth-day-PC').css('color', 'red');
                    break;
                case 5:
                    $('.change-birth-year-PC').css('color', 'red');
                    $('.change-birth-month-PC').css('color', 'black');
                    $('.change-birth-day-PC').css('color', 'black');
                    break;
                case 6:
                    $('.change-birth-year-PC').css('color', 'black');
                    $('.change-birth-month-PC').css('color', 'red');
                    $('.change-birth-day-PC').css('color', 'black');
                    break;
                case 7:
                    $('.change-birth-year-PC').css('color', 'black');
                    $('.change-birth-month-PC').css('color', 'black');
                    $('.change-birth-day-PC').css('color', 'red');
                    break;
            }
            click = 0;
        });
    }
});

// スマホ
$('.change-birth-year-Phone').on('focusin', function() {
    $('.alert-birthday-Phone').text("");
}).on('focusout', function() {
    $('.alert-birthday-Phone').text("");
});

$('.change-birth-month-Phone').on('focusin', function() {
    $('.alert-birthday-Phone').text("");
}).on('focusout', function() {
    $('.alert-birthday-Phone').text("");
});

$('.change-birth-day-Phone').on('focusin', function() {
    $('.alert-birthday-Phone').text("");
}).on('focusout', function() {
    $('.alert-birthday-Phone').text("");
});

$('.btn-change-birthday-Phone').on('click', function() {
    if (click == 0) {
        click = 1;
        $.post('../update_birthday.php', {login_user_id_name: login_user_id_name,new_birth_year: $('.change-birth-year-Phone').val(), new_birth_month: $('.change-birth-month-Phone').val(), new_birth_day: $('.change-birth-day-Phone').val()}).done(function(res) {
            switch (res.error) {
                case 0:
                    $('.alert-birthday-Phone').text('誕生日を変更しました。').css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
                    $('.birthday').text("誕生日：" + res.text);
                    break;
                case 1:
                    $('.change-birth-year-Phone').css('color', 'red');
                    $('.change-birth-month-Phone').css('color', 'red');
                    $('.change-birth-day-Phone').css('color', 'red');
                    break;
                case 2:
                    $('.change-birth-year-Phone').css('color', 'red');
                    $('.change-birth-month-Phone').css('color', 'red');
                    $('.change-birth-day-Phone').css('color', 'black');
                    break;
                case 3:
                    $('.change-birth-year-Phone').css('color', 'black');
                    $('.change-birth-month-Phone').css('color', 'red');
                    $('.change-birth-day-Phone').css('color', 'red');
                    break;
                case 4:
                    $('.change-birth-year-Phone').css('color', 'red');
                    $('.change-birth-month-Phone').css('color', 'black');
                    $('.change-birth-day-Phone').css('color', 'red');
                    break;
                case 5:
                    $('.change-birth-year-Phone').css('color', 'red');
                    $('.change-birth-month-Phone').css('color', 'black');
                    $('.change-birth-day-Phone').css('color', 'black');
                    break;
                case 6:
                    $('.change-birth-year-Phone').css('color', 'black');
                    $('.change-birth-month-Phone').css('color', 'red');
                    $('.change-birth-day-Phone').css('color', 'black');
                    break;
                case 7:
                    $('.change-birth-year-Phone').css('color', 'black');
                    $('.change-birth-month-Phone').css('color', 'black');
                    $('.change-birth-day-Phone').css('color', 'red');
                    break;
            }
            click = 0;
        });
    }
});

// 氏名
// PC
let input_name_flg_PC = 0;
let new_name_update_flg_PC = 0;

$('.change-name-PC').on('focusin', function() {
    input_name_flg_PC = 1;
    $('.change-birth-year-PC').css('color', 'black');
    $('.change-birth-month-PC').css('color', 'black');
    $('.change-birth-day-PC').css('color', 'black');
    $('.alert-birthday-PC').text("").css('font-size', '0');
}).on('focusout', function() {
    input_name_flg_PC = 0;
    $('.alert-name-PC').text('').css('font-size', '0');
    $('.change-birth-year-PC').css('color', 'black');
    $('.change-birth-month-PC').css('color', 'black');
    $('.change-birth-day-PC').css('color', 'black');
    $('.alert-birthday-PC').text("").css('font-size', '0');
});

$('.btn-change-name-PC').on('click', function() {
    if (new_name_update_flg_PC == 1) {
        if (click == 0) {
            click = 1;
            $.post('../update_name.php', {login_user_id_name: login_user_id_name, new_name: $('.change-name-PC').val()}).done(function() {
                $('.alert-name-PC').text("氏名を変更しました").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
                $('.user-name').text($('.change-name-PC').val());
                $('.menu-item-1').text($('.change-name-PC').val());
                $('.change-name-PC').val('');
                new_name_update_flg_PC = 0;
                click = 0;
            });
        }
    } else
        type_miss_name_check_PC();
});

let input_name_flg_Phone = 0;
let new_name_update_flg_Phone = 0;

// スマホ
$('.change-name-Phone').on('focusin', function() {
    input_name_flg_Phone = 1;
    $('.change-birth-year-Phone').css('color', 'black');
    $('.change-birth-month-Phone').css('color', 'black');
    $('.change-birth-day-Phone').css('color', 'black');
    $('.alert-birthday-Phone').text("").css('font-size', '0');
}).on('focusout', function() {
    input_name_flg_Phone = 0;
    $('.alert-name-Phone').text('').css('font-size', '0');
    $('.change-birth-year-Phone').css('color', 'black');
    $('.change-birth-month-Phone').css('color', 'black');
    $('.change-birth-day-Phone').css('color', 'black');
    $('.alert-birthday-Phone').text("").css('font-size', '0');
});

$('.btn-change-name-Phone').on('click', function() {
    if (new_name_update_flg_Phone == 1) {
        if (click == 0) {
            click = 1;
            $.post('../update_name.php', {login_user_id_name: login_user_id_name, new_name: $('.change-name-Phone').val()}).done(function() {
                $('.alert-name-Phone').text("氏名を変更しました").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
                $('.user-name').text($('.change-name-Phone').val());
                $('.menu-item-1').text($('.change-name-Phone').val()).css({'padding-top':'2vw', 'padding-bottom':'2vw', 'color':'white'});
                $('.change-name-Phone').val('');
                new_name_update_flg_Phone = 0;
                click = 0;
            });
        }
    } else
        type_miss_name_check_Phone();
});


// メールアドレス
// PC
let input_mail_flg_PC = 0;
let new_mail_update_flg_PC = 0;

$('.change-mail-PC').on('focusin', function() {
    input_mail_flg_PC = 1;
    $('.change-birth-year-PC').css('color', 'black');
    $('.change-birth-month-PC').css('color', 'black');
    $('.change-birth-day-PC').css('color', 'black');
}).on('focusout', function() {
    input_mail_flg_PC = 0;
    $('.alert-mail-PC').text('').css('font-size', '0');
    $('.change-birth-year-PC').css('color', 'black');
    $('.change-birth-month-PC').css('color', 'black');
    $('.change-birth-day-PC').css('color', 'black');
});

let check_mail_PC = 0;
$('.btn-change-mail-PC').on('click', function() {
    if (new_mail_update_flg_PC == 1) {
        if (click == 0) {
            click = 1;
            $.post('../check_email_regist.php', {mail: $('.change-mail-PC').val()}).done(function(res) {
                if (res.registed_mail == 0)
                    check_mail_PC = 1;
                else {
                    check_mail_PC = 0;
                    $('.alert-mail-PC').text("登録されている為使用できません").css('font-size', font_size_validate);
                }
                if (check_mail_PC == 1) {
                    $.post('../update_mail.php', {login_user_id_name: login_user_id_name, new_mail: $('.change-mail-PC').val()}).done(function() {
                        $('.alert-mail-PC').text("メールアドレスを変更しました").css('font-size', font_size_validate);
                        $('.mail').text("メールアドレス：" + $('.change-mail-PC').val());
                        $('.change-mail-PC').val('');
                        check_mail_PC = 0;
                        new_mail_update_flg_PC = 0;
                    });
                }
                click = 0;
            });
        }
    } else
        type_miss_mail_check_PC();
});

// スマホ
let input_mail_flg_Phone = 0;
let new_mail_update_flg_Phone = 0;

$('.change-mail-Phone').on('focusin', function() {
    input_mail_flg_Phone = 1;
    $('.change-birth-year-Phone').css('color', 'black');
    $('.change-birth-month-Phone').css('color', 'black');
    $('.change-birth-day-Phone').css('color', 'black');
}).on('focusout', function() {
    input_mail_flg_Phone = 0;
    $('.alert-mail-Phone').text('').css('font-size', '0');
    $('.change-birth-year-Phone').css('color', 'black');
    $('.change-birth-month-Phone').css('color', 'black');
    $('.change-birth-day-Phone').css('color', 'black');
});

let check_mail_Phone = 0;
$('.btn-change-mail-Phone').on('click', function() {
    if (new_mail_update_flg_Phone == 1) {
        if (click == 0) {
            click = 1;
            $.post('../check_email_regist.php', {mail: $('.change-mail-Phone').val()}).done(function(res) {
                if (res.registed_mail == 0)
                    check_mail_Phone = 1;
                else {
                    check_mail_Phone = 0;
                    $('.alert-mail-Phone').text("登録されている為使用できません").css('font-size', font_size_validate);
                }
                if (check_mail_Phone == 1) {
                    $.post('../update_mail.php', {login_user_id_name: login_user_id_name, new_mail: $('.change-mail-Phone').val()}).done(function() {
                        $('.alert-mail-Phone').text("メールアドレスを変更しました").css('font-size', font_size_validate);
                        $('.mail').text("メールアドレス：" + $('.change-mail-Phone').val());
                        $('.change-mail-Phone').val('');
                        check_mail_Phone = 0;
                        new_mail_update_flg_Phone = 0;
                    });
                }
                click = 0;
            });
        }
    } else
        type_miss_mail_check_Phone();
});

// 電話番号
// PC
let input_tel_flg_PC = 0;
let new_tel_update_flg_PC = 0;

$('.change-tel-PC').on('focusin', function() {
    input_tel_flg_PC = 1;
    $('.change-birth-year-PC').css('color', 'black');
    $('.change-birth-month-PC').css('color', 'black');
    $('.change-birth-day-PC').css('color', 'black');
}).on('focusout', function() {
    input_tel_flg_PC = 0;
    $('.alert-tel-PC').text('').css('font-size', '0');
    $('.change-birth-year-PC').css('color', 'black');
    $('.change-birth-month-PC').css('color', 'black');
    $('.change-birth-day-PC').css('color', 'black');
});

let check_tel_PC = 0;
$('.btn-change-tel-PC').on('click', function() {
    if (new_tel_update_flg_PC == 1) {
        if (click == 0) {
            click = 1;
            $.post('../check_tel_regist.php', {tel: $('.change-tel-PC').val()}).done(function(res) {
                if (res.registed_tel == 0)
                    check_tel_PC = 1;
                else {
                    check_tel_PC = 0;
                    $('.alert-tel-PC').text("登録されている為使用できません").css('font-size', font_size_validate);
                }
                if (check_tel_PC == 1) {
                    $.post('../update_tel.php', {login_user_id_name: login_user_id_name, new_tel: $('.change-tel-PC').val()}).done(function() {
                        $('.alert-tel-PC').text("電話番号を変更しました").css('font-size', font_size_validate);
                        $('.change-tel-PC').val('');
                        check_tel_PC = 0;
                        new_tel_update_flg_PC = 0;
                    });
                }
                click = 0;
            });
        }
    } else
        type_miss_tel_check_PC();
});

// スマホ
let input_tel_flg_Phone = 0;
let new_tel_update_flg_Phone = 0;

$('.change-tel-Phone').on('focusin', function() {
    input_tel_flg_Phone = 1;
    $('.change-birth-year-Phone').css('color', 'black');
    $('.change-birth-month-Phone').css('color', 'black');
    $('.change-birth-day-Phone').css('color', 'black');
}).on('focusout', function() {
    input_tel_flg_Phone = 0;
    $('.alert-tel-Phone').text('').css('font-size', '0');
    $('.change-birth-year-Phone').css('color', 'black');
    $('.change-birth-month-Phone').css('color', 'black');
    $('.change-birth-day-Phone').css('color', 'black');
});

let check_tel_Phone = 0;
$('.btn-change-tel-Phone').on('click', function() {
    if (new_tel_update_flg_Phone == 1) {
        if (click == 0) {
            click = 1;
            $.post('../check_tel_regist.php', {tel: $('.change-tel-Phone').val()}).done(function(res) {
                if (res.registed_tel == 0)
                    check_tel_Phone = 1;
                else {
                    check_tel_Phone = 0;
                    $('.alert-tel-Phone').text("登録されている為使用できません").css('font-size', font_size_validate);
                }
                if (check_tel_Phone == 1) {
                    $.post('../update_tel.php', {login_user_id_name: login_user_id_name, new_tel: $('.change-tel-Phone').val()}).done(function() {
                        $('.alert-tel-Phone').text("電話番号を変更しました").css('font-size', font_size_validate);
                        $('.change-tel-Phone').val('');
                        check_tel_Phone = 0;
                        new_tel_update_flg_Phone = 0;
                    });
                }
                click = 0;
            });
        }
    } else
        type_miss_tel_check_Phone();
});

// メールアドレス及び電話番号公開設定
// PC
$('.btn-change-publish-PC').on('click', function() {
    if (click == 0) {
        click = 1;
        $.post('../update_publish_setting.php', {login_user_id_name: login_user_id_name, setting_publish_mail: $('.publish-email-PC').val(), setting_publish_tel: $('.publish-tel-PC').val()}).done(function() {
            $('.alert-publish-setting-PC').text("公開設定を変更しました").css({'text-align': 'center','font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0', 'color':'red'});
            click = 0;
        });
    }
});

// スマホ
$('.btn-change-publish-Phone').on('click', function() {
    if (click == 0) {
        click = 1;
        $.post('../update_publish_setting.php', {login_user_id_name: login_user_id_name, setting_publish_mail: $('.publish-email-Phone').val(), setting_publish_tel: $('.publish-tel-Phone').val()}).done(function() {
            $('.alert-publish-setting-Phone').text("公開設定を変更しました").css({'text-align': 'center','font-size': font_size_validate, 'margin-top':'0', 'margin-bottom':'0', 'color':'red'});
            click = 0;
        });
    }
});

// 居住地
let input_address_flg_PC = 0;
let new_address_update_flg_PC = 0;
// PC
$('.change-address-1-PC').on('focusin', function() {
    $('.alert-address-PC').text("");
}).on('focusin', function() {
    $('.alert-address-PC').text("");
});

$('.change-address-2-PC').on('focusin', function() {
    input_address_flg_PC = 1;
}).on('focusout', function() {
    input_address_flg_PC = 0;
    $('.alert-address-PC').text('').css('font-size', '0');
});

$('.btn-change-address-PC').on('click', function() {
    if (click == 0) {
        click = 1;
        $.post('../update_address.php', {login_user_id_name: login_user_id_name, new_address_1: $('.change-address-1-PC').val(), new_address_2: $('.change-address-2-PC').val()}).done(function(res) {
            switch (res.update) {
                case 0:
                    $('.alert-address-PC').text("変更されませんでした").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
                    break;
                case 1:
                    $('.alert-address-PC').text("居住地1を変更しました").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
                    $('.address').text("居住地：" + $('.change-address-1-PC').val() + "：" + res.address_2);
                    break;
                case 2:
                    $('.alert-address-PC').text("居住地2を変更しました").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
                    $('.address').text("居住地：" + res.address_1 + "：" + $('.change-address-2-PC').val());
                    $('.change-address-2-PC').val("");
                    break;
                case 3:
                    $('.alert-address-PC').text("居住地1と居住地2を変更しました").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
                    $('.address').text("居住地：" + $('.change-address-1-PC').val() + "：" + $('.change-address-2-PC').val());
                    $('.change-address-2-PC').val("");
                    break;
            }
            new_address_update_flg_PC = 0;
            click = 0;
        });
    }
});

// スマホ
let input_address_flg_Phone = 0;
let new_address_update_flg_Phone = 0;

$('.change-address-1-Phone').on('focusin', function() {
    $('.alert-address-Phone').text("");
}).on('focusin', function() {
    $('.alert-address-Phone').text("");
});

$('.change-address-2-Phone').on('focusin', function() {
    input_address_flg_Phone = 1;
}).on('focusout', function() {
    input_address_flg_Phone = 0;
    $('.alert-address-Phone').text('').css('font-size', '0');
});

$('.btn-change-address-Phone').on('click', function() {
    if (click == 0) {
        click = 1;
        $.post('../update_address.php', {login_user_id_name: login_user_id_name, new_address_1: $('.change-address-1-Phone').val(), new_address_2: $('.change-address-2-Phone').val()}).done(function(res) {
            switch (res.update) {
                case 0:
                    $('.alert-address-Phone').text("変更されませんでした").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
                    break;
                case 1:
                    $('.alert-address-Phone').text("居住地1を変更しました").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
                    $('.address').text("居住地：" + $('.change-address-1-Phone').val() + "：" + res.address_2);
                    break;
                case 2:
                    $('.alert-address-Phone').text("居住地2を変更しました").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
                    $('.address').text("居住地：" + res.address_1 + "：" + $('.change-address-2-Phone').val());
                    $('.change-address-2-Phone').val("");
                    break;
                case 3:
                    $('.alert-address-Phone').text("居住地1と居住地2を変更しました").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
                    $('.address').text("居住地：" + $('.change-address-1-Phone').val() + "：" + $('.change-address-2-Phone').val());
                    $('.change-address-2-Phone').val("");
                    break;
            }
            new_address_update_flg_Phone = 0;
            click = 0;
        });
    }
});

// 二要素認証

$('select').on('focusin', function(){
    $('.alert-authentication-PC').text("").css({"font-size":"0"});
    $('.alert-authentication-Phone').text("").css({"font-size":"0"});
});

// 質問の答え
// PC
let answer_update_flg_PC = 0;
let input_answer_flg_PC = 0;

$('.answer-PC').on('focusin', function() {
    input_answer_flg_PC = 1;
    $('.alert-authentication-PC').text('').css('font-size', '0');
}).on('focusout', function() {
    input_answer_flg_PC = 0;
    $('.alert-answer-PC').text('').css('font-size', '0');
});

$('.answer-PC').on('focusin', function() {
    input_answer_flg_PC = 1;
    $('.alert-authentication-PC').text('').css('font-size', '0');
}).on('focusout', function() {
    input_answer_flg_PC = 0;
    $('.alert-answer-PC').text('').css('font-size', '0');
});

$('.btn-authentication-setting-PC').on('click', function() {
    if ($('.authentication-setting-PC').val() != "質問") {
        if (click == 0) {
            click = 1;
            $.post('../update_btn-authentication_setting.php', {login_user_id_name: login_user_id_name, authentication_setting: $('.authentication-setting-PC').val()}).done(function() {
                $('.alert-authentication-PC').text("設定を変更しました").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
                click = 0;
            });
        }
    } else {
        if (answer_update_flg_PC == 1) {
            if (click == 0) {
                click = 1;
                $.post('../update_btn-authentication_setting.php', {login_user_id_name: login_user_id_name, authentication_setting: $('.authentication-setting-PC').val(), question: $('.question-PC').val(), answer: $('.answer-PC').val()}).done(function() {
                    $('.alert-authentication-PC').text("設定が変更されました").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
                    $('.answer-PC').val("");
                    click = 0;
                });
            }
        } else
            type_check_answer_PC();
    }
});

// スマホ
let answer_update_flg_Phone = 0;
let input_answer_flg_Phone = 0;

$('.answer-Phone').on('focusin', function() {
    input_answer_flg_Phone = 1;
    $('.alert-authentication-Phone').text('').css('font-size', '0');
}).on('focusout', function() {
    input_answer_flg_Phone = 0;
    $('.alert-answer-Phone').text('').css('font-size', '0');
});

$('.answer-Phone').on('focusin', function() {
    input_answer_flg_Phone = 1;
    $('.alert-authentication-Phone').text('').css('font-size', '0');
}).on('focusout', function() {
    input_answer_flg_Phone = 0;
    $('.alert-answer-Phone').text('').css('font-size', '0');
});

$('.btn-authentication-setting-Phone').on('click', function() {
    if ($('.authentication-setting-Phone').val() != "質問") {
        if (click == 0) {
            click = 1;
            $.post('../update_btn-authentication_setting.php', {login_user_id_name: login_user_id_name, authentication_setting: $('.authentication-setting-Phone').val()}).done(function() {
                $('.alert-authentication-Phone').text("設定を変更しました").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
                click = 0;
            });
        }
    } else {
        if (answer_update_flg_Phone == 1) {
            if (click == 0) {
                click = 1;
                $.post('../update_btn-authentication_setting.php', {login_user_id_name: login_user_id_name, authentication_setting: $('.authentication-setting-Phone').val(), question: $('.question-Phone').val(), answer: $('.answer-Phone').val()}).done(function() {
                    $('.alert-authentication-Phone').text("設定が変更されました").css({"margin-top":"0", "margin-bottom":"0", "color":"red" , "font-size": font_size_validate});
                    $('.answer-Phone').val("");
                    click = 0;
                });
            }
        } else
            type_check_answer_Phone();
    }
});

let new_password_update_flg = 0;
let input_password_flg = 0;

// パスワード変更
$('.new-password').on('focusin', function() {
    input_password_flg = 1;
}).on('focusout', function() {
    input_password_flg = 0;
});

$('.new-password-retype').on('focusin', function() {
    input_password_flg = 1;
}).on('focusout', function() {
    input_password_flg = 0;
});

$('.update-password').on('click', function() {
    if (new_password_update_flg == 1) {
        if (click == 0) {
            click = 1;
            $.post('../update_password.php', {login_user_id_name: login_user_id_name, new_password: $('.new-password').val()}).done(function(res) {
                $('.alert-password').text("パスワードを変更しました");
                $('.new-password').val("");
                $('.new-password-retype').val("");
                new_password_update_flg = 0;
                click = 0;
            });
        }
    } else
        type_miss_password();
});

// アカウント削除
$('.delete-account').on('click', function() {
    if (click == 0) {
        click = 1;
        $.post('../delete_account.php', {login_user_id: login_user_id, login_user_id_name: login_user_id_name}).done(function() {
            location.href = './index.php';
            click = 0;
        });
    }
});

// タイマー処理
setInterval(function() {
    // バリデーションアラートフォントサイズ
    if (window.matchMedia('(min-width: 1100px)').matches)
        font_size_validate = "20px";
    else if (window.matchMedia('(min-width: 769px)').matches)
        font_size_validate = "2vw";
    else
        font_size_validate = "3vw";
    // サイドバーアニメーション
    sidebar_animation();
    // 新着チェック
    info_realtime();
    // 未読チャットチェック
    check_chat_not_read();
    // リストサイズチェック
    check_exist_chat_room();
    /*  登録情報変更バリデーション  */
    // チャットフォーム
    if (input_chat_flg == 1)
        type_check_chat();
    // ユーザーログインステータスチェック
    check_login_status();
    // チャット更新チェック・既読チェック
    if (login_status_chat == 1) {
        update_chat_realtime_check();
        check_read_chat();
    }
    // 氏名
    if (input_name_flg_PC == 1)
        type_name_realtime_PC();
    if (input_name_flg_Phone == 1)
        type_name_realtime_Phone();
    // メールアドレス
    if (input_mail_flg_PC == 1)
        type_mail_realtime_PC();
    if (input_mail_flg_Phone == 1)
        type_mail_realtime_Phone();
    // 電話番号
    if (input_tel_flg_PC == 1)
        type_tel_realtime_PC();
    if (input_tel_flg_Phone == 1)
        type_tel_realtime_Phone();
    // 居住地
    if (input_address_flg_PC == 1)
        type_address_realtime_PC();
    if (input_address_flg_Phone == 1)
        type_address_realtime_Phone();
    /*  パスワード入力バリデーション  */
    if (input_password_flg == 1)
        type_password_realtime();
    // 2要素認証
    if ($(window).width() > 768)
        check_authentication_form_realtime_PC();
    else
        check_authentication_form_realtime_Phone();
    // 質問の答え
    if (input_answer_flg_PC == 1)
        type_answer_realtime_PC();
    if (input_answer_flg_Phone == 1)
        type_answer_realtime_Phone();
}, 100);

