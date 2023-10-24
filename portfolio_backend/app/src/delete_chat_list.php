<?php
    try {
        // チャットルーム削除
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        $sql = $pdo->prepare("DELETE FROM chat_room WHERE room_no = :room_no AND account_id = :account_id AND from_id = :from_id;");
        $sql->execute(array(
            ":room_no" => $_POST['login_user_id'],
            ":account_id" => $_POST['login_user_id'],
            ":from_id" => $_POST['list_id']
        ));
        // チャットデータ削除
        $sql = $pdo->prepare("DELETE FROM chat WHERE room_no = :room_no AND account_id = :account_id AND to_id = :to_id;");
        $sql->execute(array(
            ":room_no" => $_POST['login_user_id'],
            ":account_id" => $_POST['login_user_id'],
            ":to_id" => $_POST['list_id']
        ));

        $sql = $pdo->prepare("DELETE FROM chat WHERE room_no = :room_no AND account_id = :account_id AND to_id = :to_id;");
        $sql->execute(array(
            ":room_no" => $_POST['login_user_id'],
            ":account_id" => $_POST['list_id'],
            ":to_id" => $_POST['login_user_id']
        ));
        // 送信者未読メッセージopenフラグを変更
        $sql = $pdo->prepare("UPDATE chat SET open = :open_1 WHERE room_no = :room_no AND account_id = :account_id AND to_id = :to_id AND open = :open_2;");
        $sql->execute(array(
            ":open_1" => 2,
            ":room_no" => $_POST['list_id'],
            ":account_id" => $_POST['list_id'],
            ":to_id" => $_POST['login_user_id'],
            ":open_2" => 0
        ));

        // チャットルーム
        $sql = $pdo->prepare("SELECT * FROM chat_room WHERE room_no = :room_no;");
        $sql->execute(array(
            ":room_no" => $_POST['login_user_id'],
        ));
        $chat_room_list = $sql->fetchAll(PDO::FETCH_ASSOC);

        $text = ["size" => sizeof($chat_room_list)];
        header('Content-type: application/json');
        echo json_encode($text);
    } catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>