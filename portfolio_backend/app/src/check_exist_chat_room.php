<?php
    try {
        // チャットルーム
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        $sql = $pdo->prepare("SELECT * FROM chat_room WHERE room_no = :room_no;");
        $sql->execute(array(
            ":room_no" => $_POST['login_user_id'],
        ));
        $chat_room_list = $sql->fetchAll(PDO::FETCH_ASSOC);

        if ($_POST['now_chat_room_size'] == 0 || $_POST['now_chat_room_size'] == sizeof($chat_room_list)) {
            $text = ["size" => sizeof($chat_room_list)];
            header('Content-type: application/json');
            echo json_encode($text);
        } else {
            $text = ["size" => sizeof($chat_room_list)];
            header('Content-type: application/json');
            echo json_encode($text);
        }

    } catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>