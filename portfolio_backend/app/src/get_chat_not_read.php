<?php
    try {
        $pdo = new PDO("mysql:dbname=test_db;host=run-php-db;", "test", "test");
        if (!empty($_POST['list_id'])) {
            $sql = $pdo->prepare("SELECT * FROM chat WHERE room_no = :room_no AND account_id = :account_id AND to_id = :to_id AND open = :open;");
            $sql->execute(array(
                ":room_no" => $_POST['list_id'],
                ":account_id" => $_POST['list_id'],
                ":to_id" => $_POST['login_user_id'],
                ":open" => 0
            ));
            $chat_not_read = $sql->fetchAll(PDO::FETCH_ASSOC);

            $text = ["open" => sizeof($chat_not_read)];
            header('Content-type: application/json');
            echo json_encode($text);
        } else {
            $sql = $pdo->prepare("SELECT * FROM chat WHERE room_no = :room_no AND to_id = :to_id AND open = :open;");
            $sql->execute(array(
                ":room_no" => $_POST['login_user_id'],
                ":to_id" => $_POST['login_user_id'],
                ":open" => 0
            ));
            $chat_not_read_all = $sql->fetchAll(PDO::FETCH_ASSOC);

            $text = ["size" => sizeof($chat_not_read_all)];
            header('Content-type: application/json');
            echo json_encode($text);
        }
    } catch (PDOException $e) {
        echo 'エラー:' . $e->getMessage() . '<br>';
    }
?>