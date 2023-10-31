/*  ユーザーログインステータスチェック  */

let login_status_chat = 0;
function check_login_status() {
    if (list_id != null) {
        $.post('../check_login_status.php', {login_user_id: login_user_id, list_id: list_id}).done(function(res) {
            login_status_chat = res.flg;
        });
    } else
        login_status_chat = 0;
}

/*  チャット更新チェック  */
let now_chat_data_size = 0;

$.post('../chat_data_size_realtime_check.php', {now_chat_data_size: now_chat_data_size, login_user_id: login_user_id, list_id: list_id}).done(function(res) {
    now_chat_data_size = res.size;
});

function update_chat_realtime_check() {
    $.post('../chat_data_size_realtime_check.php', {now_chat_data_size: now_chat_data_size, login_user_id: login_user_id, list_id: list_id}).done(function(res) {
        if (login_user_gender == "男性")
            bg_color = "#80d0ff";
        else
            bg_color = "pink";

        if (now_chat_data_size != res.size && now_chat_data_size != 0) {
            $('.append-message').append(
                "<div class='message-wrapper'>" +
                    "<div class='padding'>" +
                        "<div style='display: flex; justify-content: start;'>" +
                            "<img src='" + res.image_name + "'>" +
                            "<div style='display: flex; align-items: end;'>" +
                                "<p style='background-color: " + bg_color + "' class='text-2'>" + nl2br(res.text) + "</p>" +
                                "<p class='time'>" + res.time + "</p>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>"
            );
            $(window).scrollTop($(window).height() * 200);
        } else {
            if (now_chat_data_size != res.size) {
                $('.append-message').append(
                    "<div class='message-wrapper'>" +
                        "<div class='padding'>" +
                            "<div style='display: flex; justify-content: start;'>" +
                                "<img src='" + res.image_name + "'>" +
                                "<div style='display: flex; align-items: end;'>" +
                                    "<p style='background-color: " + bg_color + "' class='text-2'>" + nl2br(res.text) + "</p>" +
                                    "<p class='time'>" + res.time + "</p>" +
                                "</div>" +
                            "</div>" +
                        "</div>" +
                    "</div>"
                );
                $(window).scrollTop($(window).height() * 200);
            }
        }
        now_chat_data_size = res.size;
    });
}

