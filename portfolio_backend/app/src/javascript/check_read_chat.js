
function check_read_chat() {
    $.post('../check_read_chat.php', {login_user_id: login_user_id, list_id: list_id}).done(function(res) {
        for (i = 0; i < res.chat_data.length; i++) {
            if (res.chat_data[i]['open'] == 1)
                $('#read-' + (i + 1)).text("既読");
            else
                $('#read-' + (i + 1)).text("未読");
        }
    });
}
