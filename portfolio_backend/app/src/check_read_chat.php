<?php
    try {
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        // 既読にする
        $sql = $pdo->prepare("UPDATE chat SET open = :open_1 WHERE room_no = :room_no AND account_id = :account_id AND to_id = :to_id AND open = :open_2;");
        $sql->execute(array(
            ":open_1" => 1,
            ":room_no" => $_POST['list_id'],
            ":account_id" => $_POST['list_id'],
            ":to_id" => $_POST['login_user_id'],
            ":open_2" => 0
        ));
        $sql = $pdo->prepare("UPDATE chat SET open = :open_1 WHERE room_no = :room_no AND account_id = :account_id AND to_id = :to_id AND open = :open_2;");
        $sql->execute(array(
            ":open_1" => 1,
            ":room_no" => $_POST['login_user_id'],
            ":account_id" => $_POST['list_id'],
            ":to_id" => $_POST['login_user_id'],
            ":open_2" => 0
        ));

        $sql = $pdo->prepare("SELECT * FROM chat WHERE room_no = :room_no AND account_id = :account_id AND to_id = :to_id;");
        $sql->execute(array(
            ":room_no" => $_POST['login_user_id'],
            ":account_id" => $_POST['login_user_id'],
            ":to_id" => $_POST['list_id'],
        ));
        $read_chat_data = $sql->fetchAll(PDO::FETCH_ASSOC);

        $text = ["chat_data" => $read_chat_data];
        header('Content-type: application/json');
        echo json_encode($text);
    } catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>