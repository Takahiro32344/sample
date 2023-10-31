/*  着信時チャットルーム生成チェック  */

let now_chat_room_size = 0;

$.post('../check_exist_chat_room.php', {now_chat_room_size: now_chat_room_size, login_user_id: login_user_id}).done(function(res) {
    now_chat_room_size = res.size;
});

function check_exist_chat_room() {
    $.post('../check_exist_chat_room.php', {now_chat_room_size: now_chat_room_size, login_user_id: login_user_id}).done(function(res) {
        if (now_chat_room_size != res.size && res.size != 0 && now_chat_room_size < res.size)
            $('.info-chat-room').text("履歴にないユーザーからの着信があります。確認するにはページに再度訪れるかリロードしてください。");
        now_chat_room_size = res.size;
    });
}