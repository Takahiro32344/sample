/* 新着メッセージ・未読チャットチェック */

function info_realtime() {
    $.post('../get_chat_not_read.php', {login_user_id: login_user_id}).done(function(res) {
        if (res.size != 0) {
            $('.info-mark').css('opacity', '1');
            $('.info-mark-Phone').css('opacity', '1');
        } else {
            $('.info-mark').css('opacity', '0');
            $('.info-mark-Phone').css('opacity', '0');
        }
    });
}

function check_chat_not_read() {
    for (let i = 0; i < chat_room_counter.length; i++) {
        $.post('../get_chat_not_read.php', {login_user_id: login_user_id, list_id: chat_room_counter[i]}).done(function(res) {
            if (res.open != 0)
                $(`#chat-not-read-counter-${i}`).text("+" + res.open);
            else
                $(`#chat-not-read-counter-${i}`).text("");
        });
    }
}